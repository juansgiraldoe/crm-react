import { Formik, Form, Field } from 'formik'
import * as Yup from 'Yup'
import Alerta from './Alerta'

const Formulario = () => {

  const nuevoClienteSchema = Yup.object().shape({
    nombre: Yup.string()
                .required('¡El nombre del cliente es obligatorio!')
                .max(20, 'El nombre es muy largo')
                .min(3, 'El nombre es muy corto'),
    empresa: Yup.string()
                .required('¡El nombre de la empresa es obligatoria!'),
    email: Yup.string()
              .required('¡El email es obligatorio!')
              .email('email no valido'),
    telefono: Yup.number()
                  .typeError('El numero no es valido')
                  .integer('Numero no valido')
                  .positive('Numero no valido'),
  })

  const handleSubmit = (valores) => {
    console.log(valores)
  }

  return (
    <div className="bg-white px-5 py-5 md:w-3/5 rounded-md shadow-md mx-auto my-14">
      <h1
        className="font-Poppins text-gray-400 font-semibold text-xl text-center mb-2 uppercase"
      >Nuevo Cliente. ✅</h1>
      <hr />
      <Formik
        initialValues={{
          nombre: '',
          empresa: '',
          email: '',
          telefono: '',
          notas: ''
        }}
        onSubmit={(values) => {
          handleSubmit(values)
        }}
        validationSchema={nuevoClienteSchema}
      >
        {({errors, touched}) => {
          
          return (
          <Form className='mt-5'>
            <div className='mb-5'>
              <label
                htmlFor='nombre'
                className='font-Poppins text-lg font-semibold text-gray-600'>👤 Nombre:</label>
              <Field
                id='nombre'
                type='text'
                className='block w-full p-2 bg-gray-50 rounded-md mt-1 text-md'
                placeholder='¿Como se llama tu cliente?'
                name='nombre'
              />
              {errors.nombre && touched.nombre ? (
                <Alerta>{errors.nombre}</Alerta>
              ) : null }
            </div>
            <div className='mb-5'>
              <label
                htmlFor='empresa'
                className='font-Poppins text-lg font-semibold text-gray-600'>🏭 Empresa:</label>
              <Field
                id='empresa'
                type='text'
                className='block w-full p-2 bg-gray-50 rounded-md mt-1 text-md'
                placeholder='Empresa del Cliente.'
                name='empresa'
              />
              {errors.empresa && touched.empresa ? (
                <Alerta>{errors.empresa}</Alerta>
              ) : null }
            </div>
            <div className='mb-5'>
              <label
                htmlFor='email'
                className='font-Poppins text-lg font-semibold text-gray-600'>📬 E-mail:</label>
              <Field
                id='email'
                type='email'
                className='block w-full p-2 bg-gray-50 rounded-md mt-1 text-md'
                placeholder='Correo electronico.'
                name='email'
              />
              {errors.email && touched.email ? (
                <Alerta>{errors.email}</Alerta>
              ) : null }
            </div>
            <div className='mb-5'>
              <label
                htmlFor='telefono'
                className='font-Poppins text-lg font-semibold text-gray-600'>📱 Telefono:</label>
              <Field
                id='telefono'
                type='tel'
                className='block w-full p-2 bg-gray-50 rounded-md mt-1 text-md'
                placeholder='¿Cual es el numero?'
                name='telefono'
              />
              {errors.telefono && touched.telefono ? (
                <Alerta>{errors.telefono}</Alerta>
              ) : null }
            </div>
            <div className='mb-5'>
              <label
                htmlFor='notas'
                className='font-Poppins text-lg font-semibold text-gray-600'>📝 Observaciones:</label>
              <Field
                as='textarea'
                id='notas'
                type='text'
                className='block w-full p-2 bg-gray-50 rounded-md mt-1 text-md h-28'
                placeholder='Notas del cliente.'
                name='notas'
              />
            </div>
            <input
              type="submit"
              value="¡Agregar Cliente! ✅"
              className='w-full font-Poppins bg-blue-900 text-white text-lg rounded-md py-2 font-bold'
            />
          </Form>
        )}}
      </Formik>
    </div>
  )
}

export default Formulario
