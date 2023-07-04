import Menu from "../Componentes/Menu.jsx";
import Footer from "../Componentes/Footer.jsx";
import Peliculas from "../Componentes/Peliculas.jsx";
import CrearClientes from "../Layouts/ServiciosClientes/CrearClientes.jsx";


const Home = () => {
  return (
    <section className="body">
      <Menu />

      <section className="banner" >
			
			</section>
      
      <section className="titulos">ULTIMOS ESTRENOS<section/>
      </section>
      <Peliculas />

      <section>
        <CrearClientes />
      </section>

      <Footer />
    </section>
  );
};

export default Home;
