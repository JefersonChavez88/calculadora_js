//const {sumar} = require ('./sumar')
//const {restar} = require ('./restar')
//const {multiplicar} = require ('./multiplicar')
//const {dividir} = require ('./dividir')
const {sumar} = require ('./operaciones')
const {restar} = require ('./operaciones')
const {multiplicar} = require ('./operaciones')
const {dividir} = require ('./operaciones')

function suma (number1, number2){
    return sumar (number1, number2);
}
function resta (number1, number2){
    return restar (number1, number2);
}
function divicion (number1, number2){
    return dividir (number1, number2);
}
function multiplicacion (number1, number2){
    return multiplicar (number1, number2);
}
console.log (multiplicacion(9,3))


