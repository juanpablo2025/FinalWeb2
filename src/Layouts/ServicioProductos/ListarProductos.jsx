import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { dataBase } from "../../config/dataBase";
import { Link } from "react-router-dom";


const ListarProductos = () => {
  const [servicios, setServicios] = useState([]);

  const mostrarServicios = async () => {
    const serviciosCollection = collection(dataBase, "Productos");
    const data = await getDocs(serviciosCollection);
    console.log(data.docs);
    setServicios(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const eliminarServicio = async (id) => {
    const servicioEliminado = doc(dataBase, 'Productos', id)
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
              <td>Imagen</td>
              <td>Nombre</td>
              <td>Cantidad</td>
              <td>Valor</td>
              <td>Descripcion</td>
              <td>Categoria</td>
              <td> <button onClick={(() => { eliminarServicio(servicio.id) })}>Eliminar</button></td>
            </tr>
            <tr>
              <td><img src={servicio.ulrImg} alt="" /></td>
              <td>{servicio.nombre}</td>
              <td>{servicio.cantidad}</td>
              <td>{servicio.valor}</td>
              <td>{servicio.descripcion}</td>
              <td>{servicio.categoria}</td>
              <td> <Link to={'/Admin' + servicio.id}>Editar</Link></td>
            </tr>
          </table>
        </section>
      ))}
    </section>
  )
}

export default ListarProductos