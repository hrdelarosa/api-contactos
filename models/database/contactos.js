import mysql from 'mysql2/promise'

const config = {
  host: 'localhost',
  user: 'root',
  port: 3306,
  password: '191102',
  database: 'agenda'
}

const connection = await mysql.createConnection(config)

export class ContactModel {
  static async getAll () {
    const [contact] = await connection.query('SELECT * FROM contact;')

    return contact
  }

  static async getById ({ id }) {
    const [contact] = await connection.query('SELECT * FROM contact WHERE id = ?;', [id])

    if (contact.length === 0) return null

    return contact[0]
  }

  static async create ({ input }) {
    const {
      nombre,
      phone,
      email,
      city,
      address
    } = input

    try {
      await connection.query(`INSERT INTO contact (nombre, phone, email, city, address) 
        VALUES(?, ?, ?, ?, ?);`, [nombre, phone, email, city, address])
    } catch (e) {
      throw new Error('Error crating Contact')
    }

    const [contact] = await connection.query('SELECT * FROM contact WHERE nombre = ?;', [nombre])
    return contact
  }

  static async update ({ id, input }) {

  }
}
