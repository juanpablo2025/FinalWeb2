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
    

            <section className="cards">

 {
                servicios.map((servicio) => (
                
                  <section className="card" key={servicio.id}>
                    <img className="img-card" src={servicio.ulrImg} />
                    <p>nombre: {servicio.nombre}</p>
                    <p>UrlWeb: {servicio.urlWeb}</p>
                    <p>Contraseña: {servicio.contrasena}</p>
                    <p>Usuario: {servicio.usuario}</p>
                  </section>   
                  ))
}
    
             </section> 
    
  )
           
}

export default CardBoveda