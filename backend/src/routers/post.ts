import { Router } from "express";
const {create, getAll, getById, update, remove} = require("../controllers/post");
const router = Router()

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

export default router
