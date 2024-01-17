export {}

class ClaseUno {
    variableUno: string;
    variableDos: string;
    
    constructor(variableUno : string, variableDos: string) {
        this.variableUno = '';
        this.variableDos = '';
    }
}

class ClaseDos {
    public variableUno: string;
    public variableDos: string;
    
    public constructor(variableUno : string, variableDos: string) {
        this.variableUno = '';
        this.variableDos = '';
    }
}

class ClaseTres {
    private variableUno: string;
    private variableDos: string;
    
    public constructor(variableUno : string, variableDos: string) {
        this.variableUno = '';
        this.variableDos = '';
    }
}

class ClaseEcmaScript {
    #variableUno: string;
    #variableDos: string;
    
    public constructor(variableUno : string, variableDos: string) {
        this.#variableUno = '';
        this.#variableDos = '';
    }
}


const objetouno = new ClaseUno('A', 'B');

// Validar imprimiemdo los objetos, los objecto con atributos #no permiten visualizar los valores de ninguna forma al contrarios 
// de la forma tradicional