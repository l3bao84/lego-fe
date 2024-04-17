import styles from './LoginLayout.module.scss'
import classNames from 'classnames/bind';
import LoginHeader from './LoginHeader';
import LoginMain from './LoginMain';
import LoginFooter from './LoginFooter';

const cx = classNames.bind(styles);

function LoginLayout() {
    return (
        <div className={cx("app")}>
            <div className={cx("theme-provider")}>
                <div className={cx("main")}>
                    <div className={cx("route-section")}>
                        <div className={cx("page")}>
                            <div className={cx("horizon-line")}></div>
                            <div className={cx("page-content")}>
                                
                                <LoginHeader/>
                                <LoginMain/>
                                <LoginFooter/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginLayout;