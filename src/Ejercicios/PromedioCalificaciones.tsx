
import React from 'react'
interface Alumnos {
  nombre: string;
  edad: number;
  calificacion: number;
}


export const PromedioCalificaciones = () => {
  const alumnos: Alumnos[] = [
    {
      nombre: 'Viviana',
      edad: 19,
      calificacion: 10,
    },
    {
      nombre: 'Wendy',
      edad: 20,
      calificacion: 8,
    },
    {
      nombre: 'Gerson',
      edad: 18,
      calificacion: 9,
    }
  ];
 
  const calcularPromedio = (alumnos: Alumnos[]): number => {
    const sumaCalificaciones = alumnos.reduce((suma, alumno) => suma + alumno.calificacion, 0);
    return sumaCalificaciones / alumnos.length;
  };
  const promedio = calcularPromedio(alumnos);
  return (
    <div>
      <h3>Ejercicio 4</h3>
      <span>El promedio es:{promedio}</span>
    </div>
  )
}
 
 