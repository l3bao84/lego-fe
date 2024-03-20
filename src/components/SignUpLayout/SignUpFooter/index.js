import styles from '../SignUpLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SignUpFooter() {
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

export default SignUpFooter;
