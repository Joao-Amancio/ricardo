// Evento de clique no ícone do menu
document.getElementById("menu-icon").addEventListener("click", function () {
  this.classList.toggle("open")
  var menu = document.getElementById("menu")
  menu.classList.toggle("open")
  if (menu.classList.contains("open")) {
    menu.style.maxHeight = menu.scrollHeight + "px"
  } else {
    menu.style.maxHeight = 0
  }
})

// Evento de clique em cada item do menu
document.querySelectorAll(".menu ul li a").forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault()
    var sectionId = this.getAttribute("href").substring(1)
    var targetSection = document.getElementById(sectionId)

    // Esconde todas as seções
    document.querySelectorAll(".w50").forEach((section) => {
      section.style.display = "none"
    })

    // Mostra a seção alvo
    targetSection.style.display = "block"

    // Adiciona a classe 'active' à caixa principal
    document.getElementById("main-boxes").classList.add("active")

    // Fecha o menu quando um item é clicado
    var menu = document.getElementById("menu")
    var menuIcon = document.getElementById("menu-icon")
    if (menu.classList.contains("open")) {
      menu.classList.remove("open")
      menuIcon.classList.remove("open")
      menu.style.maxHeight = 0
    }
  })
})

// Evento de carregamento da página
window.addEventListener("load", function () {
  document.querySelectorAll(".nav").forEach((section) => {
    section.style.display = "block"
  })
  document.getElementById("main-boxes").classList.remove("active")
})

// Evento de redimensionamento da janela
window.addEventListener("resize", function () {
  var menu = document.getElementById("menu")
  var menuIcon = document.getElementById("menu-icon")
  if (window.innerWidth > 768) {
    menu.style.maxHeight = null
    menu.classList.remove("open")
    menuIcon.classList.remove("open")
  } else {
    menu.style.maxHeight = 0
  }
})

// Fecha o menu quando o usuário clica fora dele
window.addEventListener("click", function (event) {
  var menu = document.getElementById("menu")
  var menuIcon = document.getElementById("menu-icon")
  var isMenuOpen = menu.classList.contains("open")
  // Verifica se o clique ocorreu fora do menu e do ícone do menu, e se o menu está aberto
  if (
    isMenuOpen &&
    !menu.contains(event.target) &&
    !menuIcon.contains(event.target)
  ) {
    menu.classList.remove("open") // Remove a classe 'open' do menu
    menuIcon.classList.remove("open") // Remove a classe 'open' do ícone do menu
    menu.style.maxHeight = 0 // Fecha o menu definindo a altura máxima como 0
  }
})

// silde 1
let slideIndex = 0
const slides = document.getElementsByClassName("slide")

showSlides()

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }

  slideIndex++
  if (slideIndex > slides.length) {
    slideIndex = 1
  }

  slides[slideIndex - 1].style.display = "block"
  setTimeout(showSlides, 5000) // Muda a cada 5 segundos
}

function plusSlides(n) {
  slideIndex += n
  if (slideIndex > slides.length) {
    slideIndex = 1
  } else if (slideIndex < 1) {
    slideIndex = slides.length
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }

  slides[slideIndex - 1].style.display = "block"
}

// Touch-screen and mouse support
/*  let touchStartX = 0
let touchEndX = 0

function handleTouchStart(event) {
  touchStartX = event.changedTouches[0].screenX
}

function handleTouchMove(event) {
  touchEndX = event.changedTouches[0].screenX
}

function handleTouchEnd() {
  if (touchEndX < touchStartX) {
    // Swipe left
    plusSlides(1)
  } else if (touchEndX > touchStartX) {
    // Swipe right
    plusSlides(-1)
  }
}

function handleMouseDown(event) {
  touchStartX = event.screenX
}

function handleMouseUp(event) {
  touchEndX = event.screenX
  if (touchEndX < touchStartX) {
    // Swipe left
    plusSlides(1)
  } else if (touchEndX > touchStartX) {
    // Swipe right
    plusSlides(-1)
  }
}

document.addEventListener("touchstart", handleTouchStart, false)
document.addEventListener("touchmove", handleTouchMove, false)
document.addEventListener("touchend", handleTouchEnd, false)

document.addEventListener("mousedown", handleMouseDown, false)
document.addEventListener("mouseup", handleMouseUp, false) */

