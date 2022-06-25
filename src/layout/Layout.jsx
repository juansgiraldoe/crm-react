import { Outlet, Link, useLocation } from 'react-router-dom'

const Layout = () => {

  const location = useLocation()
  const urlActual = location.pathname

  return (
    <div className='md:flex md:min-h-screen'>
      <div className='md:w-1/6 bg-blue-900 py-10'>
        <h2 className='mx-2 text-2xl font-bold text-center text-white font-Poppins'>CRM Clientes</h2>
        <nav className='my-10'>
          <Link to="/clientes"
          className={`${urlActual === '/clientes' ? 'bg-blue-600' : 'bg-blue-400'} rounded-md mx-3 text-center
          text-lg block hover:bg-blue-600 py-2 font-bold transition-all px-2 text-white font-Poppins`}
          >Clientes</Link>
          <Link to="/clientes/nuevo"
          className={`${urlActual === '/clientes/nuevo' ? 'bg-blue-600' : 'bg-blue-400'} rounded-md mx-3 text-center
          text-lg block hover:bg-blue-600 py-2 font-bold transition-all px-2 text-white font-Poppins my-3`}
          >Nuevo Cliente</Link>
        </nav>
      </div>
      <div className='md:w-5/6 p-6 bg-gray-100'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
