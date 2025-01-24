const iconeMenu = document.getElementById('icone-menu')
const navegacaoMenu = document.getElementById('ul-nav-header')
const headerShadow = document.getElementById('header')
const linksNavbar = document.querySelectorAll('.links-navegacao-header')
let menuAberto = false

iconeMenu.addEventListener('click', ()=> {
  if (menuAberto) {
    navegacaoMenu.classList.remove('active')
    iconeMenu.innerHTML = '<i class="fa-solid fa-bars"></i>'
  } 
  else {
    navegacaoMenu.classList.add('active')
    iconeMenu.innerHTML = '<i class="fa-solid fa-x"></i>'
  }
  menuAberto = !menuAberto
})

var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
  });