import { updateDoc, doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../config/dataBase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"; 

const EditarClientes = () => {

    const [nombre, setNombre] = useState("");
    const [documento, setDocumento] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");
    const [barrio, setBarrio] = useState("");
    const [ciudad, setCiudad] = useState("");
   

    const returnListado = useNavigate();
    const {id} = useParams()
  
    const editarServicio = async () => {
  
      const servicioCollection = doc(dataBase, "Clientes", id);
      const servicio = {
        nombre,
      documento,
      correo,
      telefono,
      direccion,
      barrio,
      ciudad,
      
        
        
         
      };
      await updateDoc(servicioCollection, servicio, id);
      returnListado("/Clientes");
    };
  
    const servicioActualizado = async (id) => {
      const servicio = await getDoc(doc(dataBase, "Clientes",id));
      setNombre(servicio.data().nombre);
      setDocumento(servicio.data().documento);
      setCorreo(servicio.data().correo);
      setTelefono(servicio.data().telefono);
      setDireccion(servicio.data().direccion);
      setBarrio(servicio.data().barrio);
      setCiudad(servicio.data().ciudad);
    
      
     
  
    };
  
    useEffect(() => {
      servicioActualizado(id);
    }, [id]);
  
  return (
    <div >
      <section >
        <form className="form-register">

          <section className="titulos-forms">EDITAR CLIENTES</section>
          <input className="controls"
            onChange={(e) => setNombre(e.target.value)}
            placeholder={"Nombre "}
            type={"text"}
            value={nombre}
          />
          <input className="controls"
            onChange={(e) => setDocumento(e.target.value)}
            placeholder={"Documento "}
            type={"text"}
            max={'50'}
            value={documento}
          />
          <input className="controls"
            onChange={(e) => setCorreo(e.target.value)}
            placeholder={"Correo"}
            type={"text"}
            value={correo}
          />
          <input className="controls"
            onChange={(e) => setTelefono(e.target.value)}
            placeholder={"Telefono"}
            type={"text"}
            value={telefono}
          />
          <input className="controls"
            onChange={(e) => setDireccion(e.target.value)}
            placeholder={"Direccion"}
            type={"text"}
            value={direccion}
          />
          <input className="controls"
            onChange={(e) => setBarrio(e.target.value)}
            placeholder={"Barrio"}
            type={"text"}
            value={barrio}
          />
          <input className="controls"
            onChange={(e) => setCiudad(e.target.value)}
            placeholder={"Ciudad"}
            type={"text"}
            value={ciudad}
          />
         <input className="botons"
          onClick={editarServicio}
          type={"button"}
          value={"Editar servicio"}
        />
        </form>
      </section></div>
  )
}

export default EditarClientes