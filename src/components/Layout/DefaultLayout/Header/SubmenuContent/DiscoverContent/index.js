import styles from '../SubMenuContent.module.scss'
import classNames from 'classnames/bind';
import { useState,useEffect,useRef } from 'react';
import { discovers } from '../../../commonData';

const cx = classNames.bind(styles);

function DiscoverContent() {

    return (
        <div className={cx('submenu-container')}>
            <ul>
                {discovers.map((discover) => (
                    <li key={discover.id} className={cx('submenu-item')}>
                        <div className={cx('submenu-button-wrapper')}>
                            <a href="#" className={cx('submenu-button-link')}>
                                {discover.title}
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DiscoverContent;
