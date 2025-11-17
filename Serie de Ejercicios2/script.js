
//E1
arrayNumber = [1,10,43,32,5];

arrayNumber = arrayNumber.reduce((acumulador,numero) => {
    return acumulador + numero
});

console.dir(`Suma de todos los numeros de un array = ` + arrayNumber);

//E2
arrayString = ["stringA","StringB","StringC"];

function getConcat() {
    let acumulator = ``;
    for (let x of arrayString) {
        acumulator += `${x} `;
    };

    return acumulator 
};

console.log(`Concatenacion de strings de un array = ` + getConcat());

//E3
arrayNumber = [1,4,5,10,20,30,32,-12];
function getNumbersGreatherTanTen() {
    let acumulator = [];
    for (let number of arrayNumber) {
        if (number > 10) {
            acumulator.push(number);
        };
    };

    return acumulator;
}
console.dir(`Numeros mayores a 10 = ` + getNumbersGreatherTanTen());

//E4
arrayNumber = [5,4,2,9,14];
function getNumberPairs() {
    let acumulator = [];
    for (
        let number of arrayNumber
    ) {
        let check = number / 2;
        if (Number.isInteger(check)) {
            acumulator.push(number);
        };
    };  
    return acumulator;
};

console.log(`Numeros pares = ` + getNumberPairs());

//E5
arrayString = ["krieg","string1","string2","string3"]
function deleteArrayElement(element) {
    let getIndex = arrayString.indexOf(element);
    if (getIndex !== -1) {
        getIndex = arrayString.splice(getIndex,getIndex);
        return `post funcion = ${arrayString}`;
    } else {
        return null;
    };

};
// Aca estoy confundiendo, porque si pongo cualquier cosa que no sea krieg esto anda bien, pero si es krieg
// no funciona igual que cuando pongo los otros elementos
console.dir(deleteArrayElement("krieg"));

//E6
let arrayNames = ["juan","pepe","maria"];
function crearLista(name) {
    let acumulator = `Lista de ${name}\n`;
    let getBrand = 1;

    for (name of arrayNames) {
        acumulator += `${getBrand}. ${name}\n`;
        getBrand++;
    };
    return acumulator;
};
console.log(crearLista("Mikuri"));

//E7
arrayString = ["eA","eB","eC","eA","eA"];
function findString(string) {
    let counter = 0;
    for (let element of arrayString) {
        if (element == string) {
            counter += 1;
        };
    };

    let acumulador = `${string} aparece ${counter} veces`;
    return acumulador;
    //Quizas esto se pudo haber echo mejor
};

console.log(findString("eA"));

//E8
let gananciasMensuales = [];
function Vender(cantidadVendida,precio,nombreProducto) {
    let total = {nombre: nombreProducto, total: precio * cantidadVendida};
    gananciasMensuales.push(total);
}
Vender(3,250,"alcohol")

//E9
let gastosMensuales = [];
function Comprar(cantidadComprada,precio,nombreProducto) {
    let total = {nombre: nombreProducto, total: -(precio * cantidadComprada)};
    gastosMensuales.push(total);
};
Comprar(4,100,"Vino");


//10
function getMonthEarnings() {
    return gananciasMensuales[0].total + gastosMensuales[0].total;
};
console.log(`GananciasMensuales ${getMonthEarnings()}`);

//11
let calcularAreaTriangulo = (x,y) => (x * y / 2);
console.dir(`Area triangulo = ` + calcularAreaTriangulo(5,6));

//12
let esElUltimoCaracter = (palabra,caracter) => {
        let letra = palabra.length;
        letra = palabra.charAt(letra - 1);
        console.log(letra);
        if (letra == caracter) {
            console.log(`la ultima palabra del caracter ${palabra} conincide con ${letra}!`);
        } else {
            console.log("O no esta la palabra o algo salio mal")
        }
        // esto tambien se podia hacer con split()
    };
esElUltimoCaracter("world","d");

//13
let esValida = (contrasena) => {
    let length = contrasena.length;
    if (length > 8) {
        return true;
    };
};

//14
let contarPalabras = (str) => {
    return str.length;
}
console.dir(`"este" tiene 4 palabras = `+ contarPalabras("este"));

