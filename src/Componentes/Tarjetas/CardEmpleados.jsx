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
    <section className="cards">
      {servicios.map((servicio) => (
        <section key={servicio.id}>


          <section className="card">
              <img className="img-card" src={servicio.ulrImg} />
              <p>{servicio.nombre}</p>
              <p>{servicio.documento}</p>
              <p>{servicio.correo}</p>
              <p>{servicio.cargo}</p>
              <p>{servicio.salario}</p>
              <p>{servicio.direccion}</p>
              <p>{servicio.cuenta}</p>
          </section>
        </section>
      ))}
    </section>
  )
}

export default CardEmpleados