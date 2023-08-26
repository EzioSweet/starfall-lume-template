const ham = document.querySelector('.navbar__hamburger')
const menu = document.querySelector('.navbar__mobile-links')
const darkToggleButtons = document.querySelectorAll('.dark-toggle')
function changeDarkToggleBtnIcon () {
    darkToggleButtons.forEach(btn => {
        if (btn.querySelector('img').src.indexOf('/static/img/moon.svg') !== -1) {
            btn.querySelector('img').src = "{{ '/static/img/sun.svg' | url }}"
        } else {
            btn.querySelector('img').src = "{{ '/static/img/moon.svg' | url }}"
        }
    })
}

if (
    localStorage.prefsDark === 'true' ||
    (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches &&
        localStorage.prefsDark !== 'false')
) {
    document.body.classList.add('dark')
    changeDarkToggleBtnIcon()
}

ham.addEventListener('click', () => {
    menu.classList.toggle('navbar__mobile-links--open')

    let prevState = JSON.parse(ham.getAttribute('aria-expanded'))
    ham.setAttribute('aria-expanded', !prevState)
})

darkToggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        changeDarkToggleBtnIcon()

        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark')
            localStorage.prefsDark = 'false'
        } else {
            document.body.classList.add('dark')
            localStorage.prefsDark = 'true'
        }

    })
})
