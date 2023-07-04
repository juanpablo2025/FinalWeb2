import { updateDoc, doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../config/dataBase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"; 

const EditarBoveda = () => {
    const [nombre,setNombre]=useState("");
    const [urlWeb,setUrlWeb]=useState("")
    const [contrasena,setContrasena]=useState("");
    const [usuario,setUsuario]=useState("");
  

    const returnListado = useNavigate();
    const {id} = useParams()
  
    const editarServicio = async () => {
  
      const servicioCollection = doc(dataBase, "Boveda", id);
      const servicio = {
        nombre,
        
          urlWeb,
          contrasena,
          usuario
          
        
        
         
      };
      await updateDoc(servicioCollection, servicio, id);
      returnListado("/Boveda");
    };
  
    const servicioActualizado = async (id) => {
      const servicio = await getDoc(doc(dataBase, "Boveda",id));
      setNombre(servicio.data().nombre);
      setUrlWeb(servicio.data().urlWeb);
      setContrasena(servicio.data().contrasena);
      setUsuario(servicio.data().usuario);
    
      
     
  
    };
  
    useEffect(() => {
      servicioActualizado(id);
    }, [id]);
  
    
  return (
    <section>
    <form className="form-register">
    <section className="titulos-forms">EDITAR BOVEDA</section>

      <input className="controls"
        onChange={(e) => setNombre(e.target.value)}
        placeholder={"Nombre"}
        type={"text"}
        value={nombre}
      />
      <input className="controls"
        onChange={(e) => setUrlWeb(e.target.value)}
        placeholder={"Url de Imagen"}
        type={"text"}
        value={urlWeb}
      />
      <input className="controls"
        onChange={(e) => setContrasena(e.target.value)}
        placeholder={"Contraseña"}
        type={"text"}
        value={contrasena}
      />
      <input className="controls"
        onChange={(e) => setUsuario(e.target.value)}
        placeholder={"Usuario"}
        type={"text"}
        value={usuario}
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

export default EditarBoveda