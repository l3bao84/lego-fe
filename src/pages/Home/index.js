import DefaultLayout from '~/components/Layout/DefaultLayout';
import RecommendedProducts from '~/components/RecommendedProducts';
import QuickLinks from '~/components/QuickLinks';
import TopPickSlides from '~/components/TopPickSlides';
import OrderNoti from '~/components/OrderNoti';
import { useEffect, useState } from 'react';

function Home() {
    const [showOrderNoti, setShowOrderNoti] = useState(false);

    useEffect(() => {
        document.title = 'Home | Nidas Shop';

        const searchParams = new URLSearchParams(window.location.search);
        const orderStatus = searchParams.get('order');

        if (orderStatus === 'success') {
            setShowOrderNoti(!showOrderNoti);
        }

        const payerId = searchParams.get('PayerID');
        const paymentId = searchParams.get('paymentId');
        const formData = new FormData();
        formData.append('paymentId', paymentId);
        formData.append('payerId', payerId);

        executePayment(formData)
            .then((response) => {
                if (response && response.code === 200) {
                    setShowOrderNoti(true);
                } else {
                    console.log('Unexpected response structure:', response);
                }
            })
            .catch((error) => {
                console.error('Failed to execute payment:', error);
            });
    }, []);

    const handleCloseOrderNoti = (value) => {
        setShowOrderNoti(value);
    };

    const executePayment = async (formData) => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.log('No token available');
            return;
        }
        try {
            const response = await fetch('http://localhost:8080/order/execute-payment', {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json',
                },
                body: formData,
            });
            if (!response.ok) throw new Error(`Network response was not ok, status: ${response.status}`);
            const responseData = await response.json();
            console.log('Executed payment successfully', responseData);
            return responseData;
        } catch (error) {
            console.error('Failed to execute payment:', error);
            throw error;
        }
    };

    const contentProps = {
        TopPickSlides: <TopPickSlides></TopPickSlides>,
        QuickLinks: <QuickLinks></QuickLinks>,
        RecommendedProducts: <RecommendedProducts></RecommendedProducts>,
        OrderNoti: showOrderNoti ? <OrderNoti onClose={handleCloseOrderNoti} /> : null,
    };

    return <DefaultLayout props={contentProps}></DefaultLayout>;
}

export default Home;
