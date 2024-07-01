const buttonToTop = document.getElementById('button-to-top')
const divButtonToTop = document.getElementById('div-button-to-top')

function scrollToTop() {
    window.scrollTo({
        top: 0
    })
}

window.addEventListener('scroll', function() {
    if (this.scrollY > 0) {
        divButtonToTop.classList.remove('d-none')
    } else if (this.scrollY == 0) {
        divButtonToTop.classList.add('d-none')
    }
})

buttonToTop.addEventListener('click', scrollToTop)