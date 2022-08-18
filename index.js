const form = document.getElementById('form');
const username = document.getElementById('username');
const username2 = document.getElementById('username2');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const username2Value = username2.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


    if (usernameValue === '') {
        setErrorFor(username, 'First Name cannot be left blank');
    } else if (usernameValue.length <= 3) {
        setErrorFor(username, 'First Name cannot be less than 4 characters');
    } else {
        setSuccessFor(username);
    }
    if (username2Value === '') {
        setErrorFor(username2, 'Last Name cannot be left blank');
    } else if (username2Value.length <= 3) {
        setErrorFor(username2, 'Last Name cannot be less than 4 characters');
    } else {
        setSuccessFor(username2);
    }
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be left blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Not a valid email');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be left blank');
    } else if (passwordValue.length <= 5) {
        setErrorFor(password, 'Last Name cannot be less than 6 characters');
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Password cannot left be blank');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords does not match');
    } else {
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}