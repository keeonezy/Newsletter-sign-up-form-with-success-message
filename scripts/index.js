const formGroup = document.querySelector(".newsletter_group");

function formSuccess {
    
}

function emailValidate(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}