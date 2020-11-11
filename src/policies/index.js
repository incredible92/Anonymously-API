import Joi from 'joi'
import { serverResponse } from '../utils'

export const loginPolicy = (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string().alphanum().min(2).required(),
    password: Joi.string().min(5).required()
  })

  const { error } = schema.validate(req.body)

  if (error) return serverResponse(res, error.details[0].message, 400)

  next()
}