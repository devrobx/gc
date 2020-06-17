
let menuToggler = document.querySelector('.hamburger-menu')
let closeMenu = document.querySelector('.close-menu')
let body = document.querySelector('body')


menuToggler.addEventListener('click', () => {
    body.classList.toggle('open')

})

closeMenu.addEventListener('click', () => {
    body.classList.toggle('open')

})