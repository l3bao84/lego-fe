import styles from '../CartList.module.scss';
import classNames from 'classnames/bind';
import useAuth from '~/auth';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function EmptyCart() {

    const isAuthenticated = useAuth();
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/login');
    };

    return (
        <div className={cx('empty-bag')}>
            <div className={cx('empty-bag-icon')}></div>
            <h1 className={cx('empty-bag-title')}>You don't have anything in your bag</h1>
            {!isAuthenticated && (
                <>
                    <h2 className={cx('let-signin-title')}>Sign in to see your bag and get shopping!</h2>
                    <div className={cx('empty-bag-wrapper')}>
                        <button
                            onClick={() => handleSignIn()}
                            className={cx('empty-bag-button')}
                            data-skroll="Button"
                            type="button"
                            aria-busy="false"
                            aria-disabled="false"
                            aria-live="polite"
                            data-di-id="di-id-30d8ff59-fae1a137"
                        >
                            <span>Sign In</span>
                        </button>
                    </div>
                </>
            )}
            <a href="/" className={cx('empty-bag-link')}>
                <span className={cx('empty-bag-text')}>
                    <span>Start shopping</span>
                    <svg
                        width="18"
                        height="28"
                        viewBox="0 0 18 28"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path>
                    </svg>
                </span>
            </a>
        </div>
    );
}

export default EmptyCart;
