export {}

// <> angle bracket syntax
let variable: any;
variable = 'valor';

let valor : string = (<string>variable).length > 0 ? `A` : 'B';
let valorb = (variable as string).length > 0 ? `A` : 'B';