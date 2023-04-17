import { Router } from "express";
import test from './test'

const router = Router()

router.use('/', test)
router.use('/demo', test)

export default router
