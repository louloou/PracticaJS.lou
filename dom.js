// Buscar elemeto h1 y guardar en variable
let titulo = document.querySelector("h1")
// modificar texto del elemento h1


let imagen = document.querySelector(".Imagen")
imagen.src = "chori.jfif"

let boton = document.querySelector("#cambiarImagen")
boton.onclick = function() {
    titulo.innerText = "Hola como estan"
    imagen.src = "chori.jfif"
}