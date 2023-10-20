/* 
let nota = 8
if (nota >= 6)
{
alert ("Felicidades aprobaste el examen!")
}
else {
alert ("Desaprobaste, segui estudiando")
}

let SashaSeLlevaMaterias = false

if (SashaSeLlevaMaterias == true) {
    alert("se va a diciembre")
} else {
    alert("Le compran unas zapatillas")
}
 /* ==
 >=
 <=
 !=


 let energia= Number(promt("Ingresa la cantidad de voltios"))

if(energia >= 100)
 {
alert ("Podes prender la luz y otros dispotivos")

}else{
    alert ("Necesita un poco más de energia")
}
 1. Crear una funcion que determine el mayor de dos 2 números
2. Crear una funcion que determine que un número es positivo, negativo o cero
3. Crear una funcion que determine si un número esta entre los valores 25 y 255 
 */

function mayor(num1, num2) {
    if (num1 > num2) {
        alert("El número mayor es " + num1)
        return num1
    }
    else {
        alert("El número mayor es " + num2)
        return num2
    }
}
mayor(6, 9)

function positivoNegativoCero(num) {
    if (num > 0) {
        return "positivo"
    }
    else if (num == 0) {
        return "cero"
    }
    else {
        return "negativo"
    }
}

function rangoDeValores (num)
if ((num >= 25) && (num <= 255))
{
    return "Está en el rango de valores"
}
else{
    return "No está en el rango de valores"
}