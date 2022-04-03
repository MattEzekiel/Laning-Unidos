const cards = document.querySelectorAll('.carta');

const setClasses = () => {
    const classes = ['left', 'active', 'right'];
    cards.forEach((card, index) => card.classList.add(classes[index]))
}


const changePositions = (e) => {
    const clickedCard = e.currentTarget
    const activeCard = document.querySelector('.carta.active')
    if(clickedCard.classList.contains('active')) return;
    const classesFrom = e.currentTarget.className
    clickedCard.className = activeCard.className
    activeCard.className = classesFrom
}

cards.forEach((card) => {
    card
        .addEventListener('click', changePositions)
})

setClasses();