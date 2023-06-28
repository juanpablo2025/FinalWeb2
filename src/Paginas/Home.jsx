import Menu from "../Componentes/Menu.jsx"
import Footer from '../Componentes/Footer.jsx'
import Peliculas from "../Componentes/Peliculas.jsx"
import CrearClientes from "../Layouts/ServiciosClientes/CrearClientes.jsx"


const Home = () => {
  return (
    
  
        
         <div>
        <Menu/>
        
        <Peliculas/>
        <section className="registroDeClientes">
        <h1>REGISTRATE</h1>
        <CrearClientes/>
        </section>
        
        
        <Footer/>
        </div>
  )
}

export default Home