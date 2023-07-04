import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Clientes from "./Paginas/Clientes";
import Empleados from "./Paginas/Empleados";
import Productos from './Paginas/Productos';
import Proveedores from './Paginas/Proveedores';
import Boveda from './Paginas/Boveda';
import Home from './Paginas/Home';
import './App.css'
import Admin from './Paginas/Admin';
import Info from './Paginas/Info';
import EditarProductos from './Layouts/ServicioProductos/EditarProductos';
import EditarProveedor from './Layouts/ServicioProveedor/EditarProveedor';
import EditarBoveda from './Layouts/ServiciosBoveda/EditarBoveda';
import EditarClientes from './Layouts/ServiciosClientes/EditarClientes';
import EditarEmpleados from './Layouts/ServiciosEmpleados/EditarEmpleados';
import Login from './Paginas/Login';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/Info',
    element: <Info/>
  },
  {
    path: '/Admin',
    element: <Admin/>
  },
  {
    path: '/Login',
    element: <Login/>
  },
  {
    path: '/Clientes',
    element: <Clientes />
  },
  {
    path: '/Empleados',
    element: <Empleados />
  },
  {
    path: '/Productos',
    element: <Productos />
  },
  {
    path: '/Proveedores',
    element: <Proveedores />
  },
  {
    path: '/Boveda',
    element: <Boveda/>
  },
  {
    path: '/editarProductos/:id',
    element: <EditarProductos />
  },
  {
    path: '/editarProveedores/:id',
    element: <EditarProveedor />
  }
  ,
  {
    path: '/editarBovedas/:id',
    element: <EditarBoveda />
  }
  ,
  {
    path: '/editarClientes/:id',
    element: <EditarClientes />
  },
  {
    path: '/editarEmpleados/:id',
    element: <EditarEmpleados/>
  }
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
