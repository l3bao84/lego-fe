import styles from '../CartList.module.scss';
import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';

const cx = classNames.bind(styles);

function CartItems({ data, reload }) {

    const [quantities, setQuantities] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [orderTotal, setorderTotal] = useState(0);
    const inputRef = useRef();

    useEffect(() => {
        const initialQuantities = data.map(item => item.quantity || 1);
        setQuantities(initialQuantities);

        const newTotalPrice = data.reduce((total, item, index) => {
            return total + (item.price * (quantities[index] || item.quantity || 1));
        }, 0);
        setSubtotal(newTotalPrice);
        setorderTotal(newTotalPrice + (newTotalPrice * 5 / 100));

    }, [data]);

    const handleQuantityChange = (id, index, newQuantity) => {
        const validatedQuantity = Math.min(Math.max(newQuantity, 1), 5);
        const updatedQuantities = [...quantities];
        updatedQuantities[index] = validatedQuantity;
        setQuantities(updatedQuantities);

        const postData = {
            id,
            quantity: validatedQuantity,
        };

        fetch(`http://localhost:8080/carts`, {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }   
            reload()
            return response.text();
        })
        .catch((error) => {
            console.error(error);
        });
    };

    const handleRemoveCartItem = (id) => {
        fetch(`http://localhost:8080/carts/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }   
            reload()
            return response.text();
        })
        .catch((error) => {
            console.error(error);
        });
    }
    
    return (
        <div className={cx('cart-style-container')}>
            <div className={cx('min-height-content')}>
                <div className={cx('cart-style-header')}>
                    <div className={cx('cart-style-title')}>
                        <div className={cx('media-query')}>
                            <h1 className={cx('cart-title')}>{`My Bag (${data.length})`}</h1>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: '1.25rem' }} className={cx('cart-style-wrapper')}>
                    <div className={cx('cart-content-container')}>
                        <div className={cx('animate-height-wrapper')}>
                            <div className={cx('line-item-wrapper')}>
                                <div className={cx('line-item-section-header')}>
                                    <h2 className={cx('section-heading')}>
                                        <span>Available now</span>
                                    </h2>
                                </div>
                                <div className={cx('line-item-content-wrapper')}>
                                    {data.map((item, index) => (
                                        <div key={index} style={{borderBottom: (index == data.length - 1) && "none"}} className={cx('product-row-container')}>
                                            {/* <input type="hidden" name="itemId" className={cx('itemId')} /> */}
                                            <div className={cx('custom-wrapper')}>
                                                <div className={cx('product-image-wrapper')}>
                                                    <a href={`/product/${item.product.productId}`} className={cx('link-style')}>
                                                        <img src={(item.product && item.product.images) && `http://localhost:8080/img/${item.product.images[0]}`} alt="" />
                                                    </a>
                                                </div>
                                                <div className={cx('line-item-detail-container')}>
                                                    <div className={cx('title-wrapper')}>
                                                        <div className={cx('text-wrapper')}>
                                                            <a href={`/product/${item.product.productId}`} className={cx('link-style-a')}>
                                                                <h3 className={cx('link-item-title')}>
                                                                    <span>{(item.product && item.product.productName) && `${item.product.productName}`}</span>
                                                                </h3>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className={cx('cart-message-wrapper')}></div>
                                                    <div className={cx('action-wrapper')}>
                                                        <div className={cx('product-infor-container')}>
                                                            <div className={cx('product-price-wrapper')}>
                                                                <span className={cx('product-price')}>
                                                                    <span className={cx('st-price')}>{`$${item.price}`}</span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className={cx('quantity-container')}>
                                                            <div className={cx('quantity-wrapper')}>
                                                                <button
                                                                    onClick={() => handleQuantityChange(item.cartItemId,index, quantities[index] - 1)
                                                                    }
                                                                    className={cx('modify-button-minus')}
                                                                >
                                                                    <svg height="2px" viewBox="0 0 14 2" aria-hidden="true" data-di-rand="1692177394837">
                                                                        <polygon
                                                                            style={{
                                                                                fill:
                                                                                quantities[index] === 1
                                                                                        ? '#E0E0E0'
                                                                                        : 'black',
                                                                                pointerEvents:
                                                                                quantities[index] === 1 ? 'none' : null,
                                                                            }}
                                                                            fill="black" points="14 2 0 2 0 -6.03961325e-14 14 -6.03961325e-14"></polygon>
                                                                    </svg>
                                                                </button>
                                                                <div className={cx('quantity-input')}>
                                                                    <input
                                                                        // ref={inputRef}
                                                                        value={quantities[index] || 1}
                                                                        onChange={(e) => handleQuantityChange(item.cartItemId,index, Number(e.target.value))}
                                                                        className={cx('quantity-value')}
                                                                        type="text"
                                                                        readOnly
                                                                    />
                                                                </div>
                                                                <button
                                                                    onClick={() =>
                                                                        handleQuantityChange(item.cartItemId,index, quantities[index] + 1)
                                                                    }
                                                                    className={cx('modify-button-plus')}
                                                                >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 14 14" aria-hidden="true" data-di-rand="1692177394837">
                                                                        <polygon
                                                                            style={{
                                                                                fill:
                                                                                quantities[index] === 5
                                                                                        ? '#E0E0E0'
                                                                                        : 'black',
                                                                                pointerEvents:
                                                                                quantities[index] === 5 ? 'none' : null,
                                                                            }}
                                                                            fill="black" points="14 8 0 8 0 6 14 6"></polygon>
                                                                        <rect
                                                                            style={{
                                                                                fill:
                                                                                quantities[index] === 5
                                                                                        ? '#E0E0E0'
                                                                                        : 'black',
                                                                                pointerEvents:
                                                                                quantities[index] === 5 ? 'none' : null,
                                                                            }}
                                                                            fill="black" fillRule="nonzero" x="6" y="0" width="2" height="14"></rect>
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className={cx('wishlist-wrapper')}>
                                                            <div className={cx('wishlist-dropdown-wrapper')}>
                                                                <div className={cx('wishlist-toggle-button')}>
                                                                    <button className={cx('add-to-wishlist')}>
                                                                        <svg width="100%" height="100%" viewBox="0 0 40 40" alt="" data-di-res-id="4959f2ff-6fc82a72" data-di-rand="1694674646451">
                                                                            <rect fill="#F8F8F8" width="40" height="40" rx="20"></rect>
                                                                            <path d="M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="transparent"></path>
                                                                            <path d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126" fill="#006DB7"></path>
                                                                        </svg>
                                                                    </button>
                                                                    <div className={cx('wishlist-toggle-title')}>
                                                                        Add to wish list
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('action-wrapper')}></div>
                                            <div className={cx('product-remove-container')}>
                                                <button onClick={() => handleRemoveCartItem(item.cartItemId)} type="submit" className={cx('remove-icon-button')}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="22" viewBox="0 0 17 22" aria-hidden="true" data-di-res-id="d990695e-602ee13b" data-di-rand="1694674646451">
                                                        <g fill="currentColor" fillRule="evenodd">
                                                            <path d="M.773 5.5h15.454A.762.762 0 0017 4.75a.762.762 0 00-.773-.75H.773A.762.762 0 000 4.75c0 .414.346.75.773.75z"></path>
                                                            <path d="M5.744 4l.378-1.43c.08-.307.448-.607.742-.607h3.272c.294 0 .661.3.742.606L11.256 4 13 4.46l-.378-1.43C12.32 1.88 11.24.673 10.136.673H6.864C5.76.673 4.681 1.881 4.378 3.03L4 4.46 5.744 4z"></path>
                                                            <path d="M14.47 4.734l-.567 15.257a.515.515 0 01-.505.484H3.602a.516.516 0 01-.505-.484L2.53 4.734a.764.764 0 00-.793-.733.764.764 0 00-.736.79l.567 15.256A2.044 2.044 0 003.602 22h9.796c1.086 0 1.994-.87 2.034-1.953L16 4.791a.764.764 0 00-.736-.79.764.764 0 00-.793.733z"></path>
                                                            <path d="M8 8.532v8.945c0 .29.224.526.5.526s.5-.235.5-.526V8.532a.514.514 0 00-.5-.526c-.276 0-.5.236-.5.526zm3-.006v8.948c0 .29.224.526.5.526s.5-.236.5-.526V8.526A.514.514 0 0011.5 8c-.276 0-.5.236-.5.526zm-6 0v8.948c0 .29.224.526.5.526s.5-.236.5-.526V8.526A.514.514 0 005.5 8c-.276 0-.5.236-.5.526z"></path>
                                                        </g>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('order-summary-wrapper')}>
                        <div className={cx('order-summary-container')}>
                            <div className={cx('loading-wrapper')}>
                                <div className={cx('order-summary-title')}>
                                    <h2 className={cx('order-summary-text')}>Order Summary</h2>
                                </div>
                                <div className={cx('order-summary')}>
                                    <div className={cx('order-summary-checkout-wrapper')}>
                                        <div className={cx('order-detail')}>
                                            <div className={cx('animate-height-wrapper')}>
                                                <span>Add a promo/Insiders discount code</span>
                                                <div className={cx('discount')}>
                                                    <div className={cx('input-with-button')}>
                                                        <div className={cx('input-style-wrapper')}>
                                                            <div className={cx('input-wrapper')}>
                                                                <label htmlFor="" className={cx('input-style-label')}>
                                                                    <input
                                                                        type="text"
                                                                        className={cx('input-discount-field')}
                                                                    />
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <button className={cx('apply-discount-button')}>Apply</button>
                                                    </div>
                                                </div>
                                                <div className={cx('price-row')}>
                                                    <span className={cx('order-value-text')}>{`Order value (${data.length}) ${data.length <= 1 ? "item" : "item" }`}</span>
                                                    <span className={cx('order-value-text')}>
                                                        <span className={cx('order-price')}>{`$${subtotal.toFixed(2)}`}</span>
                                                    </span>
                                                </div>
                                                <div className={cx('vat')}>
                                                    <div className={cx('vat-text')}>
                                                        <div>VAT</div>
                                                        <div>5%</div>
                                                    </div>
                                                </div>
                                                <div className={cx('order-total')}>
                                                    <div className={cx('total-row')}>
                                                        <div className={cx('total-row-title')}>
                                                            <span>Order Total</span>
                                                        </div>
                                                        <span className={cx('total-row-text')}>
                                                            <span className={cx('total-value')}>{`$${orderTotal.toFixed(2)}`}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('order-summary-button-wrapper')}>
                                            <a className={cx('order-summary-link')}>
                                                <div className={cx('icon-wrapper')}>
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 40 40"
                                                        fill="currentColor"
                                                        data-di-res-id="bf924e76-e739f62e"
                                                        data-di-rand="1694678648529"
                                                    >
                                                        <path d="M20.022 37a1.24 1.24 0 0 1-.473-.09C18.997 36.688 6 31.308 6 10.412a1.353 1.353 0 0 1 .253-.795c.166-.23.4-.4.667-.485.99-.412 11.454-5.423 12.392-5.924a1.32 1.32 0 0 1 1.42 0c.937.5 11.392 5.512 12.392 5.924.259.092.483.265.64.495.158.23.24.505.236.785.044 20.896-12.953 26.275-13.505 26.498-.15.061-.311.091-.473.09ZM8.629 11.289c.307 16.323 9.176 21.791 11.393 22.9 2.2-1.109 11.077-6.568 11.393-22.9-1.262-.582-3.751-1.79-6.065-2.873a492.946 492.946 0 0 1-4.084-1.969c-.482-.232-.876-.43-1.235-.608-.342.179-.754.376-1.236.608a492.946 492.946 0 0 1-4.084 1.97 524.153 524.153 0 0 1-6.082 2.872Zm10.84 13.424 6.608-9.845a.426.426 0 0 0-.122-.6l-1.437-.966a.44.44 0 0 0-.605.117l-5.6 8.367-2.147-3.454a.43.43 0 0 0-.596-.143l-1.472.895a.414.414 0 0 0-.199.262.427.427 0 0 0 .05.328l3.084 4.994a.435.435 0 0 0 .36.206h1.752a.456.456 0 0 0 .334-.143l-.01-.018Z"></path>
                                                    </svg>
                                                </div>
                                                Checkout Securely
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
