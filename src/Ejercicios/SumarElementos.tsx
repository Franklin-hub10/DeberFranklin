import React from 'react'


 const elementos = [1,2,3,4,5]

export const SumarElementos = () => {
    
    const sumar = (elementos: number[]): number => {
        return elementos.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
      };
  return (
    <div>
       <h3>
        Ejercicio 2
       </h3>
       <span>El resultado es: {sumar(elementos)}</span>
    </div>
  )
}


