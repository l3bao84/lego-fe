import styles from '../DetailProductLayout.module.scss';
import classNames from 'classnames/bind';
import { useDetailProduct } from '../service';
import { useState, useRef } from 'react';
import Rating from '~/components/Layout/Rating';

const cx = classNames.bind(styles);

function ProductDetailContainer() {
    const product = useDetailProduct();
    const [activeImage, setActiveImage] = useState(0);
    const [inputQuantity, setInputQuantity] = useState(1)
    const inputRef = useRef()

    const calculateAverageRating = (reviews) => {
        if (!reviews || reviews.length === 0) {
            return 0;
        }

        const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
        return totalRating / reviews.length;
    };

    return (
        <div className={cx('product-detail-container')}>
            <div className={cx('product-detail-layout')}>
                <div className={cx('product-detail-gallery')}>
                    <div className={cx('galley-container')}>
                        <ul className={cx('gallery-thumbnails')}>
                            {product &&
                                product.images &&
                                product.images.map((image, index) => (
                                    <li key={index} className={cx('gallery-thumbnails-item')}>
                                        <button
                                            onClick={() => setActiveImage(index)}
                                            className={cx('gallery-thumbnails-item-btn')}
                                        >
                                            <img
                                                src={`http://localhost:8080/img/${image}`}
                                                alt=""
                                                className={cx('gallery-thumbnails-img')}
                                            />
                                        </button>
                                    </li>
                                ))}
                        </ul>
                        <div className={cx('image-viewport')}>
                            <span className={cx('product-counter-gallery')}>
                                {product && product.images && `${activeImage + 1}/${product.images.length}`}
                            </span>
                            <div className={cx('control-button-wrapper-prev')}>
                                <button
                                    style={{
                                        opacity: activeImage === 0 ? 0.5 : null,
                                        pointerEvents: activeImage === 0 ? 'none' : null,
                                    }}
                                    onClick={() => activeImage !== 0 && setActiveImage(activeImage - 1)}
                                    className={cx('control-button-prev')}
                                >
                                    <div className={cx('icon-wrapper-button')}></div>
                                </button>
                            </div>
                            <div className={cx('control-button-wrapper-next')}>
                                <button
                                    style={{
                                        opacity:
                                            product && product.images && activeImage === product.images.length - 1
                                                ? 0.5
                                                : null,
                                        pointerEvents:
                                            product && product.images && activeImage === product.images.length - 1
                                                ? 'none'
                                                : null,
                                    }}
                                    onClick={() =>
                                        activeImage !== (product && product.images).length - 1 &&
                                        setActiveImage(activeImage + 1)
                                    }
                                    className={cx('control-button-next')}
                                >
                                    <div className={cx('icon-wrapper-button')}></div>
                                </button>
                            </div>
                            <div className={cx('media-wrapper')}>
                                <img
                                    className={cx('media-wrapper-img')}
                                    src={
                                        product &&
                                        product.images &&
                                        `http://localhost:8080/img/${product.images[activeImage]}`
                                    }
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-attribute-wrapper')}>
                        <div className={cx('product-attributes')}>
                            <div className={cx('product-attributes-item')}>
                                <div className={cx('product-attributes-item-icon')}>
                                    <svg
                                        width="33"
                                        height="40"
                                        viewBox="0 0 33 40"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        data-di-rand="1692170724510"
                                        data-di-res-id="54247a3a-88803a74"
                                    >
                                        <g
                                            fillRule="nonzero"
                                            stroke="currentColor"
                                            fill="none"
                                            style={{ mixBlendMode: 'darken' }}
                                        >
                                            <path
                                                strokeWidth="1.727"
                                                fill="#FFF"
                                                d="M1.184 9.433l15.224-7.281 15.59 7.194V30.49L17.418 39 1.184 30.577z"
                                            ></path>
                                            <path
                                                d="M23.23 3.544C22.864 2.141 19.925 1 16.526 1c-3.675 0-6.798 1.228-6.89 2.895 0 0 .184 4.124.184 4.211 0 2.018 3.307 3.422 6.798 3.422 3.582 0 6.797-1.404 6.797-3.422v-3.07s.184-.965-.183-1.492z"
                                                strokeWidth="1.152"
                                                fill="#FFF"
                                            ></path>
                                            <path
                                                d="M10.094 4.334c.092-1.58 2.94-2.895 6.43-2.895 3.491 0 6.34 1.316 6.431 2.895.092 1.667-2.756 2.983-6.43 2.983-3.675 0-6.523-1.404-6.43-2.983h0z"
                                                strokeWidth="1.152"
                                            ></path>
                                            <path strokeWidth="1.727" d="M2 10l15 7.222V39M17 17l14.63-7.122"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className={cx('product-attributes-item-value')}>
                                    <span>{product && product.pieces && product.pieces}</span>
                                </div>
                                <div className={cx('product-attributes-item-tile')}>
                                    <span>Pieces</span>
                                </div>
                            </div>
                            <div className={cx('product-attributes-item')}>
                                <div className={cx('product-attributes-item-icon')}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="36"
                                        height="36"
                                        aria-hidden="true"
                                        viewBox="0 0 36 36"
                                        data-di-rand="1692170724511"
                                        data-di-res-id="ec981d5f-b2c10440"
                                    >
                                        <path
                                            d="M13.81 12.333l-2.833 11.334h11.216l2.834-11.334H13.81zm.945-3.777H25.97l1.53-6.124a1.89 1.89 0 013.668.914l-1.303 5.21h3.245c1.047 0 1.889.846 1.889 1.889a1.887 1.887 0 01-1.889 1.888h-4.19l-2.833 11.334h7.023c1.047 0 1.889.846 1.889 1.888a1.887 1.887 0 01-1.889 1.89h-7.967l-1.534 6.123a1.888 1.888 0 11-3.66-.914l1.299-5.21H10.033l-1.534 6.124a1.888 1.888 0 11-3.66-.914l1.299-5.21h-3.25a1.89 1.89 0 010-3.777h4.194l2.834-11.334H2.889a1.89 1.89 0 010-3.777h7.971l1.534-6.124a1.884 1.884 0 012.285-1.375 1.883 1.883 0 011.375 2.29l-1.3 5.209z"
                                            fill="currentColor"
                                            stroke="#FFF"
                                            fillRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                                <div className={cx('product-attributes-item-value')}>
                                    <span>{product && product.stock && product.stock}</span>
                                </div>
                                <div className={cx('product-attributes-item-tile')}>
                                    <span>Item</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('product-detail-overview')}>
                    <div className={cx('product-badge-row')}>
                        <div className={cx('review-style-container')}>
                            <div className={cx('review-rating-star')}>
                                <div className={cx('rating-bar-star')}>
                                    <div className={cx('segment-container')}>
                                        <Rating averageRating={(product && product.reviews) && calculateAverageRating(product.reviews)}></Rating>
                                    </div>
                                </div>
                            </div>
                            <button className={cx('review-button')}>
                                {product && product.reviews && `${product.reviews.length}`}
                            </button>
                        </div>
                    </div>
                    <div className={cx('product-overview-row')}>
                        <h1 className={cx('product-overview-name')}>{product && `${product.productName}`}</h1>
                    </div>
                    <div className={cx('price-available-wrapper')}>
                        <div className={cx('product-price-wrapper')}>
                            <span className={cx('text')}>{product && `$${product.price}`}</span>
                        </div>
                        <p className={cx('product-overview-availability')}>
                            <span>Available now</span>
                        </p>
                    </div>
                    <div className={cx('quantity-selector')}>
                        <div className={cx('quantity-wrapper')}>
                            <button  
                            onClick={() => inputQuantity > 1 && setInputQuantity(inputQuantity - 1)}
                            className={cx('modify-button-minus')}
                            >
                                <svg
                                    width="14px"
                                    height="2px"
                                    viewBox="0 0 14 2"
                                    aria-hidden="true"
                                    data-di-rand="1692177394837"
                                >
                                    <polygon
                                        style={{fill: inputQuantity === 1 ? '#E0E0E0' : 'black',
                                                pointerEvents: inputQuantity === 1 ? 'none' : null}}
                                        fill="black"
                                        // #E0E0E0
                                        points="14 2 0 2 0 -6.03961325e-14 14 -6.03961325e-14"
                                    ></polygon>
                                </svg>
                            </button>
                            <div className={cx('quantity-input')}>
                                <input ref={inputRef} value={inputQuantity} className={cx('quantity-value')} type="text" readOnly/>
                            </div>
                            <button 
                            onClick={() => inputQuantity < 3 && setInputQuantity(inputQuantity + 1)}
                            className={cx('modify-button-plus')}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14px"
                                    height="14px"
                                    viewBox="0 0 14 14"
                                    aria-hidden="true"
                                    data-di-rand="1692177394837"
                                >
                                    <polygon 
                                    style={{fill: inputQuantity === 3 ? '#E0E0E0' : 'black',
                                            pointerEvents: inputQuantity === 3 ? 'none' : null}}
                                    fill="black" 
                                    points="14 8 0 8 0 6 14 6" ></polygon>
                                    <rect
                                    style={{fill: inputQuantity === 3 ? '#E0E0E0' : 'black',
                                            pointerEvents: inputQuantity === 3 ? 'none' : null}}  
                                    fill="black" fillRule="nonzero" x="6" y="0" width="2" height="14"></rect>
                                </svg>
                            </button>
                        </div>
                        <div className={cx('max-quantity')}>
                            <span className={cx('text')}>Limit 3</span>
                        </div>
                    </div>
                    <div className={cx('product-button-wrapper')}>
                        <div className={cx('add-to-bag-button-wrapper')}>
                            <div className={cx('add-to-bag-container')}>
                                <div className={cx('add-to-bag-sticky-container')}>
                                    <div className={cx('add-to-bag-container-content-holder')}>
                                        <div className={cx('add-to-bag-container-holder')}>
                                            <form action="" method="post" className={cx('extra-large-button')}>
                                                <input type="hidden" name="quantity" id="quantity-form" value="1" />
                                                <button className={cx('add-to-cart-button')}>
                                                    <div className={cx('icon-wrapper')}>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 40 40"
                                                            fill="currentColor"
                                                            data-di-rand="1692771850891"
                                                        >
                                                            <path d="M28.036 8.889V5a5.106 5.106 0 0 0-1.416-3.532A4.747 4.747 0 0 0 23.214 0h-6.428a4.747 4.747 0 0 0-3.406 1.468A5.106 5.106 0 0 0 11.964 5v3.889H5V35a5.107 5.107 0 0 0 1.415 3.532A4.747 4.747 0 0 0 9.821 40H30.18a4.747 4.747 0 0 0 3.406-1.468A5.106 5.106 0 0 0 35 35V8.889h-6.964ZM15.179 5c0-.442.169-.866.47-1.179.302-.312.71-.488 1.137-.488h6.428c.427 0 .835.176 1.137.488.301.313.47.737.47 1.179v3.889H15.18V5Zm16.607 30c0 .442-.17.866-.471 1.178-.301.313-.71.489-1.136.489H9.82c-.426 0-.835-.176-1.136-.489A1.698 1.698 0 0 1 8.215 35V12.222h3.75v4.445h3.214v-4.445h9.642v4.445h3.215v-4.445h3.75V35Z"></path>
                                                        </svg>
                                                    </div>
                                                    Add to Bag
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('add-to-wishlist-button-wrapper')}>
                            <div className={cx('wish-list-floating-wrapper')}>
                                <div className={cx('wish-list-wrapper')}>
                                    <button className={cx('wish-list-button-heart')}>
                                        <div className={cx('icon-wrapper')}>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 40 40"
                                                fill="currentColor"
                                                data-di-rand="1692771850895"
                                            >
                                                <path d="M20.767 37.673a1.104 1.104 0 0 1-1.567 0l-15.867-16A11.583 11.583 0 0 1 0 13.574c.027-2.336.744-4.61 2.058-6.53a11.591 11.591 0 0 1 5.316-4.247 11.432 11.432 0 0 1 6.751-.506A11.533 11.533 0 0 1 20 5.697a11.533 11.533 0 0 1 5.875-3.407c2.25-.517 4.601-.34 6.751.506a11.59 11.59 0 0 1 5.316 4.246A11.813 11.813 0 0 1 40 13.573a11.568 11.568 0 0 1-.871 4.38 11.453 11.453 0 0 1-2.462 3.71l-15.9 16.01ZM11.544 5.37a8.125 8.125 0 0 0-5.776 2.386 8.332 8.332 0 0 0-2.435 5.816 8.178 8.178 0 0 0 .602 3.105c.4.984.989 1.88 1.732 2.633L20 33.724 34.344 19.3a8.176 8.176 0 0 0 2.323-5.727 8.392 8.392 0 0 0-1.71-4.994 8.218 8.218 0 0 0-4.334-2.946 8.126 8.126 0 0 0-5.211.29 8.25 8.25 0 0 0-3.99 3.408L20 11.705l-1.422-2.374a8.235 8.235 0 0 0-3.003-2.915 8.109 8.109 0 0 0-4.03-1.045Z"></path>
                                            </svg>
                                        </div>
                                        <a href="">Add to Wishlist</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailContainer;
