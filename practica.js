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

function multiplicacion(b, c)
{
    let resultado = b * c
    return resultado
}
console.log (multiplicacion(2,5))

function division (a,b)
{
    let resultado= a/b 
    return resultado
}
console.log (division (10,2))

function suma(a,b)
{
    let resultado= a + b
    return resultado
}
console.log (suma(25,2))

function resta(a,b)
{
    let resultado= a-b
    return resultado
}
console.log (resta(25,5))

function expresion (x,a,b)
{
    let resultado= x^2+5
    return resultado 
}
console.log (expresion (4,2,5))

let nombre = prompt('Introduce tu Nombre');
let apellido = prompt('Introduce tu Apellido');
alert('Bienvenido/a mi página web, ' + nombre + apellido)