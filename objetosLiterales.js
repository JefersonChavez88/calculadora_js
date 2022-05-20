//let deportista = {
//    energia: 100,
//    experiencia: 10,
//    nombre: "Aimar",
//    entrenarHoras: function entrenarHoras(cantHoras) {
//        return cantHoras - this.energia * 5;
//        return cantHoras + this.experiencia * 2;
//    }
//};
//
//console.log("==Antes de comenzar entrenamiento==");
//console.log("Deportista energia: " + deportista.energia);
//console.log("Deportista experiencia: " + deportista.experiencia);
//console.log("==ENTRENANDO==");
//console.log(deportista.entrenarHoras(5));
//console.log("==FIN ENTRENAMIENTO==");
//console.log("Deportista energia: " + deportista.energia);
//console.log("Deportista experiencia: " + deportista.experiencia);

//function anterior (numero){
//    return numero - 1;
//}
//function triple (numero){
//    return numero * 3 ;
//}
//function anteriorDelTriple ( numero){
//   let resprevio = triple (numero);
//    return anterior( resprevio);
//};
//console.log (anterior(5));
//console.log (anteriorDelTriple(4));
//console.log (anteriorDelTriple(8));

let deportista = {
    energia: 100,
    experiencia: 10,
    nombre: "Aimar",
  entrenarHoras: function entrenarHoras(cantHoras) {
        deportista.energia = this.energia - (cantHoras * 5)
        deportista.experiencia = this.experiencia + (cantHoras * 2)
    }
};
console.log(entrenarHoras());