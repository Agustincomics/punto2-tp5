class Persona {
    constructor(nombre, edad, DNI, sexo, peso, altura, nacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.dni = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.nacimiento = nacimiento;
    }
    mostrarGeneracion(){
        if (this.nacimiento >= 1930 &&  this.nacimiento <= 1948) {
            alert(`${this.nombre} es de la Silent Generation. Su RASGO CARACTERISTICO es la AUTESRIDAD <br>`);
        }

        if (this.nacimiento >= 1949 &&  this.nacimiento <= 1968) {
            alert(`${this.nombre} es de la Baby Boom. Su RASGO CARACTERISTICO es la AMBICION  <br>`);
        }

        if (this.nacimiento >= 1969 &&  this.nacimiento <= 1980) {
            alert(`${this.nombre} es de la GENERACION X. Su RASGO CARACTERISTICO es la OBSESION POR EL EXITO <br>`);
        }

        if (this.nacimiento >= 1981 &&  this.nacimiento <= 1993) {
            alert(`${this.nombre} es de la GENERACION Y. Su RASGO CARACTERISTICO es la FRUSTRACION <br>`);
        }

        if (this.nacimiento >= 1994 &&  this.nacimiento <= 2010) {
            alert(`${this.nombre} es de la GENERACION Z. Su RASGO CARACTERISTICO es la IRREVERENCIA <br>`);
        }
    }
    esMayorDeEdad(){
        if (this.edad >= 18) {
            alert(`${this.nombre} es MAYOR de edad <br>`);
        } else {
            alert(`${this.nombre} es MENOR de edad <br>`);
        }
    }
    generaDNI(){
        let numero = Math.floor(Math.random() * 100000000);
        numero = numero.toString();
        while (numero.length < 8) {
        numero = numero + "0";
        }
        document.write(`El DNI generado es: ${numero} <br>`);
    }
    mostrarDatos(){
        document.write(`NOMBRE: ${this.nombre},<br> edad: ${this.edad},<br> DNI: ${this.dni},<br> SEXO: ${this.sexo},<br> PESO: ${this.peso},<br> ALTURA: ${this.altura},<br> NACIMIENTO: ${this.nacimiento}, <br>`);
    }
}

let nom = document.getElementById("nombre").value;
let nombre = nom;
let ed = document.getElementById("edad").value;
let edad = ed;
let dni = document.getElementById("dni").value;
let dni2 = dni;
let gen = document.getElementById("sexo").value;
let sexo = gen;
let pes = document.getElementById("peso").value;
let peso = pes;
let alto = document.getElementById("altura").value;
let altura = alto;
let nac = document.getElementById("nacimiento").value;
let nacimiento = nac;
console.log(nac);
console.log(ed);

let persona1 = new Persona(nombre, edad, dni2, sexo, peso, altura, nacimiento);
console.log(nacimiento);
console.log(edad);

let enviar = document.getElementById("enviar");
enviar.addEventListener("click", persona1.mostrarGeneracion);

let mayorOMenor = document.getElementById("mayor");
mayorOMenor.addEventListener("click", persona1.esMayorDeEdad);