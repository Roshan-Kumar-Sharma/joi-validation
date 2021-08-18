const joi = require('joi')

const userSchema = joi.object({
    username: joi.string().alphanum().min(3).required(),
    email: joi.string().email().lowercase().required(),
    password: joi.string().pattern(new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?])')),
    birthday: joi.date().iso()
})

module.exports = {userSchema}