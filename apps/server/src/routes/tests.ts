import { Router } from 'express'
import * as controller from '../controllers/tests'

const router = Router()

router.get('/', controller.getTests)
router.post('/', controller.postTests)
router.get('/:id', controller.getTestsById)
router.put('/:id', controller.putTests)
router.delete('/:id', controller.deleteTests)

export default router

