let hamBurger = document.getElementById('ham-button')
let header = document.getElementById('header')

hamBurger.addEventListener('click', () => {
    console.log("Cliked");
    header.classList.toggle('header--visible')
})