// slides 2
document.addEventListener("DOMContentLoaded", function () {
  console.log("Initializing Swiper...")
  const swiper = new Swiper(".swiper-container", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    spaceBetween: 1,
    grabCursor: true,
  })
  console.log("Swiper initialized:", swiper)
})

// Evento de clique para a seta "Voltar ao topo"
document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementById("back-to-top")

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = "block"
    } else {
      backToTopButton.style.display = "none"
    }
  })

  backToTopButton.addEventListener("click", function (event) {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
  })
})

///////////////////////

//animaçoes de div

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-in")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
        }
      })
    },
    {
      threshold: 0.1,
    }
  )

  sections.forEach((section) => {
    observer.observe(section)
  })
})

/////////////////////////////////////
/*
 let currentIndex = 0
 let interval

 function startCarousel() {
   interval = setInterval(showNextImage, 3000)
 }

 function showNextImage() {
   const imagesContainer = document.querySelector(".carousel-images")
   const totalImages = document.querySelectorAll(".carousel-images img").length
   currentIndex = (currentIndex + 1) % totalImages
   imagesContainer.style.transform = `translateX(-${
     (currentIndex * 100) / totalImages
   }%)`
 }

 function pauseCarousel() {
   clearInterval(interval)
 }

 function resumeCarousel() {
   startCarousel()
 }

 document
   .querySelector(".carousel")
   .addEventListener("mouseenter", pauseCarousel)
 document
   .querySelector(".carousel")
   .addEventListener("mouseleave", resumeCarousel)
 document
   .querySelector(".carousel")
   .addEventListener("touchstart", pauseCarousel)
 document
   .querySelector(".carousel")
   .addEventListener("touchend", resumeCarousel)

 startCarousel()  */

let currentIndex = 0
let interval
let startX = 0
let isDragging = false

// Função para iniciar o carrossel
function startCarousel() {
  interval = setInterval(showNextVideo, 8000) // Muda o slide a cada 5 segundos
}

// Função para mostrar o próximo vídeo
function showNextVideo() {
  const videosContainer = document.querySelector(".carousel-videos")
  const totalVideos = document.querySelectorAll(".carousel-videos video").length

  const currentVideo = document.querySelectorAll(".carousel-videos video")[
    currentIndex
  ]
  currentVideo.pause() // Pausa o vídeo atual

  currentIndex = (currentIndex + 1) % totalVideos

  const nextVideo = document.querySelectorAll(".carousel-videos video")[
    currentIndex
  ]
  nextVideo.currentTime = 0 // Reinicia o próximo vídeo
  nextVideo.play() // Reproduz o próximo vídeo

  videosContainer.style.transform = `translateX(-${
    (currentIndex * 100) / totalVideos
  }%)`
}

// Função para pausar o carrossel
function pauseCarousel() {
  clearInterval(interval)
  const currentVideo = document.querySelectorAll(".carousel-videos video")[
    currentIndex
  ]
  currentVideo.pause() // Pausa o vídeo atual
}

// Função para retomar o carrossel
function resumeCarousel() {
  const currentVideo = document.querySelectorAll(".carousel-videos video")[
    currentIndex
  ]
  currentVideo.play() // Reproduz o vídeo atual
  startCarousel()
}

// Função para iniciar a manipulação do toque
function handleTouchStart(event) {
  startX = event.touches[0].clientX
  isDragging = true
  pauseCarousel()
}

