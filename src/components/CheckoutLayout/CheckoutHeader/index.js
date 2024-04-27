import styles from '../CheckoutLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CheckoutHeader() {
    return (
        <header className={cx("header_container")}>
            <div className={cx("max_with_container")}>
                <div className={cx("back_to_bag-container")}>
                    <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" data-di-res-id="2420450c-44400d9a" data-di-rand="1713325347464"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path></svg>
                    <div className={cx("media_query")}>
                        <span>
                            <a href='/cart'>Back to My Bag</a>
                        </span>
                    </div>
                </div>
                <div className={cx("logo-container")}>
                    <img data-skroll="Logo" src="https://assets.lego.com/logos/v4.6.0/brand-lego.svg" width="100" height="60" decoding="async" loading="lazy" aria-hidden="false" aria-label="LEGO Brand Logo" role="img" data-test="logo-brand-lego"/>
                </div>
                <div className={cx("secure_checkout-container")}>
                    <div className={cx("icon_wrapper")}>
                        <div></div>
                    </div>
                    <div className={cx("media_query")}>
                        <span>Secure Checkout</span>
                    </div>
                </div>
            </div> 
        </header>
    )
}

export default CheckoutHeader;