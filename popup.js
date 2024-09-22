function generateStrongPassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;';
    let password = '';
    for (let i = 0; i < 25; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

document.addEventListener('DOMContentLoaded', () => {
    const passwordField = document.getElementById('generatedPassword');
    const newPassword = generateStrongPassword();
    passwordField.value = newPassword;

    document.getElementById('copyPassword').addEventListener('click', () => {
        navigator.clipboard.writeText(newPassword)
    });
});
