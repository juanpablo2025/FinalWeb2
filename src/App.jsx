import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Clientes from "./Paginas/Clientes";
import Empleados from "./Paginas/Empleados";
import Productos from './Paginas/Productos';
import Proveedores from './Paginas/Proveedores';
import Boveda from './Paginas/Boveda';
const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Home</h1>
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
    path: '/Proovedores',
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
