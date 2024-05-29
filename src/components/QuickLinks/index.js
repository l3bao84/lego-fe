import styles from './QuickLinks.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';

const cx = classNames.bind(styles);

function QuickLinks() {
    const [quickLinks, setQuickLinks] = useState([]);

    useEffect(() => {
        const fetchQuickLinks = () => {
            fetch('http://localhost:8080/category/quickLinks')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((result) => {
                setQuickLinks(result);
            })
            .catch((error) => {
                console.error('Error fetching quick links:', error);
            });
        };

        fetchQuickLinks();
    }, []);

    return (
        <div className={cx('category')}>
            <ul className={cx('category-items')}>
                {/* Static list items */}
                {quickLinks.map((item) => (
                    <li key={item.categoryId} className={cx('category-item')}>
                        <div className={cx('category-item-infor')}>
                            <a href="#">
                                <img src={`http://localhost:8080/img/${item.image}`} alt="" />
                                <span>{item.categoryName}</span>
                            </a>
                        </div>
                    </li>
                ))}
                <li className={cx('category-item')}>
                    <div className={cx('category-item-infor')}>
                        <a href="#">
                            <img
                                src="https://www.lego.com/cdn/cs/set/assets/bltd291172dfec6f025/VIP-QL-202306-Quicklink.png?fit=crop&format=webply&quality=80&width=80&height=65&dpr=1.5"
                                alt="VIP"
                            />
                            <span>VIP</span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default QuickLinks;
