<<<<<<< HEAD
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { dataBase } from "../../config/dataBase";

const CardProductos = () => {
    const [servicios, setServicios] = useState([]);

    const mostrarServicios = async () => {
      const serviciosCollection = collection(dataBase, "Productos");
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

  <p>Cantidad</p>

  <p>Valor</p>
  <p>Descripcion</p>
  <p>Categoria</p>
  
 
 


</section>

<section className="dato2">

  <p>{servicio.nombre}</p>

  <p>{servicio.cantidad}</p>

  <p>{servicio.valor}</p>
  <p>{servicio.descripcion}</p>
  <p>{servicio.categoria}</p>
  <img src={servicio.ulrImg} alt="" />
  
  

</section>

</section>
      </section>
    ))}
  </section>
  )
}

=======
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { dataBase } from "../../config/dataBase";

const CardProductos = () => {
    const [servicios, setServicios] = useState([]);

    const mostrarServicios = async () => {
      const serviciosCollection = collection(dataBase, "Productos");
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

  <p>Cantidad</p>

  <p>Valor</p>
  <p>Descripcion</p>
  <p>Categoria</p>
  
 
 


</section>

<section className="dato2">

  <p>{servicio.nombre}</p>

  <p>{servicio.cantidad}</p>

  <p>{servicio.valor}</p>
  <p>{servicio.descripcion}</p>
  <p>{servicio.categoria}</p>
  <img src={servicio.ulrImg} alt="" />
  
  

</section>

</section>
      </section>
    ))}
  </section>
  )
}

>>>>>>> 584f500e553dc6beb1cebba2ded75d1a06ca788e
export default CardProductos