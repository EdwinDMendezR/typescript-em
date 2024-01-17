
// object(TS)
let variable : object;
variable = {};

variable = {
    parametro: 1,
    parametrosDos: 2
};

// Genera Error
//console.log(variable.parametro)


// Object(JS)  
const variableA = {
    parametro: 1,
    parametrosDos: 2
}

// Validar
console.log(variableA instanceof Object)
console.log(variableA.parametro)