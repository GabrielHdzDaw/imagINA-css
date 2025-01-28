fetch("https://donluispanis.com/lm/api/imagenes.json")
    .then(response => response.json())
    .then(data => anadirImagenes(data))

function anadirImagenes(data) {
    const listadoFotos = document.getElementById("lista-fotos")
    data.imagenes.forEach(element => {
        console.log(element)
        listadoFotos.appendChild(anadirImagen(element))
    });
}

function anadirImagen(infoImagen) {
    const url = infoImagen.url
    const titulo = infoImagen.titulo
    const ancho = infoImagen.ancho

    const template = document.querySelector("template")
    const clone = template.content.cloneNode(true)

    const img = clone.querySelector("img")
    img.src = url
    img.alt = titulo
    img.width = parseInt(ancho)
    const figcaption = clone.querySelector("figcaption")
    figcaption.textContent = titulo

    return clone
}