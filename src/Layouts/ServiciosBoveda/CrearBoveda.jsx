<<<<<<< HEAD
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
    <div> <h1>Registrar Boveda</h1>
    <section>
     <form className="formBovedas">
       <input
         onChange={(e) => setNombre(e.target.value)}
         placeholder={"Nombre"}
         type={"text"}
       />
       <input
         onChange={(e) => setUrlWeb(e.target.value)}
         placeholder={"Url de Imagen"}
         type={"text"}
       />
       <input
         onChange={(e) => setContrasena(e.target.value)}
         placeholder={"Contraseña"}
         type={"text"}
       />
       <input
         onChange={(e) => setUsuario(e.target.value)}
         placeholder={"Usuario"}
         type={"text"}
       />
        <section>Imagen:
    <input onChange={(e)=>setImg(e.target.files[0])} type="file" /></section>
        <input
         onClick={agregarBoveda}
         type={"button"}
         value={"Agregar Bodeva"}
       />
       
     </form>
    </section></div>
  )
}

=======
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
    <div> <h1>Registrar Boveda</h1>
    <section>
     <form className="formBovedas">
       <input
         onChange={(e) => setNombre(e.target.value)}
         placeholder={"Nombre"}
         type={"text"}
       />
       <input
         onChange={(e) => setUrlWeb(e.target.value)}
         placeholder={"Url de Imagen"}
         type={"text"}
       />
       <input
         onChange={(e) => setContrasena(e.target.value)}
         placeholder={"Contraseña"}
         type={"text"}
       />
       <input
         onChange={(e) => setUsuario(e.target.value)}
         placeholder={"Usuario"}
         type={"text"}
       />
        <section>Imagen:
    <input onChange={(e)=>setImg(e.target.files[0])} type="file" /></section>
        <input
         onClick={agregarBoveda}
         type={"button"}
         value={"Agregar Bodeva"}
       />
       
     </form>
    </section></div>
  )
}

>>>>>>> 584f500e553dc6beb1cebba2ded75d1a06ca788e
export default CrearBoveda