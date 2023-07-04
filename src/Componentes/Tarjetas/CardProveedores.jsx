import { collection, getDocs } from "firebase/firestore";
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
<section className="cards">
          <section className="card">
          <img className="img-card" src={servicio.ulrLogo}/>
            <p>Nombre: {servicio.nombre}</p>
            <p>Direccion: {servicio.direccion}</p>
            <p>Ciudad: {servicio.ciudad}</p>
            <p>Nit: {servicio.nit}</p>
            <p>Telefono: {servicio.telefono}</p>
            <p>Gerente: {servicio.nombreGerente}</p>
            <img className="img-card" src={servicio.ulrImg}/>

          </section>

        </section>
        </section>
      
  ))
}
  </section >
  )
}

export default CardProveedores