const observar = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('Mostrar')
        } else {
            entry.target.classList.remove('Mostrar')
        }
    })
})

const elements = document.querySelectorAll('.Fotos')

elements.forEach((element) => {
    observar.observe(element)
})
