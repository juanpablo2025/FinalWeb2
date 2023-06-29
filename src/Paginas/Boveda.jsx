
import CrearBoveda  from "../Layouts/ServiciosBoveda/CrearBoveda.jsx"
import ListarBoveda from "../Layouts/ServiciosBoveda/ListarBoveda.jsx"
import Footer from '../Componentes/Footer.jsx'
import MenuAdmin from "../Componentes/MenuAdmin.jsx"




const Boveda = () => {



  





  return (
    <div>
      <MenuAdmin/>
    <CrearBoveda/>
    <section className="titulo-b">Listado de Contraseña</section>
    <ListarBoveda/>
     <Footer/>
      </div>
  )
}

export default Boveda