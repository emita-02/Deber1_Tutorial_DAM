import { useState } from "react";

type ContadorProps = {
    initial ?: number;
    step ?: number
}

export const Modulo2Page = ({initial=0, step=1}:ContadorProps) => {
    
    const [count, setCount] = useState<number> (initial)
    const inc = () => setCount ((c)=>c+step)
    const dec = () => setCount ((c)=>c-step)


    // Tipado Inferido
    const [tazas, setTazas] = useState (1)

    //tipado explicito con literales restringidos
    type Ingredientes = "agua" | "cafe" | "azucar" //union literal
    //Solo se pueden usar estas 3 opciones de manera estricta

    // es un conjunto de datos dentro de un type (alias)
    type RecetaCafe = {
        agua ?: number; //con el ? en : se vuelven opcionales estos valores
        cafe ?: number;
        azucar ?: number;
    };

    type CafePreparado = {
        mensaje:string;
        intensidad: "suave" | "fuerte"
    }

    // Tipado explicito con union literal
    const [intensidadUI, setIntensidadUI] = useState<CafePreparado["intensidad"]> ("suave")

    // Tipado explicito con null
    const [ultimoCafe, setUltimoCafe] = useState<CafePreparado | null> (null)

    // Tipado explicito con valores undefined
    const [azucarIn, setAzucarIn] = useState<number | undefined> (undefined)

    // Interface: cuando se quiere exteder o heredar

    // Interface padre
    interface RecetaBase {
        agua:number;
        cafe:number
    }
    // Interface hijo
    interface RecetaAzucar extends RecetaBase {azucar:number} //extiende del padre

    interface MaquinaCafe {modelo: string}
    interface MaquinaCafe {aguaMax?:number} 
    //cuando queremos que el valor sea opcional se usa el simbolo ?: 
    //Para que sean obligatorios solo va :

    //Las interfaces se pueden funcionar teniendo el mismo nombre el valor
    const maquina : MaquinaCafe = {modelo: "Kame-500", aguaMax: 2000};

    //se le podria colocar valores por defecto al volver opcionales a los elementos del type
    function prepararCafe ({agua=0,cafe=0,azucar=0}: RecetaCafe): CafePreparado {
        const intensidad = cafe > 10 ? "fuerte" : "suave"
        return {
            mensaje: `Cafe listo con ${agua}ml de agua y ${cafe}g de cafe` + (azucar?`+ ${azucar}g de azucar`:""),
            intensidad
        };
    }

    //Funcion con Interface
    interface CafePreparadoI {
        mensaje: string; intensidad: "suave" | "fuerte"
    }
    function prepararCafeI (receta: RecetaAzucar) : CafePreparadoI {
        const intensidad  = receta.cafe > 10 ? "fuerte" : "suave"
        return {
            mensaje : `Cafe listo (INIF) con ${receta.agua}ml de agua y ${receta.cafe}g de cafe + ${receta.azucar}g de azucar`,
            intensidad
        }
    }
    
    const onCafe = () => {
        const resultado = prepararCafe({agua:200, cafe:15, azucar:5});
        alert(resultado.mensaje + " con intensidad: " + resultado.intensidad)
    }
    const onCafeInterface = () => {
        const resultado = prepararCafeI({agua:200, cafe:15, azucar:5})
        alert(resultado.mensaje + " con intensidad: " + resultado.intensidad)
    }

    //Intersecciones
    type A = {nombre:string}
    type B = {edad:number}
    type C = {state: boolean}
    type Persona = A & B & C
    const juanObject: Persona = {nombre:"Juan", edad:30, state:true}



    return (
        <div className = "h-screen bg-amber-300 text-black flex flex-col p-4 gap-4">
            <span>Modulo2Page</span>
            <button className = "bg-amber-950 text-white rounded-2xl" onClick = {onCafe}>
                Hacer Cafe con Type
            </button>
            <span>Interface</span>
            <button className = "bg-black text-white rounded-2xl" onClick = {onCafeInterface}>
                Hacer Cafe con Interface
            </button>
            <span> State tipados</span>
            {intensidadUI}
            <button className = "bg-pink text-black rounded-2xl" onClick={()=>setIntensidadUI("fuerte")}>
                Cambiar State
            </button>
            <span>Contador</span>
            <button className = "rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1 hover:bg-neutral-700 text-amber-50" onClick={dec}>
                -
            </button>
            <span>{count}</span>
            <button className = "rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1 hover:bg-neutral-700 text-amber-50" onClick={inc}>
                +
            </button>

            <h2>Interseccion (&)</h2>
            {juanObject.nombre} - {juanObject.edad}
            
            <pre> {JSON.stringify(juanObject,null,2)} </pre>

            
        </div>
    )
}