import { readJSON } from '../../utils.js'
import { randomUUID } from 'node:crypto'
const contacts = readJSON('./contactos.json')

export class ContactModel {
  static async getAll () {
    return contacts
  }

  static async getById ({ id }) {
    const contacto = contacts.find(contacto => contacto.id === id)
    return contacto
  }

  static async create ({ input }) {
    const newContact = {
      id: randomUUID(),
      ...input
    }

    contacts.push(newContact)

    return newContact
  }

  static async update ({ id, input }) {
    const indexContact = contacts.findIndex(contacto => contacto.id === id)
    if (indexContact === -1) return false

    contacts[indexContact] = {
      ...contacts[indexContact],
      ...input
    }

    return contacts[indexContact]
  }
}
