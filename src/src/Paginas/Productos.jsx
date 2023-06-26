
import Footer from '../Componentes/Footer.jsx';
import CrearProductos from "../Layouts/ServicioProductos/CrearProductos.jsx";
import ListarProductos from "../Layouts/ServicioProductos/ListarProductos.jsx";
import MenuAdmin from "../Componentes/MenuAdmin.jsx";


const Productos = () => {
  


  return (
    <div>
      <MenuAdmin/>
      <CrearProductos/>
      <h1>Listado de Productos</h1>
      <ListarProductos/>
      <Footer/>
      </div>
  )
}

export default Productos