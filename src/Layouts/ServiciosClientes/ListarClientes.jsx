<<<<<<< HEAD
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
      {servicios.map((servicio) => (
        <section key={servicio.id}>
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
              <td> <button onClick={(() => { eliminarServicio(servicio.id) })}>Eliminar</button></td>
            </tr>
            <tr>
              <td><img src={servicio.ulrImg} alt="" /></td>
              <td>{servicio.nombre}</td>
              <td>{servicio.documento}</td>
              <td>{servicio.correo}</td>
              <td>{servicio.telefono}</td>
              <td>{servicio.direccion}</td>
              <td>{servicio.barrio}</td>
              <td>{servicio.ciudad}</td>
              <td> <Link to={'/Admin' + servicio.id}>Editar</Link></td>
            </tr>

          </table>



        </section>
      ))}
    </section>
  )
}
=======
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
      {servicios.map((servicio) => (
        <section key={servicio.id}>
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
              <td> <button onClick={(() => { eliminarServicio(servicio.id) })}>Eliminar</button></td>
            </tr>
            <tr>
              <td><img src={servicio.ulrImg} alt="" /></td>
              <td>{servicio.nombre}</td>
              <td>{servicio.documento}</td>
              <td>{servicio.correo}</td>
              <td>{servicio.telefono}</td>
              <td>{servicio.direccion}</td>
              <td>{servicio.barrio}</td>
              <td>{servicio.ciudad}</td>
              <td> <Link to={'/Admin' + servicio.id}>Editar</Link></td>
            </tr>

          </table>



        </section>
      ))}
    </section>
  )
}
>>>>>>> 584f500e553dc6beb1cebba2ded75d1a06ca788e
export default ListarClientes;