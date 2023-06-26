
import Footer from '../Componentes/Footer.jsx'
import CrearEmpleados from "../Layouts/ServiciosEmpleados/CrearEmpleados.jsx"

import ListarEmpleados from "../Layouts/ServiciosEmpleados/ListarEmpleados.jsx"
import MenuAdmin from "../Componentes/MenuAdmin.jsx"

const Empleados = () => {








  return (

    <div> <MenuAdmin/>
    <CrearEmpleados />
    <h1>Listado de Empleado</h1>
    <ListarEmpleados />
    <Footer /></div>
  )
}

export default Empleados