// Função para manipular o movimento do toque
function handleTouchMove(event) {
  if (!isDragging) return
  const currentX = event.touches[0].clientX
  const diffX = startX - currentX

  if (diffX > 50) {
    showNextVideo()
    isDragging = false
  } else if (diffX < -50) {
    showPreviousVideo()
    isDragging = false
  }
}

// Função para finalizar a manipulação do toque
function handleTouchEnd() {
  isDragging = false
  resumeCarousel()
}

// Função para mostrar o vídeo anterior
function showPreviousVideo() {
  const videosContainer = document.querySelector(".carousel-videos")
  const totalVideos = document.querySelectorAll(".carousel-videos video").length

  const currentVideo = document.querySelectorAll(".carousel-videos video")[
    currentIndex
  ]
  currentVideo.pause() // Pausa o vídeo atual

  currentIndex = (currentIndex - 1 + totalVideos) % totalVideos

  const previousVideo = document.querySelectorAll(".carousel-videos video")[
    currentIndex
  ]
  previousVideo.currentTime = 0 // Reinicia o vídeo anterior
  previousVideo.play() // Reproduz o vídeo anterior

  videosContainer.style.transform = `translateX(-${
    (currentIndex * 100) / totalVideos
  }%)`
}

// Adiciona event listeners para pausa e retoma o carrossel
document
  .querySelector(".carousel")
  .addEventListener("mouseenter", pauseCarousel)
document
  .querySelector(".carousel")
  .addEventListener("mouseleave", resumeCarousel)
document
  .querySelector(".carousel")
  .addEventListener("touchstart", handleTouchStart)
document
  .querySelector(".carousel")
  .addEventListener("touchmove", handleTouchMove)
document.querySelector(".carousel").addEventListener("touchend", handleTouchEnd)

// Função para iniciar a reprodução de todos os vídeos automaticamente
function autoPlayVideos() {
  const videos = document.querySelectorAll(".carousel-videos video")
  videos.forEach((video) => {
    video.play().catch((error) => {
      console.log("Erro ao tentar reproduzir o vídeo automaticamente: ", error)
    })
  })
}

// Inicia o carrossel e a reprodução dos vídeos ao carregar a página
window.onload = function () {
  autoPlayVideos()
  startCarousel()
}

/////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  const carouselImages = document.querySelector(".carousel2-images")
  const images = document.querySelectorAll(".carousel2-images img")
  const totalImages = images.length
  let index = 0

  function showNextImage() {
    index++
    if (index >= totalImages) {
      index = 0
    }
    updateCarousel()
  }

  function showPreviousImage() {
    index--
    if (index < 0) {
      index = totalImages - 1
    }
    updateCarousel()
  }

  function updateCarousel() {
    const offset = -index * 100
    carouselImages.style.transform = `translateX(${offset}%)`
  }

  // Optional: Automatic sliding
  setInterval(showNextImage, 3000) // Change image every 3 seconds

  // Optional: Add navigation buttons
  /*
  const nextButton = document.createElement("button")
  nextButton.innerHTML = "Next"
  nextButton.style.position = "absolute"
  nextButton.style.top = "50%"
  nextButton.style.right = "10px"
  nextButton.style.transform = "translateY(-50%)"
  nextButton.addEventListener("click", showNextImage)

  const prevButton = document.createElement("button")
  prevButton.innerHTML = "Previous"
  prevButton.style.position = "absolute"
  prevButton.style.top = "50%"
  prevButton.style.left = "10px"
  prevButton.style.transform = "translateY(-50%)"
  prevButton.addEventListener("click", showPreviousImage)

  document.querySelector(".carousel2").appendChild(nextButton)
  document.querySelector(".carousel2").appendChild(prevButton) */
})

/////////////////////////////////////

function moveBackward(current, slider) {
  let next
  if (current === 1) {
    next = 3
  } else if (current === 2) {
    next = 1
  } else if (current === 3) {
    next = 2
  }
  document.getElementById(slider + "-item-" + next).checked = true
}