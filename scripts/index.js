// const formEmail = document.forms.addEmail;
// const input = formEmail.email;



// основное окно слева
const formGroup = document.querySelector("newsletter_group");
// картинка справа
const mainImg = document.querySelector("newsletter__img");
// Кнопка сохранить email
const submitButton = document.querySelectorAll("newsletter__button");
// Инпут для заполнения email
const emailInput = document.querySelector("newsletter__input");
// Окно уапешного добавления email
const emailSuccess = document.querySelector("newslatter__group-thanks");
// Кнопка закрыть окнно успешного добавления email
const closeButtonDissmiss = document.querySelector("newsletter__button-dismiss")


function formSuccess() {
    emailSuccess.classList.add("newsletter_email-active")
    formGroup.style.display = "none";
    mainImg.style.display = "none";
}

function emailValidate(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

submitButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    const email = emailInput.value.trim();

    if (emailValidate()) {
        formSuccess()
    }
})

closeButtonDissmiss.addEventListener("click", () => {
    formGroup.style.display = "block";
    mainImg.style.display = "block";
})