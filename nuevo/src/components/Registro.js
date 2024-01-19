import React  from "react";
import Boton from "./Boton";
import "../styles/Registro.css";

function Registro(){
    <div className="main">
        <div className="padre">
            <label className="etiqueta">usuario</label>
            <input placeholder="Ingresar Usuario"></input>
            <label className="etiqueta">usuario</label>
            <input placeholder="Ingresar Usuario"></input>
            <label className="etiqueta">Contraseña</label>
            <input placeholder="Ingresar Contraseña"></input>
            <div className="buttons">
                <Boton funClick={()=>click ("Editar")} text={"Editar"}/>
            </div>
        </div>
    </div>
    }
export default Registro;


