import { Router } from 'express'
import * as controller from '../controllers/tests'

const router = Router()

router.get('/', controller.getTests)
router.get('/:id', controller.getTestsById)
router.post('/', controller.postTests)
router.put('/', controller.putTests)
router.delete('/', controller.deleteTests)

export default router

