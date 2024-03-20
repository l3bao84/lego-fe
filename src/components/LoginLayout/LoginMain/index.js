import styles from './LoginMain.module.scss';
import classNames from 'classnames/bind';
import LoginForm from './LoginForm';
import LoginSocial from './LoginSocial';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function LoginMain() {

    const navigate = useNavigate()

    const handleGotoSignup = (e) => {
        e.preventDefault();
        navigate('/signup');
    }

    return (
        <main className={cx("page-body")}>
            <h1 className={cx("h1-text-base")}>Sign in</h1>
            <form action='' className={cx("login-form")}>
                <div>
                    <LoginForm />
                </div>
                <div className={cx("card-container")}>
                    <div className={cx("card-padding")}>
                        <h2 className={cx("h2-textbase")}>New user</h2>
                        <button onClick={(e) => handleGotoSignup(e)} className={cx("button-base-need-account")}>
                            <span>Create account</span>
                        </button>
                    </div>
                </div>
                <LoginSocial/>
            </form>
        </main>
    );
}

export default LoginMain;
