const z = require('zod')

const userSchema = z.object({
    name: z.string({
        invalid_type_error: 'User name must be a String',
        required_error: 'User name is required'
    }),
    last: z.string({
        invalid_type_error: 'User last must be a String',
        required_error: 'User last is required'
    }).default("Unknown"),
    password: z.string({
        invalid_type_error: 'User password must be a String',
        required_error: 'User password is required'
    }),
    email: z.string({
        invalid_type_error: 'User email must be a String',
        required_error: 'User email is required'
    }),
    code: z.string({
        invalid_type_error: 'User code must be a String',
        required_error: 'User code is required'
    }),
    preferencias: z.string({
        invalid_type_error: 'User code must be a String',
        required_error: 'User code is required'
    }),
})

function validateUser(obj) {
    return userSchema.safeParse(obj); // safeParse vs parse
}

module.exports = {
    validateUser
}