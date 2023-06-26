
import Footer from '../Componentes/Footer.jsx'
import CrearProveedor from "../Layouts/ServicioProveedor/CrearProveedor.jsx"
import ListarProveedor from "../Layouts/ServicioProveedor/ListarProveedor.jsx"
import MenuAdmin from "../Componentes/MenuAdmin.jsx"

const Proveedores = () => {



  
  
 


  return (
    <div>
      <MenuAdmin/>
      <CrearProveedor/>
      <h1>Listado de proveedores</h1>
      <ListarProveedor/>
      <Footer/>
      </div>
  )
}

export default Proveedores