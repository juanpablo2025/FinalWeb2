
import Footer from '../Componentes/Footer.jsx';
import CrearProductos from "../Layouts/ServicioProductos/CrearProductos.jsx";
import ListarProductos from "../Layouts/ServicioProductos/ListarProductos.jsx";
import MenuAdmin from "../Componentes/MenuAdmin.jsx";


const Productos = () => {
  


  return (
    <div>
      <MenuAdmin/>
      <CrearProductos/>
      <section className="titulos">Listado de Productos</section>
      <ListarProductos/>
      <Footer/>
      </div>
  )
}

export default Productos