//15
let capitalizar = (str) => {
    let primera_letra = str.slice(-1).toUpperCase();
    let corte = str.slice(1);
    return primera_letra + corte;
};
console.log(`Esto esta capitalizado = ` + capitalizar("test"));

//16
let obtenerPrimeraOracion = (frase) => {
    let oraciones = frase.split(",");
    return oraciones[0];
};
console.dir(`Esta es la primera oracion de la frase = ${obtenerPrimeraOracion("frase muy larga, con varias oraciones")}`);

//17
let ocultarContrasena = (contrasena) => {
    let obtener_caraceres = contrasena.toString();
    let ateriscos = '';

    for (caracter of obtener_caraceres) {
        ateriscos += '*';
    };
    // Me pregunto si existian otras formas mejores de hacer esta funcion
    return ateriscos;
};
console.dir(`Esta contrasena tiene = ` + ocultarContrasena(1234));

//18
let obtenerExtencion = (archivo) => {
    let extencion = '.';
    extencion += archivo.split('.')[1];
    //Me pregunto si habia mejores y otras formas de hacer esto tambien
    return extencion
};
console.dir('la extencion es = ' + obtenerExtencion("imagen.png"));

//19
let esPuenteSeguro = (puente) => {
    let comprobar_estado = puente.indexOf(" ");
    if (comprobar_estado !== -1) {
        return "puente no seguro"
    } else {
        return "puente seguro"
    };
    //NOTA = podia haber validado que solo pongan # pero no tenia ganas
    // Creo que esta funcion se podia haber echo de otras maneras mejores
};

console.log(`Estado del puente = ${esPuenteSeguro("#####")}`);

//20
let obtenerMenor = (arrayNumber) => {
    let numerogrande = arrayNumber[0];
    for (let number of arrayNumber) {
        if (number < numerogrande) {
            numerogrande = number;
        };
    };
    return numerogrande;
};
console.dir(`Numero menor = ${obtenerMenor([12,43,4,5,43,2,56])}`);

//21
let sumar = (arrayNumber) => {
    return arrayNumber.reduce((acumulador, numero) => {
        return `Suma de todos los numeros ${acumulador + numero}`;
    });
};

//22
let contiene = (numero,numeros) => {
    let presente = numeros.indexOf(numero);
    if (presente !== -1) {return true};
    return false;
    /*
    return (presente? true : false);
    me hubiera gustado hacerlo de esta forma
    pero no se porque detecta el -1 del indexOf() como true en vez de false
    */
};
console.dir(`Este array contiene = `+ contiene(3,[22,12,3]));

//23
let star = '⭐';
let double_star = '💫';

let gano = (arrayExample) => {
    let acumulador_star = 0;
    let acumulador_double_star = 0;
    for (symbol of arrayExample) {
        switch(symbol) {
            case star:
                acumulador_star += 1;
                break
            case double_star:
                acumulador_double_star += 1;
                break
        };
    };
    if (acumulador_double_star < 5 || acumulador_star < 5) {
        return false;
    } else {
        return true;
    };
};

//console.dir(gano(['⭐','⭐','⭐','💫','⭐'])); // false
//console.dir(gano(['⭐','⭐','⭐','⭐','⭐'])); // true

//24
let dog = '🐶';
let cat = '🐱';

let separar = (array) => {
    let arrayA = [];
    let arrayB = [];

    for (let element of array) {
        switch(element) {
            case dog:
                arrayA.push(element);
                break;
            case cat:
                arrayB.push(element);
                break;
        };
    };

    // Quizas esta funcion se pudo hacer con menos codigo de alguna
    // forma

    return `El Array ${array} fue separado en: \n
    arrayA: ${arrayA} y \n
    arrayB: ${arrayB}`;
};

console.log(separar(['🐶','🐱','🐶','🐱','🐱','🐶','🐶']));

//25
let multiplicar = (array,multiplicador) => {
    let resultado = [];

    array.forEach((element) => {
        resultado.push(element * multiplicador);
    });

    return resultado;
};

console.dir(`el resultado es = ${ multiplicar([12,6,2],2) }`);

//26
let filtrarPorLongitudMayorA = (longitud,palabras) => {
    let acumulador = [];
    for (let palabra of palabras) {
        if (palabra.length > longitud) {
            acumulador.push(palabra); 
        };
    };
    return acumulador;
};
console.dir(filtrarPorLongitudMayorA(4,['dia','remolacha','azul','sorpresa','te','verde',]));

