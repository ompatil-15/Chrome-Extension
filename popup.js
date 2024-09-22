import { generateStrongPassword } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    const passwordField = document.getElementById('generatedPassword');
    const newPassword = generateStrongPassword();
    passwordField.value = newPassword;

    document.getElementById('copyPassword').addEventListener('click', () => {
        navigator.clipboard.writeText(newPassword)
    });
});
