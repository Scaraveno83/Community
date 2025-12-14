import express from 'express'
import {register, login, verifyEmail} from '../controllers/authController'

export const authRouter = express.Router()

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.get('/verify', verifyEmail)
