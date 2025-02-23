// menu responsivo 
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

// biblioteca slider de imagens
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

  
// faqs
const perguntaFrequente = document.querySelectorAll('.pergunta')
const respostaFrequente = document.querySelectorAll('.paragrafo-resposta')
const setaEstado = document.querySelectorAll('.seta-estado')
let faqAberto = false

perguntaFrequente.forEach((pergunta, index) => {
  pergunta.addEventListener('click', () => {
    const resposta = respostaFrequente[index]
    const seta = setaEstado[index]  

    if (faqAberto) {
      seta.innerHTML = '<i class="fa-solid fa-caret-right"></i>'
      resposta.classList.remove('active')
    } else {
      seta.innerHTML = '<i class="fa-solid fa-sort-down"></i>'
      resposta.classList.add('active')
    }
    faqAberto = !faqAberto
  })
})

// modo noturno 
const btnLightMode = document.getElementById('btnLightMode')
const body = document.getElementById('body')
const textLightMode = document.querySelectorAll('.textLightMode')
let lightModeAtivo = false

btnLightMode.addEventListener('click', ()=> {
  if (!lightModeAtivo) {
    btnLightMode.innerHTML = '<i class="fa-regular fa-moon"></i>'
    body.classList.add('active')
    textLightMode.forEach((texto) => {
    texto.classList.add('active')
  })
  } else {
    btnLightMode.innerHTML = '<i class="fa-regular fa-sun"></i>'
    body.classList.remove('active')
    textLightMode.forEach((texto) => {
    texto.classList.remove('active')
  })}
  lightModeAtivo = !lightModeAtivo
})

