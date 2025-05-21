//----------------------INPUTS--------------------

const mounstruoFuego = document.getElementById("mounstruoFuego")
const mounstruoAgua = document.getElementById("mounstruoAgua")
const mounstruoTierra = document.getElementById("mounstruoTierra")
const portada = document.getElementById("portada")
const seccionElegirMounstruo = document.getElementById("elegirMounstruo")
const seccionPreCombate = document.getElementById("preCombate")
const seccionCombate = document.getElementById("combate")

seccionPreCombate.style.display = "none"
seccionCombate.style.display = "none"
seccionElegirMounstruo.style.display = "none"

//-------------------------BOTONES------------------
let btnJugar = document.getElementById("btnJugar")
btnJugar.addEventListener("click", ()=>{
    portada.style.display = "none"
    seccionElegirMounstruo.style.display = "block"
})
const botones = document.getElementById("botones")
const btnConfirmar = document.getElementById("btnConfirmar")
btnConfirmar.addEventListener("click", ()=>{
    seccionElegirMounstruo.style.display = "none"
    seccionPreCombate.style.display = "block"
    usuario()
    rival()
})
const btnPelear = document.getElementById("btnPelear")
btnPelear.addEventListener("click", ()=>{
    seccionPreCombate.style.display = "none"
    seccionCombate.style.display = "block"
    usuario()
})
const btnReelegir = document.getElementById("btnReelegir")
btnReelegir.addEventListener("click", ()=>{
    location.reload()
})
const btnPiedra = document.createElement("button")
btnPiedra.textContent = "Piedra"
btnPiedra.classList.add("btn", "btn-dark")
const btnPapel = document.createElement("button")
btnPapel.textContent = "Papel"
btnPapel.classList.add("btn", "btn-dark")
const btnTijera = document.createElement("button")
btnTijera.textContent ="Tijera"
btnTijera.classList.add("btn", "btn-dark")
botones.appendChild(btnPiedra)
botones.appendChild(btnPapel)
botones.appendChild(btnTijera)

//----------------------IMG----------------------

const eleccionUsuarioPre = document.createElement("img")
const eleccionRivalPre = document.createElement("img")
const eleccionUsuarioCombate = document.createElement("img")
const eleccionRivalCombate = document.createElement("img")


const figureUsuarioPre = document.getElementById("figureUsuarioPre")
const figureRivalPre = document.getElementById("figureRivalPre")
const figureUsuarioCombate = document.getElementById("figureUsuarioCombate")
const figureRivalCombate = document.getElementById("figureRivalCombate")

eleccionUsuarioPre.classList.add("w-75")
eleccionRivalPre.classList.add("w-75")
eleccionUsuarioCombate.classList.add("w-75")
eleccionRivalCombate.classList.add("w-75")

figureUsuarioPre.appendChild(eleccionUsuarioPre)
figureRivalPre.appendChild(eleccionRivalPre)
figureUsuarioCombate.appendChild(eleccionUsuarioCombate)
figureRivalCombate.appendChild(eleccionRivalCombate)


//---------------FUNCIONES------------------

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let mounstruoAleatorio = numeroAleatorio(1, 3)

function usuario(){
    if (mounstruoFuego.checked === true){
        eleccionUsuarioPre.src = "./img/Mounstruo fuego.png"
        eleccionUsuarioCombate.src = "./img/Mounstruo fuego.png"
        
    } else if (mounstruoAgua.checked === true){
        eleccionUsuarioPre.src = "./img/Monstruo agua.png"
        eleccionUsuarioCombate.src = "./img/Monstruo agua.png"
        
    } else if (mounstruoTierra.checked === true){
        eleccionUsuarioPre.src = "./img/Mounstruo piedra.png"
        eleccionUsuarioCombate.src = "./img/Mounstruo piedra.png"
        
    }
}

function rival(){
    mounstruoAleatorio = numeroAleatorio(1, 3)
    if (mounstruoAleatorio === 1){
        eleccionRivalPre.src = "./img/Mounstruo fuego.png"
        eleccionRivalCombate.src = "./img/Mounstruo fuego.png"
    } else if (mounstruoAleatorio === 2){
        eleccionRivalPre.src = "./img/Monstruo agua.png"
        eleccionRivalCombate.src = "./img/Monstruo agua.png"
    } else if (mounstruoAleatorio === 3){
        eleccionRivalPre.src = "./img/Mounstruo piedra.png"
        eleccionRivalCombate.src = "./img/Mounstruo piedra.png"
    }
}

