import { Outlet, Link } from 'react-router-dom'
import Logo from '../img/google-cloud-logo-5.png'

const Layout = () => {
  return (
    <div className='md:flex md:min-h-screen'>
      <div className='md:w-1/6 bg-blue-600 py-10'>
        <header className='md:flex px-2'>
          <img src={Logo} className='w-10 md:h-auto' alt="Logo del crm" />
          <h2 className='mx-2 text-2xl font-bold text-center text-white'>CRM Clientes</h2>
        </header>
        <nav className='my-10'>
          <Link to="/clientes"
          className='text-white text-2xl block mt-3 hover:bg-blue-400 py-2 bg-blue-300
          font-semibold transition-all px-2'
          >Clientes</Link>
          <hr/>
          <Link to="/clientes/nuevo"
          className='text-white text-2xl block hover:bg-blue-400 py-2 bg-blue-300
          font-semibold transition-all px-2'
          >Nuevo Cliente</Link>
        </nav>
      </div>
      <div className='md:w-5/6'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
