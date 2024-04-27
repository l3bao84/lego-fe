export const isNullOrEmpty = (data) => {
    return !data || data.trim() === '';
}

export const validatePhoneNumber = (phoneNumber) => {
    const regex = /^0[1-9]\d{8}$/;
    return regex.test(phoneNumber);
}

export const isEnableButton = (data) => {
    return isNullOrEmpty(data.fullname) || isNullOrEmpty(data.phonenumber) || isNullOrEmpty(data.address) || isNullOrEmpty(data.city)
}