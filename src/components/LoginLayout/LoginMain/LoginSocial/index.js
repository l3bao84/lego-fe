import styles from '../LoginMain.module.scss'
import classNames from 'classnames/bind';
import { data } from './SocialLogin';

const cx = classNames.bind(styles);

function LoginSocial() {

    const handleSocialLogin = (e) => {
        e.preventDefault();
    }

    return (
        <div className={cx("card-container")}>
            <div className={`${cx("card-padding")} ${cx("fn-card")}`}>
                <ul className={cx("list-container")}>
                    {data.map((item) => (
                        <li key={item.id} className={cx("list-item")}>
                            <button onClick={(e) => handleSocialLogin(e)} className={cx("button-base-login")}>
                                <span className={cx("button-icon-start")}>
                                    <span className={cx("icon")}>
                                        {item.icon}
                                    </span>
                                </span>
                                <span className={cx("button-textbase-login")}>{item.title}</span>
                                <span className={cx("button-icon-end")}>
                                    <span className={cx("icon-color-primary")}>
                                        {item.navigate}
                                    </span>
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default LoginSocial;
