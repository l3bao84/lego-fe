import styles from './AddToBagNoti.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AddToBagNotifications({product, onClose}) {
    return (
        <div>
            <div>
                <aside className={cx("modal-container")}>
                    <div className={cx("modal-window")}>
                        <div className={cx("close-button-wrapper")}>
                            <button onClick={onClose} className={cx("close-button")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" aria-hidden="true" data-di-res-id="f5d2f394-cc1821b5" data-di-rand="1711356912019"><path d="M10.377 8.142l5.953-5.954-2.234-2.234-5.954 5.954L2.188-.046-.046 2.188l5.954 5.954-5.954 5.954 2.234 2.234 5.954-5.953 5.954 5.953 2.234-2.234z" fill="currentColor" fillRule="evenodd"></path></svg>
                            </button>   
                        </div>
                        <div className={cx("add-to-bag-modal")}>
                            <div className={cx("header")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13" aria-hidden="true" data-di-res-id="f5d2f394-26f3ca34" data-di-rand="1711356912019"><path d="M0 5.703L7.177 13 20 0h-4.476L7.177 8.442 4.476 5.723H2.238z" fill="currentColor" fillRule="evenodd"></path></svg>
                                <h2>Added to My Bag</h2>
                            </div>
                            <div className={cx("divider")}></div>
                            <div className={cx("body")}>
                                <div className={cx("product-infor-container")}>
                                    <div className={cx("item-row")}>
                                        <div className={cx("image-container")}>
                                            <img src={`http://localhost:8080/img/${product.images[0]}`}></img>
                                        </div>
                                        <div>
                                            <p className={cx("product-name")}>
                                                <span>{product.productName}</span>
                                            </p>
                                            <p className={cx("product-price")}>
                                                <span>{`$${product.price}`}</span>
                                            </p>
                                            <p className={cx("product-qty")}>Qty: 1</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx("actions-container")}>
                                <div className={cx("actions-buttons-container")}>
                                    <button onClick={onClose}>Continue Shopping</button>
                                    <a href='/cart'>View My Bag</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default AddToBagNotifications;