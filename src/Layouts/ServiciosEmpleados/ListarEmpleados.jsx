import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { dataBase } from "../../config/dataBase";
import { Link } from "react-router-dom";
const ListarEmpleados = () => {
  const [servicios, setServicios] = useState([]);

  const mostrarServicios = async () => {
    const serviciosCollection = collection(dataBase, "Empleados");
    const data = await getDocs(serviciosCollection);
    console.log(data.docs);
    setServicios(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const eliminarServicio = async (id) => {
    const servicioEliminado = doc(dataBase, 'Empleados', id)
    await deleteDoc(servicioEliminado)
    mostrarServicios()
  }
  useEffect(() => {
    mostrarServicios();
  }, []);
  console.log(servicios);

  {/*
            <section className="card-boveda">

 {
                servicios.map((servicio) => (
                
                  <section className="card" key={servicio.id}>
                    <img className="img-card" src={servicio.ulrImg} />
                    <p>{servicio.nombre}</p>
                    <p>{servicio.urlWeb}</p>
                    <p>{servicio.contrasena}</p>
                    <p>{servicio.usuario}</p>
                  </section>   
                  ))
};
    
             </section> 
    
  )
           
}
*/ }
  return (
    <section>
      <table className="tabla">



  
          <tr>
            <td>Imagen</td>
            <td>Nombre</td>
            <td>Documento</td>

            <td>correo</td>

            <td>Cargo</td>
            <td>Salario</td>
            <td>Direccion</td>
            <td>Cuenta</td>

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
              <td>{servicio.cargo}</td>
              <td>{servicio.salario}</td>
              <td>{servicio.direccion}</td>
              <td>{servicio.cuenta}</td>
             
              <td> <button className="botonesEliminar" onClick={(() => { eliminarServicio(servicio.id) })}>Quitar</button><button className="botonesEditar"><Link style={{color: 'white',textDecoration: 'none'}} to={'/editarEmpleados/' + servicio.id}>Editar</Link></button></td>            </tr>
          </table>
        </section>
      ))}
    </section>
  )
}

export default ListarEmpleados