// 1
/*
for (
    let i = 1;
    i < 10;
    i++
){
    console.log(i);
};
*/

//2
/*
for (
    let i = 2;
    i <= 20;
    i = i + 2
){
    console.log(i)
};
*/

//3
/*
for (
    let i = 1;
    i <= 19;
    i = i + 2
){
    console.log(i);
};
*/

//4
/*
for (
    let i = 10;
    i > 0;
    i--
){
    console.log(i);
};
*/

//5
/*
for(let i = 1;i <= 5;i++){
    console.log(i);
};
*/

//6
// Este no se como hacerlo, carajo

//7
/*
function decirNombre(nombre) {
    alert('Hola ' + nombre);
};

//8
function saludar(nombre) {
    return 'Hola ' + nombre;
};

alert(saludar('Hentrixs'));

//9
function sumar(a,b) {
    return a + b;
};

//10
function restar(a,b) {
    return a - b;
};

//11
function calcular(operacion,a,b) {
    switch (operacion) {
        case '-':
            console.log("okk")
            alert(restar(a,b));
            break
        case '+':
            console.log("okk")
            alert(sumar(a,b));
            break
        default:
            return null;
    };
};
/*calcular('-',15,5);*/


//12
/*
function contarHasta(numero) {
    for(let i = 1; i <= numero; i++) {
        console.log(i);
    };
};

contarHasta(14);
*/

//13
/*
function usarCalculadora(...value) {
    /*let answer = answer ? answer : prompt("Deseas usar una calculadora?");*/
    /*
    let reanswer = value; // Aca yo estoy tratando de hacer un sistema donde vuelvo a ejecutar la funcion
    // no me salga el mensaje de usar la calculadora otra vez
    let answer;
    if (reanswer !== 'SI') {
        answer = prompt("Deseas usar una calculadora?")
    };

    while (answer === 'SI' || reanswer === 'SI') {
        let a = prompt("Dame un numero")
        while(!a || isNaN(a)) {
            alert("Eso no es un numero");
            a = prompt("Ingresa un numero");
        };
        a = Number(a);

        let b = prompt("Dame otro numero");
        while(!b || isNaN(b)) {
            alert("Eso no es un numero");
            b = prompt("Ingresa un numero")
        };
        b = Number(b);

        let operacion = prompt("Dame una operacion");
        calcular(operacion,a,b);
        
        answer = prompt("Quieres volver a usar la calculadora?");
        switch(answer){
            case 'SI':
                usarCalculadora(answer);
            default:
                alert("El programa ha finalizado");
                break;
        };
    };
    // esto en realidad se hace en varias funciones porque la funcion solo puede tener una funcionalidad
    // pero no tengo ganas de hacer otro archivo JS asi que voy a omitir eso por esta vez
};

usarCalculadora();
*/

//14
/*
for (let i = 1;i <=25;i++) {
    console.log(i * 11);
};
*/

//15
/*
// Nota: la carga de los numeros enteros tambien la podria hacer con un input o con un prompt()
// dentro del for, pero esta vez quiero practicar los arrays asi que dejemoslo asi
let NumerosEnteros = [12,17,7,5,20,25,40,45,2];
let par = [];
let impar = [];
for (let i = 0;i <= NumerosEnteros.length; i++) {
    if (Number.isInteger(NumerosEnteros[i] / 2)) {
        par.push(NumerosEnteros[i]);
    } else {
        impar.push(NumerosEnteros[i]);
    };
};
console.log(`Numeros pares ${par}`);
console.log(`Numeros impares ${impar}`);
*/

//16
/*
// Aca no entiendo si se refiere a que tengo que usar un conjunto de forma literal
// por las dudas lo hago con for igual
let promedioaltura = [];
for (
    let i = 1;
    i <= 3; // esto en realidad deberia estar en 5 pero dejemoslo asi por ahora
    i++
){
    let altura = prompt("Dame una altura");
    // Nota, aca podria meter verificacion pero no tengo ganas
    promedioaltura.push(altura);
};

let resultado = promedioaltura.reduce((acumulador,numero) => { // .reduce(acumulador,numero) da la suma de todos los numeros
    return acumulador + parseFloat(numero);
}, 0);

resultado = (resultado / promedioaltura.length).toFixed(2);
console.log(resultado);
*/

//17
/*
let promedios = [];
for (let i = 0; i < 2;i++) {
    let getStudentNumber = prompt("Dame el numero de estudiantes a los cuales calcular la edad");
    getStudentNumber = Number(getStudentNumber);

    let getStudentsAge = () => {
        let array = [];
        for (let i = 1; i <= getStudentNumber; i++){
            let getStudentAge = prompt(`Dame la edad de estudiante ${i}`);
            array.push(getStudentAge)
        };
        
        let x = array.reduce((acumulador,numero) => {
            return Number(acumulador) + Number(numero);
        },0);

        return x;
    };

    promedios.push(getStudentsAge());
};

let [a,b,c,...d] = promedios;
// Vale, aca no se como arreglar esto, no se como mostrar solamente el mas grande
*/

