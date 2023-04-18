import { Router } from 'express'
const router = Router()
const { login, register } = require("../controllers/auth")

router.post('/login', login)
router.post('/register', register)

export default router
