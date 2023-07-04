
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { dataBase } from "../../config/dataBase";
import { Link } from "react-router-dom";

const ListarProveedor = () => {
  const [servicios, setServicios] = useState([]);

  const mostrarServicios = async () => {
    const serviciosCollection = collection(dataBase, "Proveedores");
    const data = await getDocs(serviciosCollection);
    console.log(data.docs);
    setServicios(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const eliminarServicio = async (id) => {
    const servicioEliminado = doc(dataBase, 'Proveedores', id)
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
          <td>Imagen</td>
          <td>Nombre</td>

          <td>Direccion</td>

          <td>Ciudad</td>
          <td>Nit</td>
          <td>Telefono</td>
          <td>Gerente</td>

          <td>Botones</td>


        </tr>

      </table>
      {servicios.map((servicio) => (
        <section key={servicio.id}>
          <table className="tabla">



            <tr>
              <td><img className="img-card" src={servicio.ulrImg} alt="" /></td>

              <td>{servicio.nombre}</td>

              <td>{servicio.direccion}</td>

              <td>{servicio.ciudad}</td>
              <td>{servicio.nit}</td>
              <td>{servicio.telefono}</td>
              <td>{servicio.nombreGerente}</td>
              <td> <button className="botonesEliminar" onClick={(() => { eliminarServicio(servicio.id) })}>Quitar</button><button className="botonesEditar"><Link style={{color: 'white',textDecoration: 'none'}} to={'/editarProveedores/' + servicio.id}>Editar</Link></button></td>   

            </tr>

          </table>
        </section>
      ))}
    </section>
  )
}

export default ListarProveedor

