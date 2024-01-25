'use client'

import image from "next/image";
import style from "./foto.module.css";
import {useEffect ,useState } from "react";

function Foto(){
const [perrito, setPerrito]=useState("/vercel.svg");
const [estado, setEstado]=useState("esperando");
const url="https://pokeapi.co/api/v2/pokemon/eevee";    
useEffect(()=>{
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        setPerrito(data.sprites.front_default),
        setEstado(data.species.name),
        setHabilidad(data.habilities[0].ability.name)
        });
},[]);
return(
    <div className={style.contenedor}>
        <h1>{estado}</h1>
        <image src={perrito} height={250} width={250}/>
    </div>
    )
}

export default Foto;