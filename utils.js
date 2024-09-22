export function generateStrongPassword() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;';
    let password = '';
    for (let i = 0; i < 25; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}