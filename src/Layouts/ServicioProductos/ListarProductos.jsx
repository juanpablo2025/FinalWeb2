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
           <div>
        <table className="tabla">
        <tr>
        <td>Imagen</td>
        <td>Nombre</td>
        <td>Cantidad</td>
        <td>Valor</td>
        <td>Descripcion</td>
        <td>Categoria</td>
        <td>Botones</td>
        
      </tr>
      
      </table>
      </div>
      {servicios.map((servicio) => (
   
        <section key={servicio.id}>
          <table className="tabla">
            
            <tr>
              <td><img className="img-card" src={servicio.ulrImg} alt="" /></td>
              <td>{servicio.nombre}</td>
              <td>{servicio.cantidad}</td>
              <td>{servicio.valor}</td>
              <td>{servicio.descripcion}</td>
              <td>{servicio.categoria}</td>
              
              <td> <button className="botonesEliminar" onClick={(() => { eliminarServicio(servicio.id) })}>Quitar</button><button className="botonesEditar"><Link style={{color: 'white',textDecoration: 'none'}} to={'/editarProductos/' + servicio.id}>Editar</Link></button></td>               </tr>
            
          </table>
        </section>
      ))}
    </section>
  )
}

export default ListarProductos