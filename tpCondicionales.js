let nombre = prompt("Ingresa tu nombre")
function saludoBienvenida(nombre) {
    if ((nombre == "Nahuel") || (nombre == "Santino")) {
        alert("No sos bienvenido")
        return nombre
    } else {
        alert("Bienvenido, " + nombre)
        return nombre
    }
}
saludoBienvenida(nombre)

let edad = prompt("Ingresa tu edad")
function esMayor(edad) {
    if (edad >= 18) {
        alert("Sos mayor de edad")
    } else {
        alert("No sos mayor de edad")
    }
}
esMayor(edad)

let edadCat = prompt("Ingresa tu edad")
function categoriaEdad(edadCat) {
    if (edadCat <= 11) {
        alert("sos un niño")
    } else if (edadCat <= 18) {
        alert("Adolescente")
    } else if (edad <= 26) {
        alert("joven-adulto")
    }
}
