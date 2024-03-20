import styles from './SignUpLayout.module.scss'
import classNames from 'classnames/bind';
import SignUpHeader from './SignUpHeader';
import SignUpMain from './SignUpMain';
import SignUpFooter from './SignUpFooter';

const cx = classNames.bind(styles);

function SignUpLayout() {

    return (
        <div className={cx("app")}>
            <div className={cx("theme-provider")}>
                <div className={cx("main")}>
                    <div className={cx("route-section")}>
                        <div className={cx("page")}>
                            <div className={cx("horizon-line")}></div>
                            <div className={cx("page-content")}>
                                <SignUpHeader></SignUpHeader>
                                <SignUpMain></SignUpMain>
                                <SignUpFooter></SignUpFooter>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUpLayout;