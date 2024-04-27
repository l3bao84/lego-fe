import CheckoutLayout from "~/components/CheckoutLayout";
import { useEffect } from "react";

function Checkout() {

    useEffect(() => {
        document.title = 'Secure Checkout | Nidas Shop';
      }, []);

    return (
        <CheckoutLayout/>
    );
}

export default Checkout;