import React from "react";
import Boton from "./Boton";
import "../styles/Login.css";


function Login(){
    return(
        <div className="padre">
        <form>
            <div className="usuario">
                <label className="etiqueta">usuario</label>
                <input placeholder="Ingresar Usuario"></input>
            </div>

            <div className="contraseña">
                <label className="etiqueta">Contraseña</label>
                <input placeholder="Ingresar Contraseña"></input>

            </div>
            <div className="bittons">
            <Boton funClick={()=>click ("Registrar")} text={"Registrar"}/>
            <Boton funClick={()=>click ("Ingresar")} text={"Ingresar"}/>

            </div>
        </form>

    </div>
    )
}

export default Login;