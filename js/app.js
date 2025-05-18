//----------------------INPUTS--------------------

const mounstruoFuego = document.getElementById("mounstruoFuego")
const mounstruoAgua = document.getElementById("mounstruoAgua")
const mounstruoTierra = document.getElementById("mounstruoTierra")

//-------------------------BOTONES------------------

const btnConfirmar = document.getElementById("btnConfirmar")
btnConfirmar.addEventListener("click", ()=>{
    if (mounstruoFuego.checked === true){
        eleccionUsuario.src = "./img/Mounstruo fuego.png"
    } else if (mounstruoAgua.checked === true){
        eleccionUsuario.src = "./img/Monstruo agua.png"
    } else if (mounstruoTierra.checked === true){
        eleccionUsuario.src = "./img/Mounstruo piedra.png"
    } else{
        alert("No elegiste ningun mounstruo")
    }
})

//----------------------IMG----------------------
const eleccionUsuario = document.createElement("img")
const eleccionRival = document.createElement("img")

const figureUsuario = document.getElementById("figureUsuario")
const figureRival = document.getElementById("figureRival")

eleccionUsuario.classList.add("w-25")
eleccionRival.classList.add("w-25")

figureUsuario.appendChild(eleccionUsuario)
figureRival.appendChild(eleccionRival)



