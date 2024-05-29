document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]')
    const questions = document.querySelectorAll('[data-faq-question]')
    

    // faq section, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', openCloseAnswer)
    }
})

function openCloseAnswer(element) {
    const openClass = 'faq__questions__item--is-open'
    const fatherElement = element.target.parentNode

    fatherElement.classList.toggle(openClass)
}

function activeButtonRemove() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    }
}

function hideTabs() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}
