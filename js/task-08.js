const form = document.querySelector(".login-form")

const onSubmit = (event) => {
    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
    }

    const data = {
        email: email.value,
        password: password.value
    }

    console.log(data);
    event.currentTarget.reset();
}

form.addEventListener("submit", onSubmit);