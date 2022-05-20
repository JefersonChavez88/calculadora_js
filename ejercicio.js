//let alumnos = ["Juan", "Pepe", "Jorge", "Francisco"]
//alumnos.indexOf("Juan");
//console.log (alumnos);

//let frutas = [ "manzana", "pera", "durazno"];
//frutas.indexOf ("manzana");
//console.log (frutas);

//let arrayFrase = [
//    "No",
//    "he",
//    "fracasado,",
//    "simplemente",
//    "me",
//    "he",
//    "topado",
//    "con",
//    "diez",
//    "mil",
//    "soluciones",
//    "equivocadas"
//  ];
//let fraseNueva = arrayFrase.join (" ");
//console.log ( fraseNueva);

//let estudiantes = [
//    {
//      nombre: 'Alvaro',
//      promedio : 9,
//      curso : 'Android',
//    },
//    {
//      nombre: 'Daniel',
//      promedio : 6,
//      curso : 'Full Stack',
//    },
//    {
//      nombre: 'Alexis',
//      promedio : 3,
//      curso : 'iOS',
//    },
//  ]
//  let nuevoEstudiante = estudiantes.push (
//      {
//        nombre: 'Juan',
//        promedio : 5,
//        curso : 'iOS',
//      }
//  );
//  let nuevosEstudiantes = estudiantes.push (
//      {
//        nombre: 'Miguel',
//        promedio: 2,
//        curso: 'Android',
//      }
//   );
//  console.log ( estudiantes)

  function laClaveSecreta (caracteres ){
    let reves = "" ;  
    for ( let i = caracteres.length -1 ; i >= 0 ; i -- ){
        if ( caracteres [i] !== "*"){
            reves = reves + caracteres[i];
        }
    }
    return reves    
}

function reporteDePasajeros(estaciones) {
    let pasajeros = 200;
    let respuesta = [];
    respuesta.push ("En la estación 0 hay " + pasajeros + " pasajeros arriba del tren" );
    for (let i = 1; i <= estaciones; i++) {
        if (i=== 5){
            pasajeros = pasajeros + 40 ;
        }else{
            pasajeros = pasajeros + 20;

        }
        respuesta.push ("En la estación " + i + " hay " + pasajeros + " pasajeros arriba del tren" );
    }
    return respuesta ;
}

function asientosDisponibles (asientosLibres , asientoSolicitado)
{
    const resultado = asientosLibres.indexOf (asientoSolicitado);
    if ( resultado >=0) {
        return "Felicitaciones, el asiento número " + asientoSolicitado +  " está disponible";
    }else{
        return "Lo sentimos, el asiento número " + asientoSolicitado + " está ocupado, pero aún quedan " + asientosLibres.length + " asientos disponibles" 
    }
}

function sumatoriaBajoImporte (importe){
    let sumatoria = 0;
    for (let i=0 ; i < importe.length; i ++){
        if ( importe [i] <= 1000 && importe[i] > 0){
            sumatoria=sumatoria + importe [i];
        }
    }
    return sumatoria;
}
console.log (sumatoriaBajoImporte([300, 0, -250, -100, 0, 400,
600,1200, 5000, 0, 1000, 1000]))
