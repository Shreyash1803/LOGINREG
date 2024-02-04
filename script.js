const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');


loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});


btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

function seterror(id, error) {
    const element = document.getElementById(id);
    element.querySelector('.formerror').innerHTML = error;
}

function validateForm() {
    let returnVal = true;

    const name = document.forms['myForm']['fname'].value;
    if (name.length < 5) {
        seterror('name', 'Length of name is too short');
        returnVal = false;
    } else {
        seterror('name', '');
    }

    const password = document.forms['myForm']['password'].value;
    if (!isStrongPassword(password)) {
        seterror('password', 'Password must be at least 8 characters long and include letters, numbers, and at least one special character.');
        returnVal = false;
    } else {
        seterror('password', '');
    }

    // Add more validations as needed

    return returnVal;
}

function isStrongPassword(password) {
    // Password should be at least 8 characters long, include letters, numbers, and at least one special character
    const strongPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return strongPasswordRegex.test(password);
}
