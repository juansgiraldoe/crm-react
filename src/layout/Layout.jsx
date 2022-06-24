import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='md:flex md:min-h-screen'>
      <div className='md:w-1/5 bg-blue-600 px-5 py-10'>
        <h2 className='text-3xl font-bold text-center text-white'>CRM Clientes</h2>
        <nav className='my-10'>
          <a href="/clientes"
          className='text-white text-2xl block mt-3 hover:bg-blue-400 py-2 bg-blue-300
          rounded-full text-center font-semibold'
          >Clientes</a>
          <a href="/clientes/nuevo"
          className='text-white text-2xl block mt-3 hover:bg-blue-400 py-2 bg-blue-300
          rounded-full text-center font-semibold'
          >Nuevo Cliente</a>
        </nav>
      </div>
      <div className='md:w-4/5'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
