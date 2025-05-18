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

    if (mounstruoAleatorio === 1){
        eleccionRival.src = "./img/Mounstruo fuego.png"
    } else if (mounstruoAleatorio === 2){
        eleccionRival.src = "./img/Monstruo agua.png"
    } else if (mounstruoAleatorio === 3){
        eleccionRival.src = "./img/Mounstruo piedra.png"
    }
})
const btnPelear = document.getElementById("btnPelear")
btnPelear.addEventListener("click", ()=>{
    alert("Combate iniciado")
})
const btnReelegir = document.getElementById("btnReelegir")
btnReelegir.addEventListener("click", ()=>{
    location.reload()
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

//---------------FUNCIONES------------------

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let mounstruoAleatorio = numeroAleatorio(1, 3)



