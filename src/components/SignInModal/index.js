import styles from './SignInModal.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SignInModal({close, isVisible}) {

    const modalClass = cx("modal-window", {
        "modal-visible": isVisible,
        "modal-hidden": !isVisible
    });

    return (
        <div>
            <div>
                <div>
                    <aside className={cx("modal-container")}>
                        <div className={cx(`${"modal-window"} ${modalClass}`)}>
                            <button onClick={() => close()} className={cx("account_modal-closebutton")}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" aria-hidden="true" data-di-res-id="b6765390-1b78bb36" data-di-rand="1711631662691"><path d="M10.377 8.142l5.953-5.954-2.234-2.234-5.954 5.954L2.188-.046-.046 2.188l5.954 5.954-5.954 5.954 2.234 2.234 5.954-5.953 5.954 5.953 2.234-2.234z" fill="currentColor" fillRule="evenodd"></path></svg>
                            </button>
                            <div className={cx("account_modal-container")}>
                                <div className={cx("title-wrapper")}>
                                    <img src="https://assets.lego.com/logos/v4.5.0/brand-lego.svg" alt="LEGO" width="47" height="47" loading="eager" decoding="async"/>
                                    <h2>Sign In to your LEGO® Account</h2>
                                </div>
                                <a href='/login' className={cx("signin-link")}>Sign In</a>
                                <div className={cx("spacing-jay")}></div>
                                <div className={cx('text-register-wrapper')}>
                                    <span>Don't have an account?</span>
                                    &nbsp;
                                    <a href='/signup' className={cx("register-link")}>Register</a>
                                </div>
                                <div className={cx('text-order_status-wrapper')}>
                                    <img src="https://www.lego.com/_next/static/images/orderStatus-04af015821d59ffa6ce06de624f1bff4.png" alt=""/>
                                    <a className={cx("order_status-link")}>Check Order Status</a>
                                </div>
                            </div>
                        </div>    
                    </aside>
                </div>
            </div>
        </div>
    )
}

export default SignInModal;