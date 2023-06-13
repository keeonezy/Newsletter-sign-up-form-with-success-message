// const formEmail = document.forms.addEmail;
// const input = formEmail.email;



// основное окно слева
const container = document.querySelector(".newsletter_group");
console.log(container)
// картинка справа
const mainImg = document.querySelector(".newsletter__img");
console.log(mainImg)

// Инпут для заполнения email
const emailInput = document.querySelector(".newsletter__input");
console.log(emailInput)
// Поле для ошибки об инвалиде email
const invdalidEmail = document.querySelector(".newsletter__invalid-email");
console.log(invdalidEmail)
// Кнопка сохранить email
const submitButton = document.querySelector(".newsletter__button-submit");
console.log(submitButton)

// Окно уапешного добавления email
const groupEmailSuccess = document.querySelector(".newslatter__group-thanks");
console.log(groupEmailSuccess)
// Вывод email юзера в span
const emailUser = document.querySelector(".newsletter__email-user")
console.log(emailUser)
// Кнопка закрыть окнно успешного добавления email
const closeButtonDissmiss = document.querySelector(".newsletter__button-dismiss")
console.log(closeButtonDissmiss)


function formSuccess() {
    groupEmailSuccess.classList.add("newsletter_thanks_active");
    container.style.display = "none";
    mainImg.style.display = "none";
}

function emailValidate(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

submitButton.addEventListener("click", (evt) => {
    evt.preventDefault();
    const email = emailInput.value.trim();

    if (emailValidate(email)) {
        formSuccess()
        emailUser.innerText = email;
        emailInput.value = ""

        invdalidEmail.classList.remove("newsletter_email-active")
        emailInput.classList.remove("newsletter__input-active")
    } else {
        invdalidEmail.classList.add("newsletter_email-active")
        emailInput.classList.add("newsletter__input-active")
    }
})

closeButtonDissmiss.addEventListener("click", () => {
    container.style.display = "block";
    mainImg.style.display = "block";
    groupEmailSuccess.classList.remove("newsletter_thanks_active")
})