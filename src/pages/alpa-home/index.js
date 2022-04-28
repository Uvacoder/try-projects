window.addEventListener('DOMContentLoaded', () => {
    // handle mobile navigation
    const mobNavBtn = document.querySelector('#mobNavBtn')
    const mobNavContent = document.querySelector('#mobNavContent')

    let isOpen = false
    const states = {
        close: ['opacity-0', 'pointer-events-none'],
        open: ['opacity-100'],
    }
    mobNavBtn.addEventListener('click', () => {
        if (isOpen == false) {
            for (const className of states.close) {
                mobNavContent.classList.remove(className)
            }

            for (const className of states.open) {
                mobNavContent.classList.add(className)
            }

            mobNavBtn.classList.add('text-white')
            mobNavBtn.classList.remove('text-slate-800')

            mobNavBtn.querySelector('svg:nth-child(2)').classList.remove('hidden')
            mobNavBtn.querySelector('svg').classList.add('hidden')

            isOpen = true
        } else {
            for (const className of states.close) {
                mobNavContent.classList.add(className)
            }

            for (const className of states.open) {
                mobNavContent.classList.remove(className)
            }

            mobNavBtn.classList.add('text-slate-800')
            mobNavBtn.classList.remove('text-white')

            mobNavBtn.querySelector('svg').classList.remove('hidden')
            mobNavBtn.querySelector('svg:nth-child(2)').classList.add('hidden')

            isOpen = false
        }
    })
})
