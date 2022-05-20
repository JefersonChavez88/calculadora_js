//function noParesDeContarImparesHasta(numero){
//    for ( let i = 0; i <= numero.length;i ++){
//        if ( numero[i] % 3 === 0 );
//        impares = impares + numero[i];
//        return impares;
//    }
//}
function noParesDeContarImparesHasta(numero) {
    cuantos = 0;

    for (let i = 0; i <= numero; i++) {
        if (i % 2 == 1) {
            cuantos++;
        }

    }
    return cuantos;
}
console.log(noParesDeContarImparesHasta(4));