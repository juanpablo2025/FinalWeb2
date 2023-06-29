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
    <section className="cards">
      {servicios.map((servicio) => (
        <section key={servicio.id}>

          <section className="card">
          <img className="img-card" src={servicio.ulrImg}/>
            <p>{servicio.nombre}</p>
            <p>{servicio.direccion}</p>
            <p>{servicio.ciudad}</p>
            <p>{servicio.nit}</p>
            <p>{servicio.telefono}</p>
            <p>{servicio.nombreGerente}</p>

          </section>

        </section>
      
  ))
}
  </section >
  )
}

export default CardProveedores