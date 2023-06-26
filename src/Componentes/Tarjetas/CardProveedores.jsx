import { collection, getDocs} from "firebase/firestore";
import { useState, useEffect } from "react";
import { dataBase } from "../../config/dataBase";

const CardProveedores = () => {
    const [servicios, setServicios] = useState([]);

  const mostrarServicios = async () => {
    const serviciosCollection = collection(dataBase, "Proveedores");
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

  <p>Direccion</p>

  <p>Ciudad</p>
  <p>Nit</p>
  <p>Telefono</p>
  <p>Gerente</p>
 
  


</section>

<section className="dato2">

  <p>{servicio.nombre}</p>

  <p>{servicio.direccion}</p>

  <p>{servicio.ciudad}</p>
  <p>{servicio.nit}</p>
  <p>{servicio.telefono}</p>
  <p>{servicio.nombreGerente}</p>
  <img src={servicio.ulrImg} alt="" />
  

</section>

</section>
      </section>
    ))}
  </section>
  )
}

export default CardProveedores