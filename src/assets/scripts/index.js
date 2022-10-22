// https://stackblitz.com/edit/web-platform-jaa2ij?embed=1&file=index.html&hideExplorer=1&hideNavigation=1

const btnClicked = e => {
    const stackBlitz = e.target.dataset.stackblitz

    if (stackBlitz) {
        const iframe = document.querySelector('iframe')
        const container = iframe.parentElement
        
        container.classList.remove('pointer-events-none', 'opacity-0')
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const btns = Array.from(document.querySelectorAll('article button'))
    btns.forEach(btn => btn.addEventListener('click', btnClicked))

    document.querySelector('iframe').src = `https://stackblitz.com/edit/${btns[0].dataset.stackblitz}?embed=1&hideExplorer=1&hideNavigation=1&hideDevTools=1&view=preview`

    document.querySelector('iframe').parentElement.addEventListener('click', e => {
        e.target.classList.add('opacity-0')
        e.target.classList.add('pointer-events-none')
    })

    const articles = Array.from(document.querySelectorAll('article'))
    articles.forEach(article => article.addEventListener('mouseenter', () => {
        const btn = article.querySelector('button')
        const stackBlitz = btn.dataset.stackblitz

        if (document.querySelector('iframe').src.includes(stackBlitz) == false) {
            document.querySelector('iframe').classList.add('opacity-0')
            document.querySelector('iframe').src = `https://stackblitz.com/edit/${stackBlitz}?embed=1&hideExplorer=1&hideNavigation=1&hideDevTools=1&view=preview`
        }
    }))

    document.querySelector('iframe').onload = e => {
        e.target.classList.remove('opacity-0')
    }
})