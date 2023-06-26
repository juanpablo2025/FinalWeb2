import Menu from "../Componentes/Menu.jsx"
import Footer from '../Componentes/Footer.jsx'
import Peliculas from "../Componentes/Peliculas.jsx"
import CrearClientes from "../Layouts/ServiciosClientes/CrearClientes.jsx"


const Home = () => {
  return (
    
  
        
         <div>
        <Menu/>
        <h1>Home</h1>
        <Peliculas/>
        <h1>Registrate</h1>
        <CrearClientes/>
        
        <Footer/>
        </div>
  )
}

export default Home