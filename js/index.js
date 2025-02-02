const iconeMenu = document.getElementById('icone-menu')
const navegacaoMenu = document.getElementById('ul-nav-header')
const headerShadow = document.getElementById('header')
const linksNavbar = document.querySelectorAll('.links-navegacao-header')
let menuAberto = false

iconeMenu.addEventListener('click', (e)=> {
  e.stopPropagation();
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

document.addEventListener('click', (event) => {
  if (!navegacaoMenu.contains(event.target) && !iconeMenu.contains(event.target)) {
    if (menuAberto) {
      navegacaoMenu.classList.remove('active')
      iconeMenu.innerHTML = '<i class="fa-solid fa-bars"></i>'
      menuAberto = false
    }
  }
})

linksNavbar.forEach(link => {
  link.addEventListener('click', () => {
    if (menuAberto) {
      navegacaoMenu.classList.remove('active')
      iconeMenu.innerHTML = '<i class="fa-solid fa-bars"></i>'
      menuAberto = false
    }
  })
})

let swiper = new Swiper(".swiper", {
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
  })

  
const perguntaFrequente = document.querySelectorAll('.pergunta')
const respostaFrequente = document.querySelectorAll('.paragrafo-resposta')
const setaEstado = document.querySelectorAll('.seta-estado')

perguntaFrequente.forEach((pergunta, index) => {
  pergunta.addEventListener('click', () => {
    const resposta = respostaFrequente[index]
    const seta = setaEstado[index]  

    if (resposta.style.display === 'block') {
      seta.innerHTML = '<i class="fa-solid fa-caret-right"></i>'
      resposta.style.display = 'none'
    } else {
      seta.innerHTML = '<i class="fa-solid fa-sort-down"></i>'
      resposta.style.display = 'block'
    }
  })
})
