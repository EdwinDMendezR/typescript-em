
export {

}

let variable: [number, string];
variable = [1, 'A']

// get
variable[1] // 'A'
variable[0] // 1

let variableDos: [number, string, boolean]
variableDos = [2, 'B', true]


// debe ser diferente para cada posicion
let variableError : [string, string, string]


// Arreglo de tuplas
let arrayTuple : [number, string][] = [];
arrayTuple.push([1, 'A'])
arrayTuple.push([2, 'B'])


arrayTuple[2][1] = arrayTuple[2][1].concat('*'); // B*