import React from 'react'

interface Dividendo {
    dividendos:number
}

const dividendos = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];


export const Division = () => {

    const dividirPorCinco = (dividendos: number[]): number[] => {
        return dividendos.map(unidad => unidad / 5);
    }
        return (
            <div>
                <h3>
                    Ejercicio 2
                </h3>
                <span>El resultado de la division es: {dividirPorCinco(dividendos)}</span>
            </div>
        )
    }


