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
/*
for (let i = 0; i < 10; i++) {
    switch(i) {
        case 5:
            break;
    };
};
*/

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
*/
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
            return restar(a,b);
            break
        case '+':
            return sumar(a,b);
            break
        default:
            return null;
    };
};
/*
console.log(calcular('-',15,5));
*/

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
// Este ejercicio muestrame como segun tu se podria hacer mejor

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
let NumerosEnteros = [];
let par = [];
let impar = [];

for (let i = 0; i < 5; i++) {
    let x = prompt(`Dame ${i} Numeros enteros`)
    x = Number(x);
    NumerosEnteros.push(x);
};

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
for (let i = 0; i < 3;i++) {
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
// Que solucion crees que podriamos aplicar aqui?

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

// V2 19
/*
let triangles = {
    "triangleA":[10,10,10],
    "triangleB":[9,9,12],
    "triangleC":[6,6,4],
    "triangleD":[4,7,9],
};
// Ok, ahora tengo que ver como descompactar cada uno de estos

let [ta,tb,tc,td] = [triangles.triangleA,triangles.triangleB,triangles.triangleC,triangles.triangleD];

// Buscar como podria meter mas de una variable o objeto sobre una sola funcion
let CheckTriangleType = (...triangle) => {
    let acumulador = {
        "equilatero":0,
        "isosceles":0,
        "escaleno":0
    };

    // Nota= despues buscar formas de hacer destructuring a un objeto
    for (let i = 0; i < triangle.length; i++) {
        let [angleA,angleB,angleC] = triangle[i];

        if (angleA === angleB && angleB === angleC && angleC === angleA) {
            acumulador.equilatero += 1;
        } else if ((angleA === angleB && angleA !== angleC) || (angleC === angleA && angleC !== angleB) || (angleB === angleC && angleB !== angleA)) {
            acumulador.isosceles += 1;
        } else {
            acumulador.escaleno += 1;
        };
    };

    let Check = () => {
        let triangles = [acumulador.isosceles,acumulador.escaleno,acumulador.equilatero];
        let carga;

        for (let i = 0; i < 3; i++) {
            // Aca el problema con este for es que si tenemos triangulo[1] 
            // tenemos que buscar que no haya otro triangulo[1];
            // En la segunda y tercera iteracion el triangulo[2] no se compararia con el 
            // triangulo de su anterior iteracion 
            // si el primer triangles[0] entonces compararia con -1 y 1
            // Aca lo que yo noto es que no soy capaz de sacar el indexOf() de lo que seria cad
            // triangle[i] y por consiguiente en realidad esto no esta saliendo bien del todo

                if (i == 0) {
                    if (triangles[i] < (triangles[i] + 1) && triangles[i] < (triangles[i] + 2)) {
                        carga = triangles[i];
                    };
                } else if (i == 1) {
                    if (triangles[i] < ( triangles[i] + 1) && triangles[i] < (triangles[i] - 1)) {
                        carga = triangles[i];
                    };
                } else if (i == 2) {
                    if (triangles[i] < (triangles[i] + 1) && triangles[i] < (triangles[i] - 1)) {
                        carga = triangles[i];
                    };
                };
            };
            return carga;
        };

        return `Hay: \n 
        ${acumulador.equilatero} triangulo equilatero, \n
        ${acumulador.isosceles} triangulo isosceles, \n
        ${acumulador.escaleno} triangulo escaleno.
        \n
        \n
        Hay en menor cantidad ${Check()};
        `
    };

console.log(CheckTriangleType(ta,tb,tc,td));
*/
//20
/*
function getMeTwoNumbers(Minor,Mayor) {
    for (Minor; Minor <= Mayor; Minor++) {
        console.log(Minor);
    };
};
getMeTwoNumbers(5,10);
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
/*
function getWord(word) {
    return `!${word}!`;
};
console.log(getWord("HOLA :D"));
*/

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
/*
function puedeVerPelicula(edad,tieneAutorizacion) {
    if (edad < 15 && !tieneAutorizacion) {
        return false;
    } else {
        return true;
    }
};
console.log(
 puedeVerPelicula(12, false), //false
 puedeVerPelicula(12, true), //true
 puedeVerPelicula(16, false), // true
 puedeVerPelicula(18, true), //true
);
*/

//30
/*
function esVocal(letra) {
    let vocales = ["a","e","i","o","u"];
    for (let i = 0;i < vocales.length; i++) {
        if (letra === vocales[i]) {
            return true
        };
    };
    return false;
};

console.log(
esVocal('a'),
esVocal('n'),
esVocal('e')
);
*/

//31
/*
let edad = 23;
if (edad >= 18) {
    console.log("es mayor de edad");
} else {
    console.log("es menor de edad");
};
*/

//32
function getPrice() {
    let price = prompt("Dame un precio");
    price = Number(price);
    if (price < 3000) {
        console.log("es barato");
    } else {
        console.log("es caro");
    };
};

// 33 
/* no se como hacer el sistema para verificar los numeros*/

//34
function verifyNumber(number) {
    if (number < 0) {
        return "Negativo";
    } else if (number == 0) {
        return "igual a 0"
    } else {
        return "Positivo"
    };
};

//35
function verifyAge(age) {
    /*
    let a = age? (age > 18 && age < 65): false;
    if (a) {return "edad laborable"} else {return "edad no laborable"};
    */

    //Misma version pero con switch
    // Esto no se porque no anda ,explicalo si puedes
    let a = age > 18 && age < 65;
    switch(age) {
        case a:
            console.log("edad laborable");
            break;
        default:
            console.log("edad no laborable");
    };
};

console.log(verifyAge(30));
