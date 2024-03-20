import styles from '../SubMenuContent.module.scss'
import classNames from 'classnames/bind';
import { useState,useEffect,useRef } from 'react';

const cx = classNames.bind(styles);

function ShopContent() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = () => {
            fetch('http://localhost:8080/category')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((result) => {
                    setCategories(result);
                })
                .catch((error) => {
                    console.error('Error fetching categories:', error);
                });
        };

        fetchCategories();
    }, []);

    return (
        <div className={cx('submenu-container')}>
            <ul>
                {categories.map((category) => (
                    <li key={category.categoryId} className={cx('submenu-item')}>
                        <div className={cx('submenu-button-wrapper')}>
                            <a href="#" className={cx('submenu-button-link')}>
                                {category.categoryName}
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ShopContent;
