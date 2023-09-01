/* 
console.log('El resultado de la suma es: ' + (12 + 2))
console.log('El resultado de la resta es: ' + (42 - 2))
console.log('El resultado de la multiplicacion es: ' + (9 * 4))
console.log('El resultado de la division es: ' + (15 / 3))

let variableSuma = 12 + 2
console.log(variableSuma)
alert(variableSuma)

let variableResta = 42 - 2
console.log(variableResta)
alert(variableResta)

let variableMultiplicacion = 9 * 4
console.log(variableMultiplicacion)
alert(variableMultiplicacion)

let variableDivision = 15 / 3
console.log(variableDivision)
alert(variableDivision)

let miedad = (2023 - 2008)
alert('Mi edad es: ' + miedad)

let añoUsuario = prompt('Introduce tu año de nacimiento');
let edadUsuario = (2023 - añoUsuario)
alert('Tu edad es ' + edadUsuario)

let nombre = prompt('Introduce tu Nombre');
alert('Bienvenido/a mi página web, ' + nombre)

let nombreAlumno = 'Lourdes '
let apellidoAlumno = 'Bray Caballero'
let yo = nombreAlumno + apellidoAlumno
alert('Hola, ' + yo)
console.log('Hola, ' + yo)

let diez = 10
let tres = 3
let resultadoMultiplicacion = 10 * 3
console.log('Resultado 10*3= ' + resultadoMultiplicacion)

function calcularPromedio(a, b, c) {
    let promedio = (a + b + c) / 3
    return promedio
}
calcularPromedio(10, 9, 8)
alert(calcularPromedio(10, 9, 8))
console.log(calcularPromedio(10, 9, 8))

let numeroCalcular = prompt('Introduce el número para elevar al cubo')
alert(numeroCalcular * numeroCalcular * numeroCalcular)


function cubo(b) 
{
    let resultado = b * b * b
    return resultado
    // return b*b*b 
}

let numero = 5 + cubo(5)
alert(numero)

function saludo(nombre)
{
    return "Bienvenid@ " + nombre
}

alert (saludo("Marti"))


1) Crear una funcion que calcule: 
a. Multiplicacion 
b. Division 
c. Suma
d. Resta
e. La siguiente expresion: x^2+5 

2) Crear una funcion que salude a una persona, utilizando su nombre y apellido. 
*/

function multiplicacion(b, c) {
    let resultado = b * c
    return resultado
}
console.log(multiplicacion(2, 5))

function division(a, b) {
    let resultado = a / b
    return resultado
}
console.log(division(10, 2))

function suma(a, b) {
    let resultado = a + b
    return resultado
}
console.log(suma(25, 2))

function resta(a, b) {
    let resultado = a - b
    return resultado
}
console.log(resta(25, 5))

function expresion(x, b) {
    let resultado = x * x + b
    return resultado
}
alert(expresion(8, 5))

let nombre = prompt('Introduce tu Nombre');
let apellido = prompt('Introduce tu Apellido');
alert('Bienvenido/a mi página web, ' + nombre + apellido)

function saludar(nombre, apellido) {
    return "Bienvenid@" + nombre + apellido
}
alert(saludar("Sasha", "Cisneros"))

function cuadrado(numero) {
    let resultado
}
function operacion(x, b) {
    let resultado = cuadrado
}

/*  
1) Crear una funcion que calcule el cuadrado de un numero
2) Crear una funcion que calcule el cubo de un numero
3) Crear una funcion por cada una de las siguientes operaciones 
a) x^2-x-10
b) (x-3)*2
c) x*x^2+20
d) (x/2) + 5
e) x^3+x^2+10
f) (x*10)*5
*/
function cuadradoNumero(x) {
    let resultado = x * x
    return resultado
}
console.log(cuadradoNumero(2))

function cuboNumero(x) {
    let resultado = x * x * x
    return resultado
}
console.log(cuboNumero(3))

function a(x) {
    //let resultado= cuadradoNumero(x) - x - 10
    let resultado = (x * x) - x - 10
    return resultado
}
console.log(a(5))

function b(x) {
    let resultado = (x - 3) * 2
    return resultado
}
console.log(b(2))

function c(x) {
    let resultado = (x * x) * x + 20
    return resultado
}
console.log(c(3))

function d(x) {
    let resultado = (x / 2) + 5
    return resultado
}
console.log(d(2))

function e(x) {
    let resultado = (x * x * x) + (x * x) + 10
    return resultado
}
console.log(e(5))

function f(x) {
    let resultado = (x * 10) * 5
    return resultado
}
console.log(f(3))

// Alt + Shift + F