//18
/*
let cargavalores = [];
for (let i = 1; i < 10; i++) {
    let x = prompt("Carga valores del 1 al 10");
    x = Number(x);
    cargavalores.push(x);
    //cargavalores = Number(cargavalores);
};
console.log(cargavalores);

let negativos = [];
let positivos = [];
let multiplos_15 = [];
let pares = [];

cargavalores.forEach(element => {
    /*
    switch(element){
        case 
    } // Aca desafortunadamente no se me ocurre forma de meter los multiplos de 15
    // ah no, existe una forma, si al dividir ese numero por 15 resulta que da un entero
    // entonces es multiplo, el tema es que no tengo forma de checkear si el resultado es un entero o no
    // y por consiguiente no puedo aplicar logica ni nada 
    */
    /*
    if ( (element / 2) !== Number.isInteger(element)) { // Aca desafortunadamente tengo el mismo problema
        // No puedo chekcear si el resultado es entero o no correctamente
        // PD: no se que pasa que el forEach() anda medio raro, nose que le pasa
        pares.push(element);
    };
        
    if (element < 0) {
        negativos.push(element);
    } else if (element > 0) {
        positivos.push(element);
    };
});

pares = pares.reduce((acumulador,numero) => {
    return acumulador + numero;
});

console.log(`Numeros positivos: ${positivos}, Numeros negativos ${negativos}, Numeros Pares ${pares}`);
*/
//19
/*
let TriangleA = [10, 10, 10];
let TriangleB = [9, 9, 12];
let TriangleC = [6, 6, 4];
let TriangleD = [4, 7, 9];

let CheckTriangleType = (triangle) => {
    let [angleA,angleB,angleC] = triangle;
    if (angleA === angleB && angleB === angleC && angleC === angleA) {
        return "triangulo de tipo equilatero";
    } else if ((angleA === angleB && angleA !== angleC) || (angleC === angleA && angleC !== angleB) || (angleB === angleC && angleB !== angleA)) {
        return "triangulo de tipo isosceles";
    } else {
        return "triangulo de tipo escaleno";
    };
};

console.log(CheckTriangleType(TriangleD)); // bien, correcto
console.log(CheckTriangleType(TriangleB)); // correcto
console.log(CheckTriangleType(TriangleA)); // Correcto !!
// Funciona bien :O
*/

//21
/*
function getThreeIntegers(intA,intB,intC) {
    let TotalInt = intA + intB + intC;
    TotalInt = TotalInt / 3;
    return TotalInt;
};
*/

//22
/*
function getFiveValues() { // Aca me da curiosidad si esto no se podria hacer con un forEach() o con un .map()
    let values = [];
    for (let i = 1; i <= 5; i++) {
        let acumulador = prompt("Dame 5 valores")
        acumulador = Number(acumulador);
        values.push(acumulador);
    };

    values = values.reduce((acumulador, numero) => {
        return acumulador + numero;
    });

    return values;
};

console.log(getFiveValues());
*/

//23
/* Esto no tengo idea de como hacerlo*/

//24
/*
function getFullName(name,lastname) {
    return `${name} ${lastname}`;
};

console.log(getFullName("Tobias","Ramirez"));
*/

//25
/*
function convertHoursToSeconds(Hours) {
    return Hours * 3600;
};

console.log(convertHoursToSeconds(4));
*/

//26
/*
function createEmail(user,domain) {
    return `${user}@${domain}`;
};

console.log(createEmail("hentrixs","email.com"));
*/

//27
/*
function convertCelsiustoFarenheit(celsius) {
    let operacion = (celsius * 1.8) + 32
    return operacion;
};

console.log(convertCelsiustoFarenheit(3));
*/

//28
// vamos a asumir que es 40km lo que queremos ir por esta vez
/*
function CalcTimeToComplete(distancia) {

    let resultadoEnBicicleta = (distancia) => {
        let resultado = distancia / 10;
        return `Para la distancia ${distancia} km en bicicleta el tiempo de viaje es ${resultado} horas`;
    };

    let resultadoEnPie = (distancia) => {
        let resultado = distancia / 5;
        return `Para la distancia ${distancia} km a pie el tiempo de viaje es ${resultado} horas`;
    };

    let resultadoEnAuto = (distancia) => {
        let resultado = distancia / 50;
        if (distancia <= 50) {
            return `Para la distancia ${distancia} km en auto el tiempo de viaje es ${resultado} minutos`;
        }
    }; // Aca faltaria ver como podemos hacer para meter minutos exactos o al menos algo que no sea 0.8 horas

    console.log(resultadoEnBicicleta(distancia));
    console.log(resultadoEnPie(distancia));
    console.log(resultadoEnAuto(distancia));

};

CalcTimeToComplete(40);
*/

//29
function puedeVerPelicula(edad,tieneAutorizacion) {
    
};