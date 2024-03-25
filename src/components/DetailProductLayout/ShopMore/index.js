import styles from '../DetailProductLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ShopMore({ categoryName }) {
    return (
        <div>
            <div className={cx('shop-more-like-this-container')}>
                Shop more like this:
                <ul className={cx('shop-more-like-this-list')}>
                    <li>
                        <button className={cx('category')}>
                            <span>{categoryName}</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ShopMore;
