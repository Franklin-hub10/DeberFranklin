

export const CalcudoraDeAreas = () => {
 

  //Funcion para calcular rectangulos y cuadrados 
 // const area =(ladoA:number, ladoB:number): number => {
//return ladoA * ladoB
  //}


  //funcion para calcular solo cuadrados
  const area =(ladoA:number): number => {
    return ladoA * 2
      }

  return (
    <div>
            <h3>Ejercicio 1  </h3>
    <span> El area del cuadrado es : {area(10)} </span>

    </div>
  )
}




