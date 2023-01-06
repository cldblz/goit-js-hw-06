const rangeRef = document.querySelector("#font-size-control")
const textRef = document.querySelector("#text")

textRef.style.fontSize = `${rangeRef.value}px`

const onInput = (event) => {
    textRef.style.fontSize = `${event.currentTarget.value}px`
}

rangeRef.addEventListener("input", onInput)