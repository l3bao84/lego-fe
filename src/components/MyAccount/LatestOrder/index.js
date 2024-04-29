import styles from '../MyAccountLayout.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { useOrders } from '../service';
import { cancelOrder } from '../service';
import { type } from '@testing-library/user-event/dist/type';

const cx = classNames.bind(styles);

const catFilterButton = [
    {
        id: 1,
        name: 'All',
        type: 'ALL'
    },
    {
        id: 2,
        name: 'Pending confirmation',
        type: 'PENDING CONFIRMATION'
    },
    {
        id: 3,
        name: 'Delivering',
        type: 'DELIVERING'
    },
    {
        id: 4,
        name: 'Completed',
        type: 'COMPLETED'
    },
    {
        id: 5,
        name: 'Cancelled',
        type: 'CANCELLED'
    },
];

function LatestOrder() {
    const [selectedButton, setSelectedButton] = useState(1);
    const [orderType, setOrderType] = useState('ALL');
    const {orders, refreshOrders} = useOrders(orderType);

    const handleButtonClick = (index, type) => {
        setSelectedButton(index);
        setOrderType(type);
    };

    const handleCancelOrder = async (orderId) => {
        await cancelOrder(orderId);
        refreshOrders();
    }

    return (
        <div className={cx('latest_order_block')}>
            <h2 className={cx('latest_order_block-text')}>
                <span>Latest Order</span>
            </h2>
            <div className={cx('order_content_cat')}>
                {catFilterButton.map((item) => (
                    <div
                        style={{ borderBottom: selectedButton === item.id ? '#005ad2 2px solid' : '' }}
                        onClick={() => handleButtonClick(item.id, item.type)}
                        key={item.id}
                    >
                        <a className={cx('order_cat_title')}>
                            <span>{item.name}</span>
                        </a>
                    </div>
                ))}
            </div>
            {orders.length > 0 ? (
                orders.map((order, index) => (
                    <div key={index}>
                        {order.productOrderDTOList &&
                            order.productOrderDTOList.map((product, index) => (
                                <div key={index} className={cx('order_content_container')}>
                                    <div className={cx('order_content_header')}>
                                        <div className={cx('order_content_status')}>
                                            <span style={{color: order.status === "CANCELLED" ? "#bd0000" : "rgb(0, 151, 62)"}}>{order.status}</span>
                                            <span style={{color: "#e0e0e0"}}> | </span>
                                            <span>{order.paymentStatus}</span>
                                        </div>
                                        <div className={cx('order_content_product')}>
                                            <div>
                                                <div className={cx('order_content_product-item')}>
                                                    <div className={cx('product_item_order')}>
                                                        <div className={cx('product_item_order-img')}>
                                                            <img
                                                                src={`http://localhost:8080/img/${product.image}`}
                                                            ></img>
                                                        </div>
                                                        <div className={cx('product_item_order-info')}>
                                                            <div className={cx('product_item_name')}>
                                                                <h3>{product.name}</h3>
                                                            </div>
                                                            <div className={cx('product_item_quantity')}>
                                                                <span>{`Qty: ${product.quantity}`}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={cx('product_item_price')}>
                                                        <span>{`$${product.price}`}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        <div className={cx('order_content_total')}>
                            <div className={cx('order_content_total-text')}>
                                <span>
                                    Total:{' '}
                                    <span
                                        style={{ fontSize: '1.5rem', color: 'rgb(0, 151, 62)' }}
                                    >{`$${order.total}`}</span>
                                </span>
                            </div>
                            <div className={cx('order_content_total-action')}>
                                {order.status === 'PENDING CONFIRMATION' ? (
                                    <button onClick={() => handleCancelOrder(order.orderId)} className={cx('cancel_order_button')}>
                                        <span>Cancel</span>
                                    </button>
                                ) : (
                                    <>
                                        <a href="/" className={cx('repurchase_link')}>
                                            Repurchase
                                        </a>
                                        {order.status == 'COMPLETED' && (
                                            <a href="/" className={cx('review_link')}>
                                                Review
                                            </a>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <div className={cx('no_order_content_container')}>
                    <span className={cx('no_order_content-text')}>
                        <span>You currently have no open orders.</span>
                    </span>
                    <a href="/" className={cx('no_order_content-link')}>
                        Start Shopping
                    </a>
                </div>
            )}
        </div>
    );
}

export default LatestOrder;
