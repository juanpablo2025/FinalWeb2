import Menu from "../Componentes/Menu"
import CardCliente from "../Componentes/Tarjetas/cardCliente"
import CardEmpleados from "../Componentes/Tarjetas/cardEmpleados"
import CardProductos from "../Componentes/Tarjetas/cardProductos"
import CardProveedores from "../Componentes/Tarjetas/cardProveedores"

const Info = () => {
  return (
    <div className="Info">
    <Menu/>
    <section className="titulos">Nuestros productos</section>
    <CardProductos/>
    <section className="titulos">Nuestros empleados</section>
    <CardEmpleados/>
    <section className="titulos">Nuestros proveedores</section>
    <CardProveedores/>
    <section className="titulos">Nuestros clientes</section>
    <CardCliente/>
    </div>
  )
}

export default Info