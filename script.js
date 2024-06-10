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

/////////

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

/////

