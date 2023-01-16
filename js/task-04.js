const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')
const valueRef = document.querySelector("#value")
let counterValue = 0

const onDecrement = () => {
    counterValue -= 1
    valueRef.textContent = counterValue.toString()
}
const onIncrement = () => {
    counterValue += 1
    valueRef.textContent = counterValue.toString()
}

decrementBtn.addEventListener("click", onDecrement)
incrementBtn.addEventListener("click", onIncrement)
