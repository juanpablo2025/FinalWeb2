import { collection, getDocs} from "firebase/firestore";
import { useState, useEffect } from "react";
import { dataBase } from "../../config/dataBase";


const CardCliente = () => {

    const [servicios, setServicios] = useState([]);

  const mostrarServicios = async () => {
    const serviciosCollection = collection(dataBase, "Clientes");
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
<p>Telefono</p>
<p>Direccion</p>
<p>Barrio</p>
<p>Ciudad</p>
</section>




<section className="dato2">



<p>{servicio.nombre}</p>

<p>{servicio.documento}</p>

<p>{servicio.correo}</p>
<p>{servicio.telefono}</p>
<p>{servicio.direccion}</p>
<p>{servicio.barrio}</p>
<p>{servicio.ciudad}</p>

</section>
<img src={servicio.ulrImg} alt="" />
</section>
        
        
        
      </section>
    ))}
  </section>
  )
}

export default CardCliente