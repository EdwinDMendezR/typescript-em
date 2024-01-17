export {}

type variablec = 'AxA' | 'BxB';

function metodo(variablea: string, variableb: string, variablec: variablec) {
    console.log(variablea, variableb, variablec)
}

metodo('A', 'B', 'AxA');


// variable opcional -> variable ?: string
function metodoOption(variablea: string, variableb: string, variablec?: string) {
    console.log(variablea, variableb, variablec)
}

metodoOption('A', 'B');


// Flat Array Function
let metodoFunctional = (variablea: string, variableb: string, variablec?: string): object => {
    return {
        variablea: variablea,
        variableb: variableb,
        variablec: variablec
    }
};


// Flat Array Function
let metodoFunctionalDos = (variablea: string, variableb: string, variablec?: string): object => {
    return {
        variablea,
        variableb,
        variablec
    }
};

const resultado = metodoFunctional('A', 'B', 'AxA');


function metodoDosTiposReturn(code: number): never | string {
    if(code == 0) {
        throw new Error('Error.....')
    } else {
        return '_-____-------';
    }
}

let resultadoR = metodoDosTiposReturn(2);