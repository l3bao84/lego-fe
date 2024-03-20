import styles from '../SubMenuContent.module.scss'
import classNames from 'classnames/bind';
import { useState,useEffect,useRef } from 'react';
import { helps } from '../../../commonData';

const cx = classNames.bind(styles);

function HelpContent() {

    return (
        <div className={cx('submenu-container')}>
            <ul>
                {helps.map((help) => (
                    <li key={help.id} className={cx('submenu-item')}>
                        <div className={cx('submenu-button-wrapper')}>
                            <a href="#" className={cx('submenu-button-link')}>
                                {help.title}
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HelpContent;
