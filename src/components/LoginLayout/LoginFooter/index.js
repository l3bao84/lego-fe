import styles from '../LoginLayout.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LoginFooter() {
    return (
        <footer className={cx("application-footer")}>
            <button className={`${cx("button-base")} ${cx("privacy")}`}>
                <span>Privacy Policy</span>
            </button>
            |
            <button className={`${cx("button-base")} ${cx("cookie")}`}>
                <span>Cookies</span>
            </button>
        </footer>
    );
}

export default LoginFooter;
