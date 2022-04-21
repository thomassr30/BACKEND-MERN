import { Router } from "express";
const router = Router()

router.get('/posts')
router.get('/posts/:id')
router.post('/posts')
router.put('/posts/:id')
router.delete('/posts/:id')



export default router