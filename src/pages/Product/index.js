import DefaultLayout from "~/components/Layout/DefaultLayout";
import { useEffect } from "react";
import DetailProduct from "~/components/DetailProductLayout";
import { useDetailProduct } from "~/components/DetailProductLayout/service";

function Product() {

    const product = useDetailProduct()

    useEffect(() => {
        if(product && product.productName) {
            document.title = `${product.productName} | Nidas Shop`
        }    
    }, [product]);

    const contentProps = {
        DetailProduct: <DetailProduct></DetailProduct>
    }

    return (
        <DefaultLayout props={contentProps}>
        </DefaultLayout>
    );
}

export default Product;