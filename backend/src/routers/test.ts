import { Router } from "express";
const {get} = require("../controllers/test");
const router = Router()

router.get('/', get)

export default router
