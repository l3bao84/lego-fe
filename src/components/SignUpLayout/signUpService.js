export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export const validForm = (user) => {
    if(user.firstname === '' || user.lastname === '' || user.email === '' || user.password === '') {
        return false;
    }else {
        return true;
    }
}