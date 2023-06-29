import Menu from "../Componentes/Menu.jsx";
import Footer from "../Componentes/Footer.jsx";
import Peliculas from "../Componentes/Peliculas.jsx";
import CrearClientes from "../Layouts/ServiciosClientes/CrearClientes.jsx";

const Home = () => {
  return (
    <section className="body">
      <Menu />
      <section className="titulos">
        <h1>ULTIMOS ESTRENOS</h1>
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
