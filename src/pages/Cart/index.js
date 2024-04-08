import { useEffect} from "react";
import RecommendedProducts from "~/components/RecommendedProducts";
import DefaultLayout from "~/components/Layout/DefaultLayout";
import CartList from "~/components/CartList";

function Cart() {

    useEffect(() => {
        document.title = 'My Cart | LEGO Shop';
    }, []);

    const contentProps = {
        CartList: <CartList></CartList>,
        RecommendedProducts: <RecommendedProducts></RecommendedProducts>
    }

    return (
        <div className="App">
            <DefaultLayout 
                    props={contentProps}
                >
            </DefaultLayout>
        </div>
    );
}

export default Cart;
