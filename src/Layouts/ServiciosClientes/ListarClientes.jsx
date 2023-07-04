import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { dataBase } from "../../config/dataBase";

import { Link } from "react-router-dom";


const ListarClientes = () => {


  const [servicios, setServicios] = useState([]);

  const mostrarServicios = async () => {
    const serviciosCollection = collection(dataBase, "Clientes");
    const data = await getDocs(serviciosCollection);
    console.log(data.docs);
    setServicios(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const eliminarServicio = async (id) => {
    const servicioEliminado = doc(dataBase, 'Clientes', id)
    await deleteDoc(servicioEliminado)
    mostrarServicios()
  }
  useEffect(() => {
    mostrarServicios();
  }, []);
  console.log(servicios);
  return (
    <section>
      <table className="tabla">
        <tr>
          <td>Img</td>
          <td>Nombre</td>
          <td>Documento</td>
          <td>Correo</td>
          <td>Telefono</td>
          <td>Direccion</td>
          <td>Barrio</td>
          <td>Ciudad</td>
          <td>Botones</td>
        </tr>
      </table>
      {servicios.map((servicio) => (
        <section key={servicio.id}>
          <table className="tabla">

            <tr>
              <td><img className="img-card" src={servicio.ulrImg} alt="" /></td>
              <td>{servicio.nombre}</td>
              <td>{servicio.documento}</td>
              <td>{servicio.correo}</td>
              <td>{servicio.telefono}</td>
              <td>{servicio.direccion}</td>
              <td>{servicio.barrio}</td>
              <td>{servicio.ciudad}</td>
              <td> <button className="botonesEliminar" onClick={(() => { eliminarServicio(servicio.id) })}>Quitar</button><button className="botonesEditar"><Link style={{color: 'white',textDecoration: 'none'}} to={'/editarClientes/' + servicio.id}>Editar</Link></button></td>            

            </tr>

          </table>



        </section>
      ))}
    </section>
  )
}
export default ListarClientes;