let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")


let botao = document.querySelector(".info")

let modal = document.querySelector(".modal")


botaoSom.addEventListener("click", ligaSom)

function ligaSom(){
   video.muted =false
}

botao.addEventListener("click",mostarModal)
modal.addEventListener("click", esconderModal)

function mostarModal(){
   modal.style.display = "block"
}
function esconderModal(){
   modal.style.display = "none"
}





