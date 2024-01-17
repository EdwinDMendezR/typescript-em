export {};

class ClaseTres {
    private _variableUno: string;
    private _variableDos: string;
    
    public constructor(_variableUno : string, _variableDos: string) {
        this._variableUno = _variableUno;
        this._variableDos = _variableDos;
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

const objetoa = new ClaseTres("A", "B");
objetoa.variableDos = "C"; // Metodo set del objeto
objetoa.variableDos == 'B'; // Metodo get del objeto 