let fecha = new Date(2019,4,0);

let anio = fecha.getFullYear();
let mes = fecha.getMonth ();
let dia = fecha.getDate();

console.log("Día: "+fecha.getDate())
console.log('Hoy es el día '+ (dia -31)+' del mes '+ (mes +1) +' del año '+ anio);