//27
let jugarPiedraPapelTijeras = (nombreA, nombreB, jugadasA, jugadasB) => {
    let puntajeA = 0;
    let puntajeB = 0;
    
    // Reglas: qué le gana a qué
    const reglas = {
        'Piedra': 'Tijera',   // Piedra gana a Tijera
        'Papel': 'Piedra',    // Papel gana a Piedra  
        'Tijera': 'Papel'     // Tijera gana a Papel
    };
    
    for (let i = 0; i < 3; i++) {
        if (jugadasA[i] === jugadasB[i]) {
            // Empate - no suma nadie
        } else if (reglas[jugadasA[i]] === jugadasB[i]) {
            // A le gana a B
            puntajeA++;
        } else {
            // B le gana a A
            puntajeB++;
        }
    }
    
    if (puntajeA > puntajeB) {
        return `${nombreA} ganó (${puntajeA} > ${puntajeB})`;
    } else if (puntajeB > puntajeA) {
        return `${nombreB} ganó (${puntajeB} > ${puntajeA})`;
    } else {
        return `Empate (${puntajeA} - ${puntajeB})`;
    }
};

console.dir(jugarPiedraPapelTijeras("Mikuri","Ryoko",["Papel","Piedra","Tijera"],["Piedra","Tijera","Papel"]));

//28
let esPalindromo = (palabra) => {
    let acumulador = "";

    for (let i = (palabra.length - 1); i >= 0; i--) {
        acumulador += palabra[i];
    };
    console.log(acumulador);

    if (acumulador === palabra) {
        return "es Palindromo";
    } else {
        return "no es Palindromo";
    };
};
console.dir(esPalindromo("radar"));

//29
let repetirLetras = (palabra,cantidad) => {
    palabra = palabra.split('');
    let acumulador = "";
    /*
    //V1 con bucle for
    for (let element of palabra) {
        for (let i = 0; i < cantidad; i++) {
            acumulador += element;
        };
    };
    return acumulador;
    */

    //V2 FINAL
    for (let i = palabra.length - 1; i >= 0 ; i--) {
        palabra.splice(i, 1,palabra[i].repeat(cantidad));
    }
    return palabra[0]+palabra[1]+palabra[2];
    /*
    Hacia adelante: Solo para lectura o crear nuevo array
    Hacia atrás: Cuando DEBES modificar el array originals
    */
};

console.dir(`Repetir letras = ` + repetirLetras("ah!",5));

//30
let removerDuplicados = (array) => {
    let resultado = [];
    
    for (let i = 0; i < array.length; i++) {
        if (!resultado.includes(array[i])) {
            resultado.push(array[i]);
        }
    }
    
    return resultado;
};

console.dir(`remover duplicados = ${removerDuplicados([1,2,1,3])}`);
/*

// V2 SIN INCLUDES()
let removerDuplicados = (array) => {
    let resultado = [];
    
    for (let i = 0; i < array.length; i++) {
        let esDuplicado = false;
        
        // Verificar manualmente si ya existe
        for (let j = 0; j < resultado.length; j++) {
            if (array[i] === resultado[j]) {
                esDuplicado = true;
                break; // Salir del bucle interno
            }
        }
        
        // Usando solo if/else
        if (esDuplicado === false) {
            resultado.push(array[i]);
        }
        // else: no hacer nada (ya existe)
    }
    
    return resultado;
};

*/

//31
let dobles = (numeros) => {
    let acumulador = [];
    for (let numero of numeros) {
        acumulador.push(numero * 2);
    }
    return acumulador;
};

console.dir(`DOBLES = ` + dobles([2,3,9]));

//32
let longitudes = (frases) => {
    let acumulador = [];
    for (let frase of frases) {
        acumulador.push(frase.length);
    };

    return acumulador;
};

console.dir(`Longitud de frases = ${longitudes(
    ["frase a con letras","esto tiene una longitud","esta es la ultima frase de todas"]
)}`);

