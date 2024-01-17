export {}

class ClaseUno {
    private _variableUno: string;
    private _variableDos: string;
    
    constructor(variableUno : string, variableDos: string) {
        this._variableUno = variableUno;
        this._variableDos = variableDos;
    }

    get variableUno(){
        return this._variableUno;
    }

    set variableUno(variableUno: string) {
        this._variableUno = variableUno;
    }

    get variableDos(){
        return this._variableDos;
    }

    set variableDos(variableDos: string) {
        this._variableDos = variableDos;
    }
}

class ClaseDos extends ClaseUno {
    variableTres: string;
    variableCuatro: string;
    
    constructor(variableTres : string, variableCuatro: string) {
        super("A", "B");
        this.variableTres = variableTres;
        this.variableCuatro = variableCuatro;
    }
}

const ejemplo = new ClaseDos("2", "3");