import { useState, useEffect, useCallback } from 'react';

export const useCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [reload, setReload] = useState(false);

    const fetchCart = useCallback(() => {

        const token = localStorage.getItem('token');
        if (!token) {
            return;
        }

        fetch(`http://localhost:8080/carts`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((result) => {
            setCartItems(result);
        })
        .catch((error) => {
            console.error('Error fetching cart:', error);
        });
    }, []);

    useEffect(() => {
        fetchCart();
    }, [fetchCart, reload]);

    const reloadCart = () => {
        setReload(prev => !prev);
    };

    return { cartItems, reloadCart };
};
