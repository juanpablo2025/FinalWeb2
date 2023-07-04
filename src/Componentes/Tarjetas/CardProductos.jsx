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
              <p>Nombre:{servicio.nombre}</p>
              <p>Cantidad:{servicio.cantidad}</p>
              <p>Valor:{servicio.valor}</p>
              <p>Descripcion:{servicio.descripcion}</p>
              <p>Categoria:{servicio.categoria}</p>
            </section>
          </section>
        </section>
      ))}
    </section>
  )
}

export default CardProductos