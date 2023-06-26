import Menu from "../Componentes/Menu"
import CardCliente from "../Componentes/Tarjetas/cardCliente"
import CardEmpleados from "../Componentes/Tarjetas/cardEmpleados"
import CardProductos from "../Componentes/Tarjetas/cardProductos"
import CardProveedores from "../Componentes/Tarjetas/cardProveedores"

const Info = () => {
  return (
    <div className="Info"><Menu/>
    <h1>Nuestros Productos</h1>
    <CardProductos/>
    <h1>Nuestros empleados</h1>
    <CardEmpleados/>
    <h1>Nuestros Proveedores</h1>
    <CardProveedores/>
    <h1>Nuestros Clientes</h1>
    <CardCliente/>
    </div>
  )
}

export default Info