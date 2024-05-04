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

export const placeOrder = async (formData) => {
    const token = localStorage.getItem('token');
    if (!token) {
        console.log('No token available');
        return;
    }

    const response = await fetch('http://localhost:8080/order', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        },
        body: formData,
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP error, status = ${response.status}, message = ${errorText}`);
    }
    return response.json();
}