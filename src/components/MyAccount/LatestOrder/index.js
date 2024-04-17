import styles from '../MyAccountLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function LatestOrder() {

    return (    
        <div className={cx("latest_order_block")}>
            <h2 className={cx("latest_order_block-text")}>
                <span>Latest Order</span>
            </h2>
            <div className={cx("order_content_container")}>
                <span className={cx("no_order_content-text")}>
                    <span>You currently have no open orders.</span>
                </span>
                <a href='/' className={cx("no_order_content-link")}>Start Shopping</a>
            </div>
        </div>
    )
}

export default LatestOrder