export const unionConjuntos = (conjunto1 , conjunto2) => {
    return [...new Set(conjunto1.concat(conjunto2))];
}

export const interseccionConjuntos = (conjunto1, conjunto2) => {
    let interseccion = [];

    for(let i = 0 ; i < conjunto1.length ; i++){
        for(let j = 0 ; j < conjunto2.length ; j++){
            if(conjunto1[i] == conjunto2[j]){
                interseccion.push(conjunto1[i]);
            }
        }
    }

    return interseccion;
}

export const sumaConjuntos = (conjunto1,conjunto2) => {
    return conjunto1.concat(conjunto2);
}

export const restaConjuntos = (conjunto, interseccion) => {
    let resta;
    interseccion.forEach(numInterseccion => {
        resta = conjunto.filter(numConjunto => numConjunto != numInterseccion);
    });

    return resta;
}