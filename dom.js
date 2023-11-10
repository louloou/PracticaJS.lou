// Buscar elemeto h1 y guardar en variable
let titulo = document.querySelector("h1")
// modificar texto del elemento h1


let imagen = document.querySelector(".Imagen")

let verificar = false;

let boton = document.querySelector("#cambiarImagen")
boton.onclick = function () {
    if (verificar == false) {
        titulo.innerText = "Hola como estan"
        imagen.src = "chori.jfif"
        verificar = true
    } else {
        titulo.innerText = ' '
        verificar = false
    }

}

let botonRojo = document.querySelector("#botonRojo")
let botonAzul = document.querySelector("#botonAzul")
let botonVerde = document.querySelector("#botonVerde")

botonRojo.onclick = function () {
    titulo.style.color = "red"
}
botonAzul.onclick = function () {
    titulo.style.color = "blue"
}
botonVerde.onclick = function () {
    titulo.style.color = "green"
}

let imagen1 = document.querySelector("img")
imagen1.width = "130px"

let aumento= 100
tamaño.onclick =function (){
    aumento =aumento + 10
    imagen1.style.width= aumento + "px"
}