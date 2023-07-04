


import Footer from '../Componentes/Footer.jsx'
import ListarClientes from "../Layouts/ServiciosClientes/ListarClientes.jsx"
import MenuAdmin from "../Componentes/MenuAdmin.jsx"
import CrearClientes from "../Layouts/ServiciosClientes/CrearClientes.jsx"
const Clientes = () => {
  
  return (
    <div>
      <MenuAdmin/>

      <CrearClientes/>
      <section className="titulos">Listado de Clientes</section>
      <ListarClientes/>
      <Footer/>
      </div>
  )
}

export default Clientes