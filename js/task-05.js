const inputRef = document.querySelector("#name-input")
const outputRef = document.querySelector("#name-output")

const onInput = (event) => {
    outputRef.textContent = event.currentTarget.value

    if (event.currentTarget.value === "") {
        outputRef.textContent = "Anonymous"
    }
}

inputRef.addEventListener("input", onInput)
