// EVENTO DE SCROLL REVEAL
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
});
//HOME
ScrollReveal().reveal('.name-scroll', { delay: 200 });
ScrollReveal().reveal('.about-scroll', { delay: 200 });
ScrollReveal().reveal('.you-about', { delay: 300 });
ScrollReveal().reveal('.dev', { delay: 200 });

//ABOUT
ScrollReveal().reveal('.p1', { delay: 400 });
ScrollReveal().reveal('.p2', { delay: 500 });
ScrollReveal().reveal('.p3', { delay: 600 });
ScrollReveal().reveal('.p4', { delay: 700 });

//PROJETOS
ScrollReveal().reveal('.box-scroll', { delay: 100 });
ScrollReveal().reveal('.box-scroll1', { delay: 200 });
ScrollReveal().reveal('.box-scroll2', { delay: 400 });
ScrollReveal().reveal('.box-scroll3', { delay: 600 });
ScrollReveal().reveal('.box-scroll4', { delay: 800 });
ScrollReveal().reveal('.box-scroll5', { delay: 1000 });
ScrollReveal().reveal('.box-scroll6', { delay: 1200 });
ScrollReveal().reveal('.box-scroll7', { delay: 1400 });
ScrollReveal().reveal('.box-scroll8', { delay: 1600 });

//HABILIDADES
ScrollReveal().reveal('.eventos', { delay: 100 });
ScrollReveal().reveal('.html', { delay: 300 });
ScrollReveal().reveal('.css', { delay: 500 });
ScrollReveal().reveal('.js', { delay: 700 });
ScrollReveal().reveal('.c', { delay: 900 });
ScrollReveal().reveal('.sass', { delay: 1100 });
ScrollReveal().reveal('.python', { delay: 1300 });
ScrollReveal().reveal('.material', { delay: 1500 });
ScrollReveal().reveal('.next', { delay: 1700 });

//SERVIÇOS
ScrollReveal().reveal('.services-h2', { delay: 100 });
ScrollReveal().reveal('.box-services1', { delay: 200 });
ScrollReveal().reveal('.box-services2', { delay: 400 });
ScrollReveal().reveal('.box-services3', { delay: 600 });
ScrollReveal().reveal('.box-services4', { delay: 800 });

//CONTATOS
ScrollReveal().reveal('.sociais-scroll', { delay: 100 });
ScrollReveal().reveal('.sociais-scroll1', { delay: 200 });
ScrollReveal().reveal('.sociais-scroll2', { delay: 300 });
ScrollReveal().reveal('.sociais-scroll3', { delay: 400 });
ScrollReveal().reveal('.sociais-scroll4', { delay: 500 });
ScrollReveal().reveal('.sociais-scroll5', { delay: 600 });
ScrollReveal().reveal('.sociais-scroll6', { delay: 700 });




//EVENTOS DE MOUSE

// DECLARANDO AS VARIASVEIS DOS BOXES
let  html = document.querySelector('.html') 
let css = document.querySelector('.css')
let js = document.querySelector('.js')
let c = document.querySelector('.c')
let sass = document.querySelector('.sass')
let python = document.querySelector('.python')
let material = document.querySelector('.material')
let next = document.querySelector('.next')
let evento = document.querySelector('.evento')

//ADICIONANDO EVENTOS
html.addEventListener('mouseenter', entrarHtml)
html.addEventListener('mouseout', sairHtml)
css.addEventListener('mouseenter', entrarCss)
css.addEventListener('mouseout', sairCss)
js.addEventListener('mouseenter', entrarJs)
js.addEventListener('mouseout', sairJs)
c.addEventListener('mouseenter', entrarC)
c.addEventListener('mouseout', sairC)
sass.addEventListener('mouseenter', entrarSass)
sass.addEventListener('mouseout', sairSass)
python.addEventListener('mouseenter', entrarPython)
python.addEventListener('mouseout', sairPython)
material.addEventListener('mouseenter', entrarMaterial)
material.addEventListener('mouseout', sairMaterial)
next.addEventListener('mouseenter', entrarNext)
next.addEventListener('mouseout', sairNext)

//DECLARANDO FUNCTIONS
function entrarHtml(){
evento.innerText = 'O HTML é a base de todo sistema web, é com ele que adicionamos em nossa página os Textos, Imagens, Formulários, Vídeos e etc.'
}
function sairHtml(){
evento.innerText = "passe o cursor no card para ler"
}
function entrarCss(){
evento.innerText = 'Com o CSS adicionamos estilos em nossa página: Cores, Tamanhos, Posicionamentos Sombras, Grids, Efeitos, Animações e etc.'
}
function sairCss(){
evento.innerText = "passe o cursor no card para ler"
}
function entrarJs(){
evento.innerText = 'Com o Javascript as possibilidades são imensas, validar formularios, processar dados, manipular elementos na tela, consultar APIs, etc.'
}
function sairJs(){
evento.innerText = "passe o cursor no card para ler"
}
function entrarC(){
evento.innerText = 'O React é uma biblioteca Javascript desenvolvida pelos engenheiros do Facebook com o foco em criar interfaces de usuário. É atualmente a biblioteca mais requisitada no mercado.'
}
function sairC(){
evento.innerText = "passe o cursor no card para ler"
}
function entrarSass(){
evento.innerText = 'O SASS é uma linguagem de extensão ao CSS, com ele vamos simplificar a escrita de CSS, além de ganhar mais dinamismo em nossas folhas de estil'
}
function sairSass(){
evento.innerText = "passe o cursor no card para ler"
}
function entrarPython(){
evento.innerText = 'Redux é uma biblioteca JavaScript para gerenciar o estado da aplicação é similar e inspirada pela arquitetura Flux do Facebook, ela pode ser utilizada com o React ou outras bibliotecas JavaScript.'
}
function sairPython(){
evento.innerText = "passe o cursor no card para ler"
}
function entrarMaterial(){
evento.innerText = 'Biblioteca de componentes React para um desenvolvimento ágil e fácil. O Material.ui é usado por grande empresas como Nasa, Walmart, Netflix, Amazon, Spotify, entre outras.'
}
function sairMaterial(){
evento.innerText = "passe o cursor no card para ler"
}
function entrarNext(){
evento.innerText = 'O Next.js é o framework mais adotado pela comunidade do React. O seu maior objetivo é tornar nossa aplicação React mais performática e permitir a indexação do conteúdo da página pelos motores de busca.'
}
function sairNext(){
evento.innerText = "passe o cursor no card para ler"
}
