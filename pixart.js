const setColor = document.querySelector('#set-color')
const brush = document.querySelector('.brush')
const inputColor = document.querySelector('#color-field')

setColor.addEventListener('click' , event => {
event.preventDefault();
let inputColor = document.querySelector('#color-field').value
brush.style.backgroundColor = inputColor
})

inputColor.addEventListener('keypress' , event => {
    if(event.key === 'Enter') {
        event.preventDefault()
        document.querySelector('.brush').style.backgroundColor = inputColor.value
        }
    })

for(let i = 0 ; i <= 10000 ; i ++) {
    let square = document.createElement('div')
    square.className = "square"
    document.body.appendChild(square)
}

const squareBoard = document.querySelectorAll('.square')

squareBoard.forEach(square => {
    square.addEventListener('mouseover', () =>
        square.style.backgroundColor = brush.style.backgroundColor
    )
})

