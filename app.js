const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT

const appRouter = require('./routes/app.routes')

const app = express();

require('./configs/app.configs')(app)


app.use(appRouter)


app.listen(PORT, () => {
    console.log(`server is up at port ${PORT}`)
})