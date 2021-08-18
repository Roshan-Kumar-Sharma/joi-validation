const express = require('express')
const createHttpError = require('http-errors')
const { userSchema } = require('../configs/validation')

const router = express.Router()

router.get('/', (req, res) => {
    // console.log('Hello from express')
    res.send('Hello from express')
})

router.post('/login', (req, res) => {
    res.send('login route')

})

router.post('/register', async (req, res, next) => {
    // res.send('register route')
    try{
        const user = await userSchema.validateAsync(req.body)

        const id = Date.now();

        res.json({
            message: 'Data validation was successful. You have been registered.',
            user: Object.assign({id}, user)
        })
    }
    catch(err){
        if(err.isJoi === true)
            err.status = 422
        next(err)
    }
})

router.use((req, res, next) => {
    next(createHttpError.NotFound('This endpoint is not available'))
})

router.use((err, req, res, next) => {
    res.status(err.status || 500).send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    })
})

module.exports = router