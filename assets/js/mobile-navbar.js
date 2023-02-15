// DECLARANDO AS VARIAVEIS 
let menuResponsivo = document.querySelector(".header")
let menuHambuguer = document.querySelector(".menu")
let ancoras = document.querySelectorAll(".nav-list li a")

// ADICIONANDO OS EVENTOS 
menuHambuguer.addEventListener("click",menu)
ancoras.forEach((ancora)=>{
    ancora.addEventListener('click',menu)   
})

// DECLARANDO A FUNÇÃO
function menu(){
    menuHambuguer.classList.toggle("active")
    menuResponsivo.classList.toggle("active")
}







