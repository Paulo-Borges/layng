/* abre e fecha o menu quando clicar no icone  */

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function(){
        nav.classList.toggle('show')
    })
}

/* quando clicar no item do menu esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

/* mudar o header da pagina quando der scroll  */

const  header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function(){
    if(window.scrollY >= navHeight) {
        header.classList.add('scroll')
    }else {
        header.classList.remove('scroll')
    }
})

/*----------Testimonials slider swiper ------*/
const swiper = new swiper('.swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keybord: true
})

/* Scrollreveal = mostrar elementos quando dar scrol*/
const scrollReveal =scrollReveal({
    origin:'top',
    distance:'30px',
    duration:700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links
    `,
    {interval:100}
    
    )