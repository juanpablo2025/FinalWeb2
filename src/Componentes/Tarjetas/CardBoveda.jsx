import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { dataBase } from "../../config/dataBase";

const CardBoveda = () => {
    const [servicios, setServicios] = useState([]);

    const mostrarServicios = async () => {
      const serviciosCollection = collection(dataBase, "Boveda");
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
        <table className="card">

<section className="dato">

  <p>Nombre</p>

  <p>URL</p>

  <p>Contraseña</p>
  <p>Usuario</p>
  
  


</section>

<section className="dato2">



  <p>{servicio.nombre}</p>

  <p>{servicio.urlImagen}</p>

  <p>{servicio.contrasena}</p>
  <p>{servicio.usuario}</p>
  

</section>
<img src={servicio.ulrImg} alt="" />

</table>
      </section>
    ))}
  </section>
  );
};

export default CardBoveda