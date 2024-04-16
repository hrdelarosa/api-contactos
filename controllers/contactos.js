// import { ContactModel } from '../models/local/contactos.js'
import { ContactModel } from '../models/database/contactos.js'
import { validateContact, validatePartialContact } from '../schemas/contactos.js'

export class ContactController {
  static async getAll (req, res) {
    const contact = await ContactModel.getAll()
    res.json(contact)
  }

  static async getById (req, res) {
    const { id } = req.params
    const contact = await ContactModel.getById({ id })
    if (contact) return res.json(contact)

    res.status(404).json({ message: 'Contact not found' })
  }

  static async create (req, res) {
    const result = validateContact(req.body)

    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

    const newContact = await ContactModel.create({ input: result.data })

    res.status(201).json(newContact)
  }

  static async update (req, res) {
    const result = validatePartialContact(req.body)

    if (result.error) {
      return res.status(404).json({ error: JSON.parse(result.error.message) })
    }

    const { id } = req.params

    const updateContact = await ContactModel.update({ id, input: result.data })

    return res.json(updateContact)
  }
}
