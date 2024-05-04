import styles from './OrderNoti.modules.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function OrderNoti({onClose}) {

    const navigate = useNavigate();
    
    const handleCloseNoti = () => {
        navigate('/')
        onClose(false)
    }

    return (
        <div>
            <div>
                <aside className={cx('modal-style-container')}>
                    <div className={cx('modal-window')}>
                        <div className={cx('modal-style-close-button-wrapper')}>
                            <button onClick={() => handleCloseNoti()} className={cx('close-button-style')}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    aria-hidden="true"
                                    data-di-res-id="a31f75e5-d947b6aa"
                                    data-di-rand="1697253127427"
                                >
                                    <path
                                        d="M10.377 8.142l5.953-5.954-2.234-2.234-5.954 5.954L2.188-.046-.046 2.188l5.954 5.954-5.954 5.954 2.234 2.234 5.954-5.953 5.954 5.953 2.234-2.234z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div className={cx('order-noti-container')}>
                            <div className={cx('order-noti-header')}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="13"
                                    viewBox="0 0 20 13"
                                    aria-hidden="true"
                                    data-di-res-id="6c7e0d3c-fe7ed5ea"
                                    data-di-rand="1697253765091"
                                >
                                    <path
                                        d="M0 5.703L7.177 13 20 0h-4.476L7.177 8.442 4.476 5.723H2.238z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                    ></path>
                                </svg>
                                <h2 className={cx('order-noti-title')}>Order Successfully</h2>
                            </div>
                            <div className={cx('order-noti-body')}>
                                <div className={cx('order-noti-body-title')}>
                                    <p className={cx('order-noti-text')}>
                                        <span>
                                            Please check your email or click View My Orders to see the order detail
                                        </span>
                                    </p>
                                </div>
                                <div className={cx('order-noti-action-container')}>
                                    <button onClick={() => handleCloseNoti()} className={cx('continue-button')}>Continue Shopping</button>
                                    <a href="/my-account" className={cx('view-order')}>
                                        View My Orders
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default OrderNoti;
