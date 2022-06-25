import { Formik, Form, Field} from 'formik'

const Formulario = () => {
  return (
    <div className="bg-white px-5 py-5 md:w-3/5 rounded-md shadow-md mx-auto my-14">
      <h1
      className="font-Poppins text-gray-400 font-semibold text-xl text-center mb-2 uppercase"
      >Nuevo Cliente. ✅</h1>
      <hr />
      <Formik>
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
            />
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
            />
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
            />
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
            />
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
            />
          </div>
          <input
            type="submit"
            value="¡Agregar Cliente! ✅"
            className='w-full font-Poppins bg-blue-900 text-white text-lg rounded-md py-2 font-bold'
          />
        </Form>
      </Formik>
    </div>
  )
}

export default Formulario
