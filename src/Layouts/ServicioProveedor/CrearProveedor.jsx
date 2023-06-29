import { collection, addDoc } from "firebase/firestore";
import { dataBase, subirImagen } from "../../config/dataBase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CrearProveedor = () => {

    const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [nit, setNit] = useState("");
  const [telefono, setTelefono] = useState("");
  const [nombreGerente, setNombreGerente] = useState("");
  const [img, setImg] = useState(null);
  const [logo, setLogo] = useState(null);
  

  const returnListado = useNavigate();
  const agregarProveedor = async()=>{
    const ulrImg = await subirImagen(img)
    const ulrLogo = await subirImagen(logo)



    const servicioCollection = collection(dataBase,"Proveedores");
    const servicio={
      nombre,
      direccion,
      ciudad,
      nit,
      telefono,
      nombreGerente,
      ulrImg,
      ulrLogo
    };
    await addDoc(servicioCollection,servicio);
    returnListado("/proveedores")
  };
  return (
    
      
    <section>
      <form className="form-register">
      <section className="titulos-forms">REGISTRAR PROVEEDORES</section>
      <input className="controls"
      /* Para los proveedores es necesario almacenar
          nombre, dirección, ciudad, nit, teléfono 
          gerente, nombre gerente, imagen gerente 
          y el logo de la empresa*/

        onChange={(e) => setNombre(e.target.value)}
        placeholder={"Nombre "}
        type={"text"}
      />
      <input className="controls"
      onChange={(e) => setDireccion(e.target.value)}
      placeholder={"Direccion "}
      type={"text"}
      />
      <input className="controls"
      onChange={(e) => setCiudad(e.target.value)}
      placeholder={"Ciudad"}
      type={"text"}
      />
      <input className="controls"
      onChange={(e) => setNit(e.target.value)}
      placeholder={"Nit"}
      type={"text"}
      />
      <input className="controls"
      onChange={(e) => setTelefono(e.target.value)}
      placeholder={"Telefono"}
      type={"text"}
      />
      <input className="controls"
      onChange={(e) => setNombreGerente(e.target.value)}
      placeholder={"Nombre Gerente"}
      type={"text"}
      />
    <section>Imagen:
    <input className="controls" onChange={(e)=>setImg(e.target.files[0])} type="file" /></section>
    <section>Logo:
    <input className="controls" onChange={(e)=>setLogo(e.target.files[0])} type="file" /></section>
      
      <input className="botons"
        onClick={agregarProveedor}
        type={"button"}
        value={"Agregar proveedor"}
      />
      </form>
    </section>
  )
}

export default CrearProveedor