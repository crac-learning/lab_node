import Joi from 'joi'

export const validateSignUp = (userData: Request) => {
  if (!userData || Object.keys(userData).length == 0) {
    throw new Error('Empty request body !!')
  }

  const Schema = Joi.object({
    fullName: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
  })

  return Schema.validateAsync(userData)
}

export const validateSignIn = (userData: any) => {
  if (!userData || Object.keys(userData).length === 0) {
    throw new Error('Empty request body!!')
  }

  const Schema = Joi.object({
    email: Joi.string().email(),
    password: Joi.string().required(),
  }).or('username', 'email') // Ensure that either 'username' or 'email' is present

  return Schema.validateAsync(userData)
}
