/*const lista1 = [
    100,
    200,
    300,
    500,
];
*/

function calcularMediaAritmetica(lista) {
    let sumaLista = 0;

    /* Asi seria sin fucntion flecha 
    const sumaLista = lista.reduce(
            function (valorAcumulado = 0, nuevoElemento){
                return valorAcumulado + nuevoElemento;
         } */
    sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemnto) => valorAcumulado + nuevoElemnto); // Esto es uan function pero de las modernas, lo que conocemos como fucntion de flecha (Gastan menos memoria)


    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function onClickButtonPromedio() {
    const InputProm = document.getElementById("InputProm");
    const promedio = InputProm.value;

    console.log(promedio)
    let promedioArray = Array.from(promedio.split(','), Number)
    console.log(promedioArray)
    let value = calcularMediaAritmetica(promedioArray);

    const resulP = document.getElementById("ResultP");
    resulP.innerText = `El promedio de esta lista es de ${value}`;

}
//--------------------------------------------------------------- MEDIANA --------------------------------------------------------
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


/* -------------------------------------
      USANDO UNA FUNCIÓN
--------------------------------------*/

/* Primero uso el método .sort para organizar 
 en orden ascendente los números ingresados 
 por el usuario*/


function esPar(numerito) {
    if (numerito % 2 === 0) /* Esta es la forma de decirle a Js de si numerito es par*/ {
        return true;
    } else {
        return false;
    }
}

function calcularMediana(listaNumeros) {
    // var listaEnOrden = ordenarNumeros(listaNumeros);
    var numerosOrdenados = listaNumeros.sort(function (a, b) {
        return a - b;
    });

    const mitadLista1 = parseInt(numerosOrdenados.length / 2);

    let mediana;
    if (esPar(numerosOrdenados.length)) {
        const elemento1 = numerosOrdenados[mitadLista1 - 1];
        const elemento2 = numerosOrdenados[mitadLista1];
        const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

        mediana = promedioElemento1y2;
    } else {
        mediana = numerosOrdenados[mitadLista1];
    }
    return mediana;
}


function onClickButtonMediana() {
    const InputMediana = document.getElementById("InputMediana");
    const mediana = InputMediana.value;
    console.log(mediana)
    let medianaArray = Array.from(mediana.split(','), Number)
    console.log(medianaArray)
    let value = calcularMediana(medianaArray);

    const resulMediana = document.getElementById("ResultMediana");
    resulMediana.innerText = `La mediana de esta lista es de ${value}`;

}




