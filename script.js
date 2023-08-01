document.getElementById('password').addEventListener('input', checkPasswordsMatch);
document.getElementById('confirm-password').addEventListener('input', checkPasswordsMatch);

function checkPasswordsMatch() {
    var passwordInput = document.getElementById('password');
    var passwordConfirmInput = document.getElementById('confirm-password');

    if((passwordInput.value || passwordConfirmInput.value) && passwordInput.value !== passwordConfirmInput.value) {
        passwordInput.setCustomValidity("Passwords don't match");
        passwordConfirmInput.classList.add('invalid-input');
    }
    else {
        passwordInput.setCustomValidity("");
        passwordConfirmInput.classList.remove('invalid-input');
    }
}