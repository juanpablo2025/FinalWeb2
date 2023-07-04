import { updateDoc, doc, getDoc } from "firebase/firestore";
import { dataBase } from "../../config/dataBase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"; 

const EditarProductos = () => {
    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [valor, setValor] = useState("");
    const [descripcion, setDescripcion] = useState("");
    
    const [categoria, setCategoria] = useState("");
    
  const returnListado = useNavigate();
  const {id} = useParams()

  const editarServicio = async () => {

    const servicioCollection = doc(dataBase, "Productos", id);
    const servicio = {
        nombre,
        cantidad,
        valor,
        descripcion,
        categoria,
      
       
    };
    await updateDoc(servicioCollection, servicio, id);
    returnListado("/Productos");
  };

  const servicioActualizado = async (id) => {
    const servicio = await getDoc(doc(dataBase, "Productos",id));
    setNombre(servicio.data().nombre);
    setCantidad(servicio.data().cantidad);
    setValor(servicio.data().valor);
    setDescripcion(servicio.data().descripcion);
    setCategoria(servicio.data().categoria);
    
   

  };

  useEffect(() => {
    servicioActualizado(id);
  }, [id]);

  return (
    <section>
    <form className="form-register">

<section className="titulos-forms">EDITAR PRODUCTOS</section>
<input className="controls"
  onChange={(e) => setNombre(e.target.value)}
  placeholder={"Nombre"}
  type={"text"}
  value={nombre}
/>
<input className="controls" 
  onChange={(e) => setCantidad(e.target.value)}
  placeholder={"Cantidad"}
  type={"text"}
  value={cantidad}
/>
<input className="controls"
  onChange={(e) => setValor(e.target.value)}
  placeholder={"Valor"}
  type={"text"}
  value={valor}
/>
<input className="controls"
  onChange={(e) => setDescripcion(e.target.value)}
  placeholder={"Descripcion"}
  type={"text"}
  value={descripcion}
/>
<input className="controls"
  onChange={(e) => setCategoria(e.target.value)}
  placeholder={"Categoria"}
  type={"text"}
  value={categoria}
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

export default EditarProductos