//33
let posiciones = (playlist) => {
    /*
    V1
    acumulador = [];
    for (let music of playlist) {
        acumulador.push(`${playlist.indexOf(music)}.${music} `);
    };
    console.dir(`Esta es la V1 = ${acumulador}`);
    */

    
    //V2 con split('');
    for (let i = 0; i < playlist.length; i++) {
        playlist.splice(i,1,`${i + 1}. ${playlist[i]}`);
        //aca me da curiosidad porque el 1 que esta despues del i no aumenta
    }
    
    console.log(playlist);
};

console.dir(`Posicion de las canciones ${posiciones(["Everlong","The Pretender","Learn to Fly"])}`);

//34
let losMasCaros = () => {
    const costos = [ 39, 53, 17, 99, 7, 9, 6, 68, 54, 97, 27, 90, 92, 75, 26, 86, 22, 42, 20, 14 ]
    let array = [];
    for (let precio of costos) {
        if (precio > 50) {
            array.push(precio);
        };
    };
    return `Precios mas caros = ${array}`;
};
console.dir(losMasCaros());

//35
const mix = [ 'Ut vero.',2 , function () { console.log('hola mundo!') }, 56, 'Diam rebum nonumy et.', true, false,'Kasd stet.', 'Sit et dolor.', null, null, [ 1, 2, 3], 'Dolore.'];

let soloString = (mix) => {
    let acumulador = [];
    for (let date of mix) {
        if (typeof(date) == typeof("string")) {
            acumulador.push(date);
        };
    };
    // Esto anda bien
    // Pero me gustaria conocer como podria hacer para validar 
    // que no sea cada uno de los tipos de datos de la funcion
    // en vez de validar que sea solamente un string (que es el camino facil)
    return acumulador;
}
console.dir(`Datos solo string = ${soloString(mix)}`);

//36

/*
//V1 (abandonada por falta de tiempo)
// Despues entender porque no pude hacer esto con el document.querySelector("#div1");
const node = document.createElement("span");
const textnode = document.createTextNode("number = 0");

node.appendChild(textnode);
document.getElementById("div1").appendChild(node);
*/

//V2
let div1 = document.getElementById("div1");
let valor = 0;
let registro_valor = [];
// Aca tengo que aprender como hacer para poner un event listener 
// para muchos elementos iguales
document.addEventListener("click", (e) => {
    // Aca faltaria ver porque carajos no solamente toma el boton y no todo el documento
    valor += Number(e.target.value);
    if (!isNaN(valor)) {
        registro_valor.push(valor);
        div1.innerHTML += `${valor}<br>`;
    } else {
        valor = registro_valor[registro_valor.length - 1];
    };
});

/*
// V3 CON FOREACH()

const botones = document.querySelectorAll('.mi-clase');

botones.forEach(boton => {
    boton.addEventListener('click', function() {
        console.log('Botón clickeado:', this.textContent);
    });
});

*/

//37
let div2 = document.getElementById("div2");
let buttons = document.querySelectorAll(".button");
let span = document.getElementById("respuesta");

buttons.forEach((boton, index) => {
    boton.addEventListener("click", (e) => {
        let value = Number(e.target.value);
        
        // PRIMERO: Resetear todos los botones
        buttons.forEach(btn => {
            btn.style.backgroundColor = '';
            btn.style.color = '';
        });
        
        // LUEGO: Aplicar estilos según la lógica
        if (value === 3 || value === 6) {
            span.innerHTML = "Respuesta Incorrecta";
            
            // Solo pintar de rojo los botones incorrectos
            buttons.forEach(btn => {
                let btnValue = Number(btn.value);
                if (btnValue === 3 || btnValue === 6) {
                    btn.style.backgroundColor = 'red';
                } else if (btnValue === 4) {
                    btn.style.backgroundColor = 'green';
                };
            });
            
        } else if (value === 4) { 
            span.innerHTML = "Respuesta Correcta";
            
            // Solo pintar de verde el botón correcto
            buttons.forEach(btn => {
                let btnValue = Number(btn.value);
                if (btnValue === 4) {
                    btn.style.backgroundColor = 'green';
                    btn.style.color = 'black';
                } else if (btnValue === 3 || btnValue === 6) {
                    btn.style.backgroundColor = 'red';
                    btn.style.color = 'black';
                }
            });
        }
    });
});

//38
let div3 = document.getElementById("div3");

