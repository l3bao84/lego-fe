import styles from '../MyAccountLayout.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function AccountOverview() {

    return (
        <div>
            <h2 className={cx("personal_infor-title")}>This is your personal information</h2>
            <div className={cx("personal_info")}>
                <div className={cx("main_info")}>
                    <div className={cx("info_card")}>
                        <div className={cx("an_info_card")}>
                            <div className={cx("infor_horizontal_layout")}>
                                <div>
                                    <p className={cx("info_label")}>Lê Bảo</p>
                                    <p className={cx("info_label")}>bao08042002@gmail.com</p>
                                    <p className={cx("info_label")}>xã Hoàng Diệu, huyện Chương Mỹ, thành phố Hà Nội</p>
                                    <p className={cx("info_label")}>0338171052</p>
                                    <p className={cx("info_label")}>Order is being delivered: 2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountOverview;
