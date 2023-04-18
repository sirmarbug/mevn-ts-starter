import { Router } from "express";
import auth from './auth'
import post from './post'
import authMiddleware from '../middlewares/auth'

const router = Router()

router.use('/auth', auth)
router.use('/posts', authMiddleware, post)

export default router
