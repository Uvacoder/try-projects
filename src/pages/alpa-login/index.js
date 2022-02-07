window.addEventListener('DOMContentLoaded', () => {
    const username = document.querySelector('#username')
    const password = document.querySelector('#password')
    const login = document.querySelector('#login')

    username.addEventListener('keyup', e => {
        if (e.keyCode == 13) password.focus()
    })

    password.addEventListener('keyup', e => {
        if (e.keyCode == 13) login.focus()
    })

    login.addEventListener('click', () => {
        const loader = login.querySelector('svg')
        const text = login.querySelector('span')

        loader.classList.remove('opacity-0')
        text.classList.add('opacity-0')

        setTimeout(() => {
            loader.classList.add('opacity-0')
            text.classList.remove('opacity-0')
        }, 1000)

        console.log('Submit the username & password.')
    })
})
