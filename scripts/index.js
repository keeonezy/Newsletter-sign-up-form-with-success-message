const formGroup = document.querySelector(".newsletter_group");
const submitButton = document.querySelectorAll(".newsletter__button");
const formEmail = addEmail;
const input = formEmail.email;

function formSuccess() {
    // go
}

function emailValidate(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

submitButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    const email = input.value.trim();

    if(emailValidate()) {
        formSuccess()
    }
})