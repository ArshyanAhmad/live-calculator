const inputNumber = document.querySelectorAll('.input')
const inputValue = document.querySelector('#inbox')
const deleteButton = document.querySelector('.delete')
const resultButton = document.querySelector('.result')
const allClear = document.querySelector('.ac')


deleteButton.addEventListener('click', () => {
    inputValue.value = inputValue.value.slice(0, -1)
})

allClear.addEventListener('click', () => {
    inputValue.value = ''
})

inputNumber.forEach((number) => {
    number.addEventListener('click', () => {
        let valueStore = number.innerText;
        inputValue.value += valueStore
    })
})

resultButton.addEventListener('click', () => {
    let evaluate = eval(inputValue.value)
    inputValue.value = evaluate;
})