let createImg = (number) => {
    for (let i = 0; i <= number; i++) {
        let img = document.createElement("img");
        img.src = './assets/images/imageplaceholder.jpg';

        if (i == number) {
            img.width = '500';
            img.height = '500';
        } else {
            img.width = '100';
            img.height = '100';
        };
        /*
        img.addEventListener("click", (e) => {
            let element = e.target;
            element.style.width = '500px';
            element.style.height = '500px';
            console.log("ok..")
        })
        */
        img.onclick = imgClick;
        div3.appendChild(img);
    };
};

let imgClick = (e) => {
    let allimgs = div3.querySelectorAll("img");
    let imagenClickeada = e.target;
    
    // 1. Todas a tamaño pequeño
    allimgs.forEach(img => {
        img.style.width = '100px';
        img.style.height = '100px';
    });
    
    // 2. Solo la clickeada a tamaño grande
    imagenClickeada.style.width = '500px';
    imagenClickeada.style.height = '500px';
};

createImg(5);

//39
let random = (numberLimit) => {
    return(Math.floor(Math.random() * numberLimit));
};

document.addEventListener("keydown", (e) => {
    if (e.code == "Space") {
        let x = document.getElementsByTagName("body");
        x[0].style.backgroundColor = `rgb(
            ${random(255)},
            ${random(255)},
            ${random(255)})`;
    };
});

//40
let disco = {
    id: 1,
    nombre: 'Wasting Light',
    anioLanzamiento: 2011,
    cantidadDeTemas: 12,
    banda: {
        nombre: 'Foo Fighters',
        anioFormacion: 1994
    }
};

let infoDelDisco = (disco) => {
    return `El disco ${disco["nombre"]} de la banda ${disco["banda"].nombre} se lanzo en el año ${disco.anioLanzamiento}`;
};

console.log(infoDelDisco(disco));

