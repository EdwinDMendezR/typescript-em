export {};

interface InterfaceUno {
    variableUno: string;
    variableDos: string;
}

interface InterfaceDos extends InterfaceUno {
    variableTres: string;
    variableCuatro: string;
}

const variable : InterfaceDos = {
    variableUno: '',
    variableDos: '',
    variableTres: '',
    variableCuatro: ''
}