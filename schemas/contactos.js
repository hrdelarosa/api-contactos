import { object as _object, string } from 'zod'

// const schemaContacto = _object({
//   name: string({
//     invalid_type_error: 'El nombre del contacto debe ser string',
//     required_error: 'El nombre es requerido.'
//   }),
//   phone: string({
//     invalid_type_error: 'El telefono del contacto debe ser string',
//     required_error: 'El telefono es requerido.'
//   }),
//   'e-mail': string({
//     invalid_type_error: 'El e-amil del contacto debe ser string',
//     required_error: 'El e-mail es requerido.'
//   }),
//   city: string({
//     invalid_type_error: 'La ciudad del contacto debe ser string',
//     required_error: 'La ciudad es requerido.'
//   }),
//   address: string({
//     invalid_type_error: 'La dirección del contacto debe ser string',
//     required_error: 'La dirección es requerido.'
//   })
// })

const schemaContacto = _object({
  nombre: string({
    invalid_type_error: 'El nombre del contacto debe ser string',
    required_error: 'El nombre es requerido.'
  }),
  phone: string({
    invalid_type_error: 'El telefono del contacto debe ser string',
    required_error: 'El telefono es requerido.'
  }),
  email: string({
    invalid_type_error: 'El e-amil del contacto debe ser string',
    required_error: 'El e-mail es requerido.'
  }),
  city: string({
    invalid_type_error: 'La ciudad del contacto debe ser string',
    required_error: 'La ciudad es requerido.'
  }),
  address: string({
    invalid_type_error: 'La dirección del contacto debe ser string',
    required_error: 'La dirección es requerido.'
  })
})

export function validateContact (object) {
  return schemaContacto.safeParse(object)
}

export function validatePartialContact (object) {
  return schemaContacto.partial().safeParse(object)
}
