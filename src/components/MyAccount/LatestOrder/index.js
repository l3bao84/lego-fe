import styles from '../MyAccountLayout.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);

const catFilterButton = [
    {
        id: 1,
        name: 'All',
    },
    {
        id: 2,
        name: 'Pending confirmation',
    },
    {
        id: 3,
        name: 'Delivering',
    },
    {
        id: 4,
        name: 'Completed',
    },
    {
        id: 5,
        name: 'Cancelled',
    },
];
//style={{borderBottom: " #005ad2 2px solid"}}

function LatestOrder() {

    const [selectedButton, setSelectedButton] = useState(1)

    const handleButtonClick = (index) => {
        setSelectedButton(index)
    }

    return (
        <div className={cx('latest_order_block')}>
            <h2 className={cx('latest_order_block-text')}>
                <span>Latest Order</span>
            </h2>
            <div className={cx('order_content_cat')}>
                {catFilterButton.map((item) => (
                    <div
                    style={{borderBottom: selectedButton === item.id ? "#005ad2 2px solid" : ""}} 
                    onClick={() => handleButtonClick(item.id)} 
                    key={item.id}
                    >
                        <a className={cx('order_cat_title')}>
                            <span>{item.name}</span>
                        </a>
                    </div>
                ))}
            </div>
            <div className={cx('order_content_container')}>
                {/* <span className={cx('no_order_content-text')}>
                    <span>You currently have no open orders.</span>
                </span>
                <a href="/" className={cx('no_order_content-link')}>
                    Start Shopping
                </a> */}
            </div>
        </div>
    );
}

export default LatestOrder;
