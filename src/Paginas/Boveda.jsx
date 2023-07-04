
import CrearBoveda  from "../Layouts/ServiciosBoveda/CrearBoveda.jsx"
import ListarBoveda from "../Layouts/ServiciosBoveda/ListarBoveda.jsx"
import Footer from '../Componentes/Footer.jsx'
import MenuAdmin from "../Componentes/MenuAdmin.jsx"




const Boveda = () => {



  





  return (
    <div>
      <MenuAdmin/>
    <CrearBoveda/>
    <section className="titulos">Listado de Contraseñas</section>
    <ListarBoveda/>
     <Footer/>
      </div>
  )
}

export default Boveda