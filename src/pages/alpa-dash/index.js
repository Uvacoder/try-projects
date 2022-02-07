window.addEventListener('DOMContentLoaded', () => {
    const createBtn = document.querySelector('#create')
    const loader = createBtn.querySelector('svg')
    const text = createBtn.querySelector('span')

    const input = document.querySelector('#quickCreate')

    const onSubmit = () => {
        if (Boolean(input.value) == false) return

        loader.classList.remove('opacity-0')
        text.classList.add('opacity-0')

        setTimeout(() => {
            loader.classList.add('opacity-0')
            text.classList.remove('opacity-0')
        }, 1000)

        console.log('Create a new short link.')
    }

    input.addEventListener('keyup', e => {
        if (e.keyCode == 13) {
            if (Boolean(e.target.value)) onSubmit()
        } else {
            if (Boolean(e.target.value)) {
                text.textContent = 'Quick create'
            } else {
                text.textContent = 'Full create'
            }
        }
    })

    createBtn.addEventListener('click', onSubmit)
})
