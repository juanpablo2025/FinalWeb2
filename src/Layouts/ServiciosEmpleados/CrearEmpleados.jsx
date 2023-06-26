import { collection,addDoc }  from "firebase/firestore";
import { dataBase,subirImagen } from "../../config/dataBase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CrearEmpleados = () => {

    const [nombre,setNombre]=useState("");
    const [documento,setDocumento]=useState("");
    const [correo,setCorreo]=useState("");
    const [cargo,setCargo]=useState("");
    const [salario,setSalario]=useState("");
    const [direccion,setDireccion]=useState("");
    const [cuenta,setCuenta]=useState("");
   /*imagen del empleado*/ 
   const [img, setImg] = useState(null);

   const returnListado = useNavigate();
   const agregarEmpleado =async()=>{
    const ulrImg = await subirImagen(img)

    const servicioCollection=collection(dataBase,"Empleados");
    const servicio={
      nombre,
      documento,
      correo,
      cargo,
      salario,
      direccion,
      cuenta,
      ulrImg
      
    };
    await addDoc(servicioCollection,servicio);
    returnListado("/empleados")

   }
  return (
    <div>
    <h1>Registrar Empleados</h1>
    <section>
      <form className="formEmpleados">
        <input

        /*  Para los empleados es necesario guardar 
      nombre, documento, correo, cargo, salario, 
      dirección de residencia, número de cuenta bancaria,
      imagen del empleado  
  */
        onChange={(e)=>setNombre(e.target.value)}
        placeholder={"Nombre"}
        type={"text"}
        />
        <input 
        onChange={(e)=>setDocumento(e.target.value)}
        placeholder={"Documento"}
        type={"text"} 
        />
        <input
        onChange={(e)=>setCorreo(e.target.value)}
        placeholder={"Correo"}
        type={"text"}
        />
        <input
        onChange={(e)=>setCargo(e.target.value)}
        placeholder={"Cargo"}
        type={"text"}
        />
        <input
        onChange={(e)=>setSalario(e.target.value)}
        placeholder={"salario"}
        type={"text"}
        />
        <input
        onChange={(e)=>setDireccion(e.target.value)}
        placeholder={"Direccion"}
        type={"text"}
        />
        <input
        onChange={(e)=>setCuenta(e.target.value)}
        placeholder={"Cuenta"}
        type={"text"}
        />

<section>Imagen:
    <input onChange={(e)=>setImg(e.target.files[0])} type="file" /></section>
        
        <input
          onClick={agregarEmpleado}
          type={"button"}
          value={"Agregar empleados"}
        />
      </form>
    </section> 
    </div>
  )
}

export default CrearEmpleados