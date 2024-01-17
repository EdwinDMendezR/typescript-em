
export {

}

enum CONSTANTE {
    valorA,
    valorB,
    valorC
}

enum CONSTANTE_CUSTOM {
    valorA = 0,
    valorB = 1,
    valorC = 2
}

enum CONSTANTE_CUSTOM_DOS {
    valorA = 10,
    valorB,
    valorC
}

enum CONSTANTE_CUSTOM_STRING {
    valorA = 'A',
    valorB = 'B',
    valorC = 'C'
}

const variable: CONSTANTE = CONSTANTE.valorA; // valor = 0
CONSTANTE[0] // valor = valorA