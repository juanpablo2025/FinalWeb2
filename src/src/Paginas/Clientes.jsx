


import Footer from '../Componentes/Footer.jsx'
import ListarClientes from "../Layouts/ServiciosClientes/ListarClientes.jsx"
import MenuAdmin from "../Componentes/MenuAdmin.jsx"
import CrearClientes from "../Layouts/ServiciosClientes/CrearClientes.jsx"
const Clientes = () => {
  
  return (
    <div>
      <MenuAdmin/>

      <CrearClientes/>
      <h1>Listado de Clientes</h1>
      <ListarClientes/>
      <Footer/>
      </div>
  )
}

export default Clientes