import styles from './DetailProductLayout.module.scss';
import classNames from 'classnames/bind';
import RecommendedProducts from '../RecommendedProducts';
import ProductDetailContainer from './Container';
import ProductInfor from './ProductInfor';
import ProductReview from './ProductReview';
import ShopMore from './ShopMore';
import { useDetailProduct, useCategory } from './service';

const cx = classNames.bind(styles);

function DetailProduct() {

    const product = useDetailProduct();
    let categoryId
    if(product && product.categoryId) {
        categoryId = product.categoryId;
    }
    const category = useCategory(categoryId)

    return (
        <div>
            <ol className={cx('breadcrumbs-wrapper')}>
                <li className={cx('breadcrumbs-item')}>
                    <a href="/" className={cx('breadcrumbs-item-link')}>
                        <span>
                            <span>Home</span>
                        </span>
                    </a>
                    <svg
                        width="18"
                        height="28"
                        viewBox="0 0 18 28"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        data-di-res-id="67f0e2cf-fee9730b"
                        data-di-rand="1709882758827"
                    >
                        <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path>
                    </svg>
                </li>
                <li className={cx('breadcrumbs-item')}>
                    <a href="/" className={cx('breadcrumbs-item-link')}>
                        <span>
                            <span>{(category && category.categoryName) && `${category.categoryName}`}</span>
                        </span>
                    </a>
                    <svg
                        width="18"
                        height="28"
                        viewBox="0 0 18 28"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        data-di-res-id="67f0e2cf-fee9730b"
                        data-di-rand="1709882758827"
                    >
                        <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path>
                    </svg>
                </li>
                <li className={cx('breadcrumbs-item')}>
                    <span>
                        <span>{(product && product.productName) && `${product.productName}`}</span>
                    </span>
                </li>
            </ol>
            <ProductDetailContainer></ProductDetailContainer>
            <ProductInfor></ProductInfor>
            <ProductReview></ProductReview>
            <ShopMore categoryName={(category && category.categoryName) && category.categoryName}></ShopMore>
            <RecommendedProducts></RecommendedProducts>
        </div>
    );
}

export default DetailProduct;