//-------------RESULTADO PARCIAL-------------

const ulUsuario = document.getElementById("ulUsuario")
const ulRival = document.getElementById("ulRival")
const UlresultadoParcial = document.getElementById("UlResultadoParcial")


let ataqueAleatorio = numeroAleatorio(1,3)
let ataqueUsuario 
let ataqueEnemigo

btnPiedra.addEventListener("click", ()=>{
    ataqueUsuario = "piedra"
    combate()
})

btnPapel.addEventListener("click", ()=>{
    ataqueUsuario = "papel"
    combate()
})

btnTijera.addEventListener("click", ()=>{
    ataqueUsuario = "tijera"
    combate()
})


let vidasUsuario = 3 
let vidasRival = 3

function combate(){

    generarAtaqueAleatorio()

    let liUsuario = document.createElement("li")
    liUsuario.classList.add("list-group-item")
    liUsuario.textContent = ataqueUsuario
    ulUsuario.appendChild(liUsuario)

    let liResultadoParcial = document.createElement("li")
    liResultadoParcial.classList.add("list-group-item")
    UlresultadoParcial.appendChild(liResultadoParcial)

    let liRival = document.createElement("li")
    liRival.classList.add("list-group-item")
    liRival.textContent = ataqueEnemigo
    ulRival.appendChild(liRival)

    

    if (ataqueUsuario === ataqueEnemigo){
        liUsuario.textContent = ataqueUsuario
        liRival.textContent = ataqueEnemigo
        liResultadoParcial.textContent = "-"
        
        
    } else if (ataqueUsuario === "piedra" && ataqueEnemigo === "tijera"){
        liUsuario.textContent = ataqueUsuario
        liRival.textContent = ataqueEnemigo
        liResultadoParcial.textContent = "V"
        liResultadoParcial.classList.add("bg-success")
        vidasRival--
        vidas()
    } else if (ataqueUsuario === "papel" && ataqueEnemigo === "piedra"){
        liUsuario.textContent = ataqueUsuario
        liRival.textContent = ataqueEnemigo
        liResultadoParcial.textContent = "V"
        liResultadoParcial.classList.add("bg-success")
        vidasRival--
        vidas()
    } else if (ataqueUsuario === "tijera" && ataqueEnemigo === "papel"){
        liUsuario.textContent = ataqueUsuario
        liRival.textContent = ataqueEnemigo
        liResultadoParcial.textContent = "V"
        liResultadoParcial.classList.add("bg-success")
        vidasRival--
        vidas()
    } else{
        liUsuario.textContent = ataqueUsuario
        liRival.textContent = ataqueEnemigo
        liResultadoParcial.textContent = "P"
        liResultadoParcial.classList.add("bg-danger")
        vidasUsuario--
        vidas()
        
    }

    finDelJuego()
}

function generarAtaqueAleatorio(){
    ataqueAleatorio = numeroAleatorio(1, 3)
    if (ataqueAleatorio === 1){
        ataqueEnemigo = "piedra"
    } else if(ataqueAleatorio === 2){
        ataqueEnemigo = "papel"
    } else if (ataqueAleatorio === 3){
        ataqueEnemigo = "tijera"
    }
}

let resultadoFinal = document.getElementById("resultadoFinal")
let reiniciar = document.getElementById("reiniciar")
let btnReiniciar = document.createElement("button")
btnReiniciar.classList.add("btn", "btn-outline-dark")
btnReiniciar.textContent = "Volver a Jugar"
btnReiniciar.addEventListener("click", ()=>{
    location.reload()
})

let contenedorVidasUsuario = document.getElementById("contenedorVidasUsuario")
let contenedorVidasRival = document.getElementById("contenedorVidasRival")

function vidas(){
    contenedorVidasUsuario.textContent = `Vidas: ${vidasUsuario}`
    contenedorVidasRival.textContent = `Vidas: ${vidasRival}`
}

function finDelJuego(){
    if(vidasUsuario === 0){
    resultadoFinal.textContent = "PERDISTE"
    resultadoFinal.classList.add("text-danger")
    btnPiedra.disabled = true
    btnPapel.disabled = true
    btnTijera.disabled = true
    reiniciar.appendChild(btnReiniciar)
} else if (vidasRival === 0){
    resultadoFinal.textContent = "GANASTE"
    resultadoFinal.classList.add("text-success")
    btnPiedra.disabled = true
    btnPapel.disabled = true
    btnTijera.disabled = true
    reiniciar.appendChild(btnReiniciar)
}
}



//----------SECCIONES------------



