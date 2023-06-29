import { collection, addDoc } from "firebase/firestore";
import { dataBase,subirImagen } from "../../config/dataBase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CrearClientes = () => {

  const [nombre, setNombre] = useState("");
  const [documento, setDocumento] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [barrio, setBarrio] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [img, setImg] = useState(null);
  
  const returnListado = useNavigate();
  const agregarCliente = async () => {
    const ulrImg = await subirImagen(img)

   
    
    const servicioCollection = collection(dataBase, "Clientes");
    const servicio = {
      nombre,
      documento,
      correo,
      telefono,
      direccion,
      barrio,
      ciudad,
      ulrImg
      
    };
    await addDoc(servicioCollection, servicio);
    /*cambiar redireccion*/ 
    returnListado("/Clientes");
  };
  /*  <section className="form-register">
    <h4>Formulario Registro</h4>
    <input class="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su Nombre">
    <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese su Apellido">
    <input class="controls" type="email" name="correo" id="correo" placeholder="Ingrese su Correo">
    <input class="controls" type="password" name="correo" id="correo" placeholder="Ingrese su Contraseña">
    <p>Estoy de acuerdo con <a href="#">Terminos y Condiciones</a></p>
    <input class="botons" type="submit" value="Registrar">
    <p><a href="#">¿Ya tengo Cuenta?</a></p>
  </section>*/ 
  return (
    <div >
    <section >
    <form className="form-register">

      <section className="titulo-registrate">REGISTRATE</section>
      <input className="controls"
        onChange={(e) => setNombre(e.target.value)}
        placeholder={"Nombre "}
        type={"text"}
      />
      <input className="controls"
        onChange={(e) => setDocumento(e.target.value)}
        placeholder={"Documento "}
        type={"text"}
        max={'50'}
      />
      <input className="controls"
        onChange={(e) => setCorreo(e.target.value)}
        placeholder={"Correo"}
        type={"text"}
      />
      <input className="controls"
        onChange={(e) => setTelefono(e.target.value)}
        placeholder={"Telefono"}
        type={"text"}
      />
      <input className="controls"
        onChange={(e) => setDireccion(e.target.value)}
        placeholder={"Direccion"}
        type={"text"}
      />
      <input className="controls"
        onChange={(e) => setBarrio(e.target.value)}
        placeholder={"Barrio"}
        type={"text"}
      />
      <input className="controls"
        onChange={(e) => setCiudad(e.target.value)}
        placeholder={"Ciudad"}
        type={"text"}
      />
       <section>Imagen:
    <input className="botons" onChange={(e)=>setImg(e.target.files[0])} type="file" /></section>
    
      <input className="controls"
        onClick={agregarCliente}
        type={"button"}
        value={"Agregar cliente"}
      />
    </form>
  </section></div>
  )
}

export default CrearClientes