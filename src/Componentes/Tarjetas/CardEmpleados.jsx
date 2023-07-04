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
<section className="cards">

          <section className="card">
              <img className="img-card" src={servicio.ulrImg} />
              <p>Nombre:    {servicio.nombre}</p>
              <p>Documento: {servicio.documento}</p>
              <p>Correo:    {servicio.correo}</p>
              <p>Cargo:     {servicio.cargo}</p>
              <p>Salario:   {servicio.salario}</p>
              <p>Direccion: {servicio.direccion}</p>
              <p>Cuenta:    {servicio.cuenta}</p>
          </section>
        </section>
        </section>
      ))}
    </section>
  )
}

export default CardEmpleados