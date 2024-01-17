
export {}

// 1 , '1'

let variable: number | string;

variable = 10;
variable = '10';

function getVariable(variable: number | string) {
    return 'A';
}
getVariable(20);
getVariable('20');