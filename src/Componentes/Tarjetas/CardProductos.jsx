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
          <section className="cards">

            <section className="card">
            <img className="img-card" src={servicio.ulrImg} />
              <p>{servicio.nombre}</p>
              <p>{servicio.cantidad}</p>
              <p>{servicio.valor}</p>
              <p>{servicio.descripcion}</p>
              <p>{servicio.categoria}</p>
            </section>
          </section>
        </section>
      ))}
    </section>
  )
}

export default CardProductos