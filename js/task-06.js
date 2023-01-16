const inputRef = document.querySelector("#validation-input")

const onBlur = (event) => {
    if (event.currentTarget.value.length === Number(inputRef.dataset.length)) {
        inputRef.classList.add("valid")

        if (inputRef.classList.contains("invalid")) {
            inputRef.classList.remove("invalid")
        }
    } else {
        inputRef.classList.add("invalid")
    }
}

inputRef.addEventListener("blur", onBlur)
