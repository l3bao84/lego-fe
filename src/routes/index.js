import Home from '~/pages/Home'
import Product from '~/pages/Product'
import Checkout from "~/pages/Checkout";

const publicRoutes = [
    {path: "/",element: Home},
    {path: "/product",element: Product},
    {path: "/checkout",element: Checkout, layout: Checkout}
]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}