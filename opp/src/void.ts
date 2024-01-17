

// explicito
function metodo(variableany: any): void {
    console.log('*******')
}

// implicito
function metodoDos(variableany: any) {
    console.log('*******')
}

let unusable: void;
//unusable = null; -> error -> strict : true -> false para que pueda asignar
unusable = undefined;