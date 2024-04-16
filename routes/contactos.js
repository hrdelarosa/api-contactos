import { Router } from 'express'

import { ContactController } from '../controllers/contactos.js'

export const contactRouter = Router()

contactRouter.get('/', ContactController.getAll)
contactRouter.get('/:id', ContactController.getById)
contactRouter.post('/', ContactController.create)
contactRouter.patch('/:id', ContactController.update)
