import { updateDoc, doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../config/dataBase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditarEmpleados = () => {
    const [nombre, setNombre] = useState("");
    const [documento, setDocumento] = useState("");
    const [correo, setCorreo] = useState("");
    const [cargo, setCargo] = useState("");
    const [salario, setSalario] = useState("");
    const [direccion, setDireccion] = useState("");
    const [cuenta, setCuenta] = useState("");

    const returnListado = useNavigate();
    const {id} = useParams()
  
    const editarServicio = async () => {
  
      const servicioCollection = doc(dataBase, "Empleados", id);
      const servicio = {
        nombre,
        documento,
        correo,
        cargo,
        salario,
        direccion,
        cuenta
      
        
        
         
      };
      await updateDoc(servicioCollection, servicio, id);
      returnListado("/Empleados");
    };
  
    const servicioActualizado = async (id) => {
      const servicio = await getDoc(doc(dataBase, "Empleados",id));
      setNombre(servicio.data().nombre);
      setDocumento(servicio.data().documento);
      setCorreo(servicio.data().correo);
      setCargo(servicio.data().cargo);
      setSalario(servicio.data().salario);
      setDireccion(servicio.data().direccion);
      setCuenta(servicio.data().cuenta);
      
    
      
     
  
    };
  
    useEffect(() => {
      servicioActualizado(id);
    }, [id]);
  
  return (
    <div>
      <section>
        <form className="form-register">
          <section className="titulos-forms">EDITAR EMPLEADOS</section>
          <input className="controls"

            onChange={(e) => setNombre(e.target.value)}
            placeholder={"Nombre"}
            type={"text"}
            value={nombre}
          />
          <input className="controls"
            onChange={(e) => setDocumento(e.target.value)}
            placeholder={"Documento"}
            type={"text"}
            value={documento}
          />
          <input className="controls"
            onChange={(e) => setCorreo(e.target.value)}
            placeholder={"Correo"}
            type={"text"}
            value={correo}
          />
          <input className="controls"
            onChange={(e) => setCargo(e.target.value)}
            placeholder={"Cargo"}
            type={"text"}
            value={cargo}
          />
          <input className="controls"
            onChange={(e) => setSalario(e.target.value)}
            placeholder={"salario"}
            type={"text"}
            value={salario}
          />
          <input className="controls"
            onChange={(e) => setDireccion(e.target.value)}
            placeholder={"Direccion"}
            type={"text"}
            value={direccion}
          />
          <input className="controls"
            onChange={(e) => setCuenta(e.target.value)}
            placeholder={"Cuenta"}
            type={"text"}
            value={cuenta}
          />

          
<input className="botons"
          onClick={editarServicio}
          type={"button"}
          value={"Editar servicio"}
        />
        </form>
      </section>
    </div>
  )
}

export default EditarEmpleados