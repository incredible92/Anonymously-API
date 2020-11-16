import { Router } from 'express'
import { loginPolicy, registerPolicy} from '../policies'
import { login, register } from '../services/auth.services'
import { serverResponse } from '../utils'
const router = Router()

router.post('/login', loginPolicy, login)
router.post('/register', registerPolicy, register)

router.get('/', (req, res) => {
  serverResponse(res, 'API works!')
})

export default router