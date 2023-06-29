import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { dataBase, subirImagen } from "../../config/dataBase";


const CrearProductos = () => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [valor, setValor] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [img, setImg] = useState(null);
  const [categoria, setCategoria] = useState("");

  const returnListado = useNavigate();
  const agregarProducto = async () => {
    const ulrImg = await subirImagen(img)


    const servicioCollection = collection(dataBase, "Productos");
    const servicio = {
      nombre,
      cantidad,
      valor,
      descripcion,
      categoria,
      ulrImg

    };
    await addDoc(servicioCollection, servicio);
    returnListado("/Productos")/*cambiar redireccion*/
  }
  return (
      
      <section> 
        
        <form className="form-register">

          <section className="titulos-forms">REGISTRAR PRODUCTOS</section>
          <input className="controls"
            onChange={(e) => setNombre(e.target.value)}
            placeholder={"Nombre"}
            type={"text"}
          />
          <input className="controls" 
            onChange={(e) => setCantidad(e.target.value)}
            placeholder={"Cantidad"}
            type={"text"}
          />
          <input className="controls"
            onChange={(e) => setValor(e.target.value)}
            placeholder={"Valor"}
            type={"text"}
          />
          <input className="controls"
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder={"Descripcion"}
            type={"text"}
          />
          <input className="controls"
            onChange={(e) => setCategoria(e.target.value)}
            placeholder={"Categoria"}
            type={"text"}
          />
          <section>Imagen:
            <input className="controls" onChange={(e) => setImg(e.target.files[0])} type="file" /></section>
          <input className="botons"
            onClick={agregarProducto}
            type={"button"}
            value={"Agregar Producto"}
          />

        </form>
      </section>
  )
}

export default CrearProductos