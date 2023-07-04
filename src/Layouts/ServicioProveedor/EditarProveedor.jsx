import { updateDoc, doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../config/dataBase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"; 

const EditarProveedor = () => {
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [nit, setNit] = useState("");
    const [telefono, setTelefono] = useState("");
    const [nombreGerente, setNombreGerente] = useState("");
  

    const returnListado = useNavigate();
    const {id} = useParams()
  
    const editarServicio = async () => {
  
      const servicioCollection = doc(dataBase, "Proveedores", id);
      const servicio = {
        nombre,
        direccion,
        ciudad,
        nit,
        telefono,
        nombreGerente,
        
        
         
      };
      await updateDoc(servicioCollection, servicio, id);
      returnListado("/Proveedores");
    };
  
    const servicioActualizado = async (id) => {
      const servicio = await getDoc(doc(dataBase, "Proveedores",id));
      setNombre(servicio.data().nombre);
      setDireccion(servicio.data().direccion);
      setCiudad(servicio.data().ciudad);
      setNit(servicio.data().nit);
      setTelefono(servicio.data().telefono);
      setNombreGerente(servicio.data().nombreGerente);
      
     
  
    };
  
    useEffect(() => {
      servicioActualizado(id);
    }, [id]);
  
  return (
    <section>
      <form className="form-register">
      <section className="titulos-forms">EDITAR PROVEEDORES</section>
      <input className="controls"
      /* Para los proveedores es necesario almacenar
          nombre, dirección, ciudad, nit, teléfono 
          gerente, nombre gerente, imagen gerente 
          y el logo de la empresa*/

        onChange={(e) => setNombre(e.target.value)}
        placeholder={"Nombre "}
        type={"text"}
        value={nombre}
      />
      <input className="controls"
      onChange={(e) => setDireccion(e.target.value)}
      placeholder={"Direccion "}
      type={"text"}
      value={direccion}
      />
      <input className="controls"
      onChange={(e) => setCiudad(e.target.value)}
      placeholder={"Ciudad"}
      type={"text"}
      value={ciudad}
      />
      <input className="controls"
      onChange={(e) => setNit(e.target.value)}
      placeholder={"Nit"}
      type={"text"}
      value={nit}
      />
      <input className="controls"
      onChange={(e) => setTelefono(e.target.value)}
      placeholder={"Telefono"}
      type={"text"}
      value={telefono}
      />
      <input className="controls"
      onChange={(e) => setNombreGerente(e.target.value)}
      placeholder={"Nombre Gerente"}
      type={"text"}
      value={nombreGerente}
      />
    
    <input className="botons"
          onClick={editarServicio}
          type={"button"}
          value={"Editar servicio"}
        />
      </form>
    </section>
  )
}

export default EditarProveedor