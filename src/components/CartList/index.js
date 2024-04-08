import { useCart } from './service';
import EmptyCart from './EmptyCart';
import CartItems from './CartItems';

function CartList() {

    const { cartItems, reloadCart } = useCart();

    return (
        cartItems.length === 0 
            ? 
            <EmptyCart></EmptyCart>
            :
            <CartItems data={cartItems} reload={reloadCart}></CartItems>
    )
}

export default CartList;