//41
let bandas = [
    { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
    { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
    { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
    { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
    { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];

let estanActivas = (bandas) => {
    let activa = [];
    for (let banda of bandas) {
        activa.push(banda.activa);
    };
    
    let acumulador = '';
    for (let i = 0; i < bandas.length; i++) {
        
        let obtenerActividad = activa[i]? "Esta activa": "No esta activa";
        let nombre = bandas[i].nombre;
        let año = `desde el año ${bandas[i].fundacion}`;

        if (nombre !== "Nirvana" &&
            nombre !== "Led Zeppelin"
        ) {
            acumulador += `${nombre} ${obtenerActividad} ${año}\n`;
        } else {
            acumulador += `${nombre} ${obtenerActividad} \n`;
        };

    };
    return acumulador;

};

console.dir(estanActivas(bandas));

//42

let ledZeppelin = {
    nombre: "Led Zeppelin",
    anio: 1968,

    activa: false,
    miniatura:
    "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
    
    integrantes: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
    discos: [
        {
        nombre: "Led Zeppelin",
        anio: 1969,
        canciones: ["Good Times, Bad Times", "Communication Breakdown"],
        duracion: 2691,
        },
        {
        nombre: "Led Zeppelin II",
        anio: 1969,
        canciones: ["Whole Lotta Love", "Moby Dick", "Ramble On"],
        duracion: 2502,
        },
        {
        nombre: "Led Zeppelin III",
        anio: 1970,
        canciones: ["Immigrant Song"],
        duracion: 2489,
        },
        {
        nombre: "Led Zeppelin IV",
        anio: 1971,
        canciones: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"],
        duracion: 2559,
        },
    ],
};

let informacionDeLaBanda = (ledZeppelin) => {
    /*
    let integrantes = ledZeppelin[4].forEach(element => {
        return `${element}, `
    });
    */
    
    let acumulador = [];
    let acumulador2 = [];    
    let acumulador3 = [];

    // Es posible que existan formas mejores para hacer esto 

    for (let i = 0; i < ledZeppelin["discos"].length; i++) {
        acumulador.push(ledZeppelin["discos"][i].canciones);
        acumulador3.push(ledZeppelin["discos"][i].duracion);
    };

    for (let i = 0; i < acumulador.length; i++) {
        for (let element of acumulador[i]) {
            acumulador2.push(element);
        };
    };
    
    acumulador3 = acumulador3.reduce((acumulador,numero) => {
        return (acumulador + numero) / (acumulador3.length);
    })

    // Aca me deberia dar como promedio en teoria 1137.888888888889 segundos."
    // nose porque me da cualquier cosa

    return `${ledZeppelin["nombre"]} se fundo en el anio ${ledZeppelin["anio"]} tiene ${ledZeppelin["integrantes"].length} integrantes: ${ledZeppelin["integrantes"]}. tiene en total ${acumulador2.length} canciones entre todos los discos. En promedio, cada cancion dura ${acumulador3} segundos.`
};

console.dir(informacionDeLaBanda(ledZeppelin));

//43
let producto = {
    id: "ADA-020",
    titulo: "Gubergren sed est amet voluptua",
    precio: 123.75,
    imagen:
    "https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg",
    condicion: "nuevo",
    envioGratis: true,
    ubicacion: "Capital Federal",
};

let obtenerPropiedadesYValores = (producto) => {
    let lista_pedidos = ["id","titulo","precio","imagen","condicion","envioGratis","ubicacion"];
    let acumulador = ``;
    for (let i = 0; i < Object.keys(producto).length; i++) {
        let pedido = lista_pedidos[i];
        acumulador += `producto['${pedido}']-> ${producto[pedido]}\n`;
    };
    
    return acumulador;
};

console.dir(obtenerPropiedadesYValores(producto));

//Nota: esta mal que yo cree una variable acumulador para resolver los ejercicios?
// O lo correcto seria que no lo haga?
// Que es lo que haria un programador senior?
// En caso de que un programador senior no use la variable acumulador, como puedo hacer lo mismo? 

//44
let perfilSinEmail = {
    nombreDeCuenta: "ada_lovelace",
    contrasenia: "1234567890!"
};

let perfilConEmail = {
    nombreDeCuenta: "ellie_arroway",
    contrasenia: "vegaeterna",
    email: "ellie@argos.org"
};

let tieneEmail = (perfil) => {
    //Queria tratar de usar .includes para verificar esto, pero no podia
    if (perfil["email"]) {
        return "Tiene email"
    } else {
        return "No tiene email"
    };
};

console.dir(tieneEmail(perfilConEmail));

//45
let perfil1 = {
    nombre: 'Grace',
    apellido: 'Hopper',
    email: 'grace.hopper@gmail.com',
    password: '123456'
};

let perfil2 = {
    nombre: 'Ada',
    apellido: 'Lovelace',
    email: 'ada.lovelace@gmail.com',
    password: '**178!Ada--'
};

let perfil3 = {
    nombre: 'Hedy',
    apellido: 'Lamarr',
    email: 'hlamarr@gmail.com',
    password: '1234'
};

let validarPassword = (perfil) => {
    //verificacion
    let passwordsNoSeguras = ["123456", "password", "111111", "qwerty"];
    let check = {
        verificada: false,
    };

    for (let password of passwordsNoSeguras) {
        if (perfil["password"] === password) {
            check["mensaje"] = "Password no segura";
            return check;
        };
        if (perfil["password"].length < 6) {
            check["mensaje"] = "Password con menos de 6 caracteres";
            return check;
        };
        check["verificada"] = true;
        check["mensaje"] = "Esto es un mensaje"
    };

    return check;
    // Aca me gustaria saber si existe forma de que el poner el check mensaje sea opcional
};

console.dir(validarPassword(perfil1));

//46
let albumDeEjemplo = {
    id: 'nirv1234',
    nombre: 'With The Lights Out',
    anio: 2004,
    genero: 'Grunge',
    banda: 'Nirvana',
    portada: 'https://muzikalia.com/wp-content/uploads/2005/03/nirvana__with_the_lights_out.jpg',
    info: 'https://en.wikipedia.org/wiki/With_the_Lights_Out'
};

let render = () => {
    let div_container = document.createElement("div");
    let img = document.createElement("img");
    let subdiv = document.createElement("div");
    let h5 = document.createElement("h5");
    let p = document.createElement("p");
    let a = document.createElement("a");

    // Agregar elementos al DOM
    div_container.appendChild(img);
    div_container.appendChild(subdiv);
    
    subdiv.appendChild(h5);
    subdiv.appendChild(p);
    subdiv.appendChild(a);

    // Agregar clases CORRECTAMENTE
    div_container.classList.add("card", "m-5");
    subdiv.classList.add("card-body");
    h5.classList.add("card-title");
    p.classList.add("card-text");
    a.classList.add("btn", "btn-primary");

    // Asignar atributos y contenido
    a.href = albumDeEjemplo.info;
    div_container.id = albumDeEjemplo.id;
    img.src = albumDeEjemplo.portada;
    img.alt = `${albumDeEjemplo.banda} - ${albumDeEjemplo.nombre}`;
    
    h5.textContent = albumDeEjemplo.banda;
    p.textContent = `${albumDeEjemplo.nombre} | ${albumDeEjemplo.genero}`;
    a.textContent = "Más info";

    // No olvides agregar al documento
    document.body.appendChild(div_container);
};

render();

//47
let productos = { cookies: 60, chocolate: 110, soda: 120 };
let dinero = 115;

let comprarProductos = (productos,dinero) => {
    /*
    //Queria usar el Object.keys() para este bucle pero no me salia
    me gustaria haber podido usar el for o algun bucle para iterar
    sobre el objeto y hacer la comprobacion
    desafortunadamente no recuerdo como iterar objetos y por eso no lo pude hacer
    */

    let acumulador = [];
    // Creo que esta funcion se pudo haber hecho mas compacta y mejor
    let {cookies,chocolate,soda} = productos;
    let array = [cookies,chocolate,soda];

    for (let element of array) {
        if ((dinero - element) >= 0) {
            //Aca no se porque carajos me muestra los numeros en vez de los nombres de los elementos
            element = `${element}: true`;
            acumulador.push(element);
        } else {
            element = `${element}: false`;
            acumulador.push(element);
        };
    }
        
    return acumulador;
};

console.log(comprarProductos(productos,dinero));

//48
let obtenerInfoString = (str) => {
    let acumulador = {
        Numeros: 0,
        Letras: 0,
        Espacios: 0,
    };

    for (let i = 0; i < str.length; i++) {
        //console.log(str[i] + ' AND ' + str.length);
        if ( Number(str[i]) ) {
            acumulador["Numeros"] += 1;
        } else if (str[i] === " ") {
            acumulador.Espacios += 1;
        };
    };

    console.log('Number = ' + acumulador["Numeros"]);

    acumulador["Letras"] = (str.length - 1) - (acumulador["Numeros"] + acumulador["Espacios"]);
    return acumulador;
};

// Aca no se que pasa que retorna bien las letras y los espacios
// pero los numeros retorna uno menos de los que deberia

// "H3ll0 Wor1d"
console.log(obtenerInfoString("10XD1 ON"));

//49

let persona = {
    experiencia: 4,
    lenguajes: ["JavaScript", "HTML","CSS"],
    locacion: "Buenos Aires",
    remuneracion: 35000
}

let busqueda = {
    experiencia: 1,
    lenguajes: ["JavaScript", "HTML"],
    locacion: ["Buenos Aires"],
    remuneracion: 40000
}

let seAdecua = (persona,busqueda) => {
    let acumulador = 0;

    let A = persona["experiencia"] >= busqueda["experiencia"];
    let B = persona["lenguajes"].length >= busqueda["lenguajes"];
    let C = persona["locacion"] === busqueda["locacion"];
    let D = persona["remuneracion"] <= busqueda["remuneracion"];
    // Aca tengo el tema de que no andan los condicionales al parecer
    // igual quiero aclarar que si lo hiciera con if else seguramente
    // funcionaria, pero en este caso con el switch nose que anda mal

    switch(persona) {
        case A:
            acumulador += 1;
            console.log(acumulador);
        case B:
            acumulador += 1;
            console.log(acumulador);
        case C:
            acumulador += 1;
            console.log(acumulador);
        case D:
            acumulador += 1;
            console.log(acumulador);
        default:
            console.log('Esto se ejecuta');
    };

    if (acumulador >= 4) {
        return 'Esta persona se ajusta a la busqueda';
    } else {
        return `Esta persona no se ajusta a la busqueda (${acumulador} de 5 puntos requeridos)`
    }
};

console.log(seAdecua(persona,busqueda));

// Bueno, necesito que me ayudes a ver cada uno de mis errores
// Cuales son mis errores mas grandes y cuales los menores
// Y como evitar que sucedan de nuevo