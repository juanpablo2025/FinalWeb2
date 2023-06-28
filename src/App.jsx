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
