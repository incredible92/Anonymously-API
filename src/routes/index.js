import { Router } from 'express'
import { loginPolicy } from '../policies'
import { login } from '../services/auth.services'
import { serverResponse } from '../utils'
const router = Router()

router.post('/login', loginPolicy, login)

router.get('/', (req, res) => {
  serverResponse(res, 'API works!')
})

export default router