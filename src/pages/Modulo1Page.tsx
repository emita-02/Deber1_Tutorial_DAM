import { Link } from "react-router-dom";
import {calcularDanio} from "../utils/CalcularDanio";

export const Modulo1Page = () => {
    // 1) Valores de inferencia vs anotacion 
    let saga =  "Saiyan Saga"; //Valor inferido: asumido por typescript
    let horasEntrenamiento: number = 36; //Valor tipo anotado: especificado por la persona

    // 2) Tipos basicos
    let  guerrero: string = "Goku"; 
    const ki:number = 9001; //sirve para enteros y para decimales
    const enCombate: boolean = true; 

    //ki=38 
    // respeta las variables constantes y no se puede cambiar su valor

    // 3) Arrays
    const equipoZ: string[] = ["Goku", "Vegeta", "Gohan", "Piccolo"]; //Array de strings

    // 4) Tuplas
    const coordenadas: [number, number, string] = [42, 17, "Hola"];
    //Limita la cantidad de datos que puede tener, pero se puede combinar varios tipos de datos en un mismo array

    // 5) Funciones tipadas (parametros + retorno)
    /*
    function calcularDanio (base:number, multiplicador:number): number{
        return base * multiplicador;
    }
    */
    //tipar funciones flecha
    /*
    const calcularDanioFlecha = (base:number, multiplicador:number): number => {
        return base * multiplicador;
    };
    */

    // 6) Valores nulos e indefinidos
    let transformacion:string | null = null //se dice que puede ser un string |(o) un valor nulo por lo que es indefinido
    transformacion = "Super Saiyan"; //ahora se le asigna un valor de tipo string
    //se muestra como un valor nulo
    let estrategia:string|undefined = undefined; 
    estrategia = "Transfromarse a ultra instinto"
    //no se muestra nada si no se tiene ningun valor por el undefined

    // 7) Valores tipo any y unknown
    let variableLibre:any = "Semilla del Ermitanio"
    variableLibre=2 //con any se puede cambiar el tipo de dato de la variable, pero no es recomendable

    let evento:unknown = "Refuerzo"
    // evento = 3 
    // se puede cambiar el tipo de dato parecido a any, pero se le puede condicionar
    let eventoMayus : string | null = null

    if (typeof evento ==="string"){
        eventoMayus = evento.toUpperCase()
    }

    
    return (
        <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
            
            <div className="mx-auto max-w-3xl p-8">
                
                <header className="mb-8 border-b border-neutral-800 pb-4">
                    <Link to="/" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md">
                        Volver a Home
                    </Link>
                    <h1 className="text-3xl font-semibold text-blue-500 mt-4">
                        React + TypeScript - Módulo 1
                    </h1>
                    <p className="text-sm text-neutral-400 mt-4">
                        Fundamentos: Tipos basicos, arrays y tuplas
                    </p>
                </header>
                <section className="mb-8">
                    <h2 className="text-xl font-medium text-blue-300">
                        Inferencia y basicos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-neutral-300">
                        <div>Saga: {saga}</div>
                        <div>Horas de entrenamiento: {horasEntrenamiento}</div>
                        <div>Guerrero: {guerrero}</div>
                        <div>Ki: {ki}</div>
                        <div>En combate: {enCombate ? "Si" : "No"}</div>
                    </div>
                </section>
                <section className="mb-8">
                    <h2 className="text-xl font-medium text-blue-300">
                        Arrays
                    </h2>
                    <div> Equipo Z: {equipoZ.join(", ")}</div>
                    <h2 className="text-xl font-medium text-blue-300">
                        Tuplas
                    </h2>
                    <div> Coordenadas [x,y,hola]: x={coordenadas[0]}, y={coordenadas[1]}, saludo={coordenadas[2]}</div>
                </section>
                <section className="mb-8">
                    <h2 className="text-xl font-medium text-blue-300">
                        Funciones tipadas
                    </h2>
                    <div>
                        <p>Daño (base 450 x mult. 2)</p>
                        <span> {calcularDanio(450, 2)}</span>
                    </div>
                </section>
                <section className="mb-8">
                    <h2 className="text-xl font-medium text-blue-300">
                        Any y Unknown
                    </h2>
                    <div>Any: {variableLibre}</div>
                    <div> Evento: {eventoMayus} </div>
                </section>
            </div>
        </main>
    );
};