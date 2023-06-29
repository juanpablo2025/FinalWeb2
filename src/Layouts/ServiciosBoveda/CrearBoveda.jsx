import { collection, addDoc } from "firebase/firestore";
import { dataBase, subirImagen } from "../../config/dataBase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CrearBoveda = () => {
    const [nombre,setNombre]=useState("");
    const [urlWeb,setUrlWeb]=useState("")
    const [contrasena,setContrasena]=useState("");
    const [usuario,setUsuario]=useState("");
    const [img, setImg] = useState(null);
    
    
    const returnListado =useNavigate();

    const agregarBoveda= async()=>{

      const ulrImg = await subirImagen(img)
        const servicioCollection = collection(dataBase,"Boveda");
        const servicio = {
          nombre,
          urlWeb,
          contrasena,
          usuario,
          ulrImg
        };
    
        await addDoc(servicioCollection,servicio);
        returnListado("/Boveda");
         
      };
    
    
  return (
    <section>
     <form className="form-register">
     <section className="titulos-forms">REGISTRAR BOVEDA</section>

       <input className="controls"
         onChange={(e) => setNombre(e.target.value)}
         placeholder={"Nombre"}
         type={"text"}
       />
       <input className="controls"
         onChange={(e) => setUrlWeb(e.target.value)}
         placeholder={"Url de Imagen"}
         type={"text"}
       />
       <input className="controls"
         onChange={(e) => setContrasena(e.target.value)}
         placeholder={"Contraseña"}
         type={"text"}
       />
       <input className="controls"
         onChange={(e) => setUsuario(e.target.value)}
         placeholder={"Usuario"}
         type={"text"}
       />
        <section>Imagen:
    <input className="controls" onChange={(e)=>setImg(e.target.files[0])} type="file" /></section>
        <input className="botons"
         onClick={agregarBoveda}
         type={"button"}
         value={"Agregar Bodeva"}
       />
       
     </form>
    </section>
  )
}

export default CrearBoveda