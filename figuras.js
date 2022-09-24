//Taller #1 ______ Figuras geometricas


//codigo del cuadrado

/* ----Aqui seria con el valor fijo:----

console.group("Cuadrado"); //Con esto se agrupa en la consola determinada info
const ladoCuadrado = 5;
console.log(`Los lados del cuadraro miden: ${ladoCuadrado} cms`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadraro es: ${perimetroCuadrado} cms`);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadraro es: ${areaCuadrado} cms^2`);
console.groupEnd();*/

//codigo del triangulo

/* ----Aqui seria con el valor fijo:----
console.group("Triangulo");

const ladoTriandulo1 = 6;
const ladoTriandulo2 = 6;
const baseTriandulo = 4;
const alturaTriandulo = 5.5;

console.log(`Los lados del triangulo miden: ${ladoTriandulo1} cms, ${ladoTriandulo1} cms y ${baseTriandulo} cms`);

const perimetroTriangulo = ladoTriandulo1 + ladoTriandulo2 + baseTriandulo;
console.log(`El perimetro del triangulo es: ${perimetroTriangulo} cms`);

const areaTriangulo = (baseTriandulo * alturaTriandulo)/2;
console.log(`El area del triangulo es: ${areaTriangulo} cms^2`);

console.groupEnd();  */

//codigo del circulo


/* ----Aqui seria con el valor fijo:----
console.group("Circulo");

const π = 3.14159265359;
const radioCirculo = 4;
console.log(`El radio del circulo es: ${radioCirculo} cms`);

const diametroCirculo = radioCirculo * 2;
console.log(`El diametro del circulo es: ${diametroCirculo} cms`);

const perimetroCirculo = diametroCirculo * π;
console.log(`El perimetro del circulo es: ${perimetroCirculo} cms`);

const areaCirculo = π * (radioCirculo * radioCirculo);
console.log(`El area del triangulo es: ${areaCirculo} cms^2`);

console.groupEnd();*/

//Aqui las convertimos en Funciones para que sea flexible al cambio de valor


/*-------------------------------------------------------------------------------------------------------------------------------------------- */
console.group("Cuadrado");

function perimetroCuadrado(lado){
    return lado * 4;
}
perimetroCuadrado();

function areaCuadrado(lado){
    return lado * lado;  
}
areaCuadrado();

console.groupEnd();

/*------------------------------------------------------------------------------------------------------------------------------------------- */

console.group("Triangulo");

function perimetroTriangulo (lado1,lado2,base){
    return lado1+lado2+base;
}
perimetroTriangulo();


function areaTriangulo (base,altura){
    return (base*altura)/2;
}
areaTriangulo();

console.groupEnd();

/*-------------------------------------------------------------------------------------------------------------------------------------------- */


console.group("Circulo");

function diametroCirculo (radio){
return radio * 2;
}
diametroCirculo();


function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    const Pi = 3.14159265359;
    return diametro * Pi;
}

function areaCirculo (radio){
    const Pi= 3.14159265359;
    return Pi * radio*radio;
}
areaCirculo();
console.groupEnd();


//Aqui interectuamos con el html

function calcularPerimetroCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value= input.value; // esto sirve para decirle a js que queremos que traiga el valor que pusimos en la etiqueta input
    const perimetro =perimetroCuadrado(value);
    alert(perimetro); // asi el usuario ve el resultado de forma visual
}

function calcularAreaCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value= input.value; // esto sirve para decirle a js que queremos que traiga el valor que pusimos en la etiqueta input
    const perimetro = areaCuadrado(value);
    alert(perimetro); // asi el usuario ve el resultado de forma visual
}


function calcularPerimetroTriangulo(){
    const input= document.getElementById("InputTriangulo");
    const value= input.value; // esto sirve para decirle a js que queremos que traiga el valor que pusimos en la etiqueta input
    const perimetro =perimetroTriangulo(value);
    alert(perimetro); // asi el usuario ve el resultado de forma visual
}

function calcularAreaTriangulo(){
    const input= document.getElementById("InputTriangulo");
    const value= input.value; // esto sirve para decirle a js que queremos que traiga el valor que pusimos en la etiqueta input
    const perimetro = areaTriangulo(value);
    alert(perimetro); // asi el usuario ve el resultado de forma visual
}


function calcularPerimetroCirculo(){
    const input= document.getElementById("InputCirculo");
    const value= input.value; // esto sirve para decirle a js que queremos que traiga el valor que pusimos en la etiqueta input
    const perimetro =perimetroCirculo(value);
    alert(perimetro); // asi el usuario ve el resultado de forma visual
}

function calcularAreaCirculo(){
    const input= document.getElementById("InputCirculo");
    const value= input.value; // esto sirve para decirle a js que queremos que traiga el valor que pusimos en la etiqueta input
    const perimetro = areaCirculo(value);
    alert(perimetro); // asi el usuario ve el resultado de forma visual
}