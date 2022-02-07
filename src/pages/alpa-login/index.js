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
        console.log('Submit the username & password.')
    })
})
