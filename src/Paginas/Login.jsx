import { useNavigate } from "react-router-dom";

const Login = () => {

    const iniciar = useNavigate();
    const iniciarSesion = async () => {
      
        iniciar('/Admin')
    }
  return (
    <div >
      <section >
        <form className="form-register">

          <section className="titulos-forms">INICIAR ADMINISTRADOR</section>
          <input className="controls"
          
            placeholder={"Nombre "}
            type={"text"}
            disabled="disabled" 
          />
          <input className="controls"
           
            placeholder={"Contraseña"}
            type={"text"}
            max={'50'}
            disabled="disabled" 
          />
          
          <input className="botons"
            
            type={"button" }
            value={"Iniciar"}
            

          />
          <p style={{color: 'white'}}>Click continuar para iniciar</p>
          <input className="botons"
            onClick={iniciarSesion}
            type={"button"}
            value={"Continuar"}
          />
        </form>
      </section></div>
  )
}

export default Login