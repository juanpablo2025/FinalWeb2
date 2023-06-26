<<<<<<< HEAD
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { dataBase } from "../../config/dataBase";

const CardEmpleados = () => {
    const [servicios, setServicios] = useState([]);

    const mostrarServicios = async () => {
      const serviciosCollection = collection(dataBase, "Empleados");
      const data = await getDocs(serviciosCollection);
      console.log(data.docs);
      setServicios(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
   
    useEffect(() => {
      mostrarServicios();
    }, []);
    console.log(servicios);
  return (
    <section className="contenido">
    {servicios.map((servicio) => (
      <section key={servicio.id}>   
        

        <section className="card">

<section className="dato">

  <p>Nombre</p>

  <p>Documento</p>

  <p>Correo</p>
  <p>Cargo</p>
  <p>Salario</p>
  <p>Direccion</p>
  <p>Cuenta</p>
  


</section>

<section className="dato2">



  <p>{servicio.nombre}</p>

  <p>{servicio.documento}</p>

  <p>{servicio.correo}</p>
  <p>{servicio.cargo}</p>
  <p>{servicio.salario}</p>
  <p>{servicio.direccion}</p>
  <p>{servicio.cuenta}</p>

</section>

</section>


        
<img src={servicio.ulrImg} alt="" />
        
      </section>
    ))}
  </section>
  )
}

=======
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { dataBase } from "../../config/dataBase";

const CardEmpleados = () => {
    const [servicios, setServicios] = useState([]);

    const mostrarServicios = async () => {
      const serviciosCollection = collection(dataBase, "Empleados");
      const data = await getDocs(serviciosCollection);
      console.log(data.docs);
      setServicios(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
   
    useEffect(() => {
      mostrarServicios();
    }, []);
    console.log(servicios);
  return (
    <section className="contenido">
    {servicios.map((servicio) => (
      <section key={servicio.id}>   
        

        <section className="card">

<section className="dato">

  <p>Nombre</p>

  <p>Documento</p>

  <p>Correo</p>
  <p>Cargo</p>
  <p>Salario</p>
  <p>Direccion</p>
  <p>Cuenta</p>
  


</section>

<section className="dato2">



  <p>{servicio.nombre}</p>

  <p>{servicio.documento}</p>

  <p>{servicio.correo}</p>
  <p>{servicio.cargo}</p>
  <p>{servicio.salario}</p>
  <p>{servicio.direccion}</p>
  <p>{servicio.cuenta}</p>

</section>

</section>


        
<img src={servicio.ulrImg} alt="" />
        
      </section>
    ))}
  </section>
  )
}

>>>>>>> 584f500e553dc6beb1cebba2ded75d1a06ca788e
export default CardEmpleados