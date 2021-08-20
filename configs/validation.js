const joi = require('joi')

const userSchema = joi.object({
    username: joi.string().alphanum().min(3).required(),
    email: joi.string().email().lowercase().required(),
    password: joi.string().required().pattern(new RegExp('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?])')),
    birthday: joi.date().iso()
})

const postSchema = joi.object({
    htmlContent: joi.string().required(),
    tags: joi.array().items(joi.string().required()).required(),
    reactions: joi.object({
        clapped: joi.array()
    }),
    postedBy: joi.string().required()
})

module.exports = {userSchema, postSchema}