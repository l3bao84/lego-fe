import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAddress = () => {
    const [addresses, setAddresses] = useState([]);
    const navigate = useNavigate();

    const fetchAddresses = useCallback(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        fetch(`http://localhost:8080/my-account/addresses`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(setAddresses)
            .catch(error => console.error('Failed to fetch addresses', error));
    }, [navigate]);

    useEffect(() => {
        fetchAddresses();
    }, [fetchAddresses]);

    return { addresses, refreshAddresses: fetchAddresses };
};

export const useAddAddress = (data) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    return async (data) => {
        if (!token) {
            navigate('/login');
            return;
        }

        const url = 'http://localhost:8080/my-account/addresses';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Something went wrong');
            }

            const responseData = await response.json();
            console.log('Address added successfully:', responseData);
            navigate('/my-account');
        } catch (error) {
            console.error('Failed to add address:', error);
        }
    };
};

export const handleUpdateAddress = async (id, data) => {
    const token = localStorage.getItem('token');
    if (!token) {
        return;
    }
    const url = `http://localhost:8080/my-account/addresses/${id}`;
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const responseData = await response.json();
        console.log('Address updated successfully:', responseData);
    } catch (error) {
        console.error('Failed to update address:', error);
    }
};

export const handleDeleteAddress = async (id) => {
    const token = localStorage.getItem('token');
    if (!token) {
        console.log('No token available, please login.');
        return;
    }

    const url = `http://localhost:8080/my-account/addresses/${id}`;
    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to delete address');
        }

        console.log('Address deleted successfully');
    } catch (error) {
        console.error('Error deleting address:', error);
    }
};