const joi = require("joi");

const userSchema = joi.object({
    username: joi
        .string()
        .pattern(
            new RegExp("^(?!_)(?:[A-Za-z0-9]+|([_])(?!\1))*(?!_)([A-Za-z0-9])$")
        )
        .messages({
            "string.pattern.base":
                "Username must not contain underscore at start and end and mutiple underscores in a row is not allowed",
        })
        .min(3)
        .trim()
        .required(),
    bio: joi.string(),
    email: joi.string().email().lowercase().required(),
    password: joi
        .string()
        .pattern(
            new RegExp(
                "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[-+_!@#$%^&*.,?])"
            )
        )
        .trim()
        .min(4)
        .max(8)
        .messages({
            "string.pattern.base":
                "Password must be atleast 4 characters long, with a mix of uppercase, lowercase, number and special characters",
        })
        .required(),
    birthday: joi.date().iso(),
});

const postSchema = joi.object({
    htmlContent: joi.string().required(),
    tags: joi.array().items(joi.string().required()).max(5).required(),
    reactions: joi.object({
        clapped: joi.array(),
    }),
    postedBy: joi.string().required(),
});

module.exports = { userSchema, postSchema };
