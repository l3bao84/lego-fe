import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { aboutUs, attactions, supports, moreUs, privacies } from '../commonData';
import FaceBookMsg from '~/components/FacebookMessenger';

const cx = classNames.bind(styles);

function Footer() {
    const [emailSub, setEmailSub] = useState('');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const emailRef = useRef();
    const errorRef = useRef();

    const handleInputEmail = (e) => {
        setEmailSub(e.target.value);
        if (validateEmail(emailSub)) {
            emailRef.current.style.borderColor = '#008537';
            emailRef.current.style.borderWidth = '3px';
            errorRef.current.textContent = '';
        } else {
            emailRef.current.style.borderColor = '#d0021b';
            emailRef.current.style.borderWidth = '3px';
            errorRef.current.textContent = 'Please enter a valid email address';
        }
    };

    return (
        <footer>
            <FaceBookMsg/>
            <div className={cx('footer-1')}>
                <div className={cx('footer-section')}>
                    <div className={cx('footer-section-wrapper')}>
                        <div className={cx('wrapper-logo-region')}>
                            <div className={cx('logo-region')}>
                                <div className={cx('logo-img2')}>
                                    <img src="https://nidas.hi.link/_assets/site-data/ops_Zmctdq5vlG64qvFFiw/images/9319c80b29e29af1aa255c1750ab1ebca33a904137e5ed04e25e93fd646c9cdf.png" alt="" />
                                </div>
                                <div className={cx('region')}>
                                    <button>
                                        <FontAwesomeIcon icon={faLocationDot} />
                                        Viet Nam
                                    </button>
                                </div>
                            </div>
                            <div className={cx('gift-cards')}>
                                <a href="#">
                                    <span>Gift Cards</span>
                                </a>
                                <a href="#">
                                    <span>Nidas Catalogs</span>
                                </a>
                                <a href="#">
                                    <span>Find a Nidas Store</span>
                                </a>
                            </div>
                        </div>
                        <div className={cx('wrapper-supports')}>
                            <div className={cx('support')}>
                                <h2 className={cx('support-title')}>ABOUT US</h2>
                                <ul className={cx('support-list')}>
                                    {aboutUs.map((item) => (
                                        <li key={item.id} className={cx('support-list-item')}>
                                            <a href="#">{item.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={cx('support')}>
                                <h2 className={cx('support-title')}>SUPPORT</h2>
                                <ul className={cx('support-list')}>
                                    {supports.map((item) => (
                                        <li key={item.id} className={cx('support-list-item')}>
                                            <a href="#">{item.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={cx('support')}>
                                <h2 className={cx('support-title')}>ATTRACTIONS</h2>
                                <ul className={cx('support-list')}>
                                    {attactions.map((item) => (
                                        <li key={item.id} className={cx('support-list-item')}>
                                            <a href="#">{item.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={cx('support')}>
                                <h2 className={cx('support-title')}>MORE FROM US</h2>
                                <ul className={cx('support-list')}>
                                    {moreUs.map((item) => (
                                        <li key={item.id} className={cx('support-list-item')}>
                                            <a href="#">{item.title}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-2')}>
                <div className={cx('email-social')}>
                    <div className={cx('email-sub')}>
                        <div className={cx('email-sub-content')}>
                            <span>SUBSCRIBE TO Nidas® SHOP EMAILS</span>
                            <div className={cx('email-input-container')}>
                                <div className={cx('input-button')}>
                                    <div ref={emailRef} className={cx('email')}>
                                        <input
                                            type="text"
                                            name="email"
                                            id="emailInput"
                                            placeholder="Your email address"
                                            onChange={(e) => handleInputEmail(e)}
                                            value={emailSub}
                                        />
                                        <div className={cx('email-sub-error')}>
                                            <span ref={errorRef} className={cx('email-sub-error-status')}></span>
                                        </div>
                                    </div>
                                    <a href="#" className={cx('btn-go')}>
                                        <FontAwesomeIcon icon={faChevronRight} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('social')}>
                        <div className={cx('social-icon')}>
                            <span>FOLLOW US</span>
                            <div className={cx('social-button')}>
                                <div className={cx('social-button-icon')}>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                </div>
                                <div className={cx('social-button-icon')}>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </div>
                                <div className={cx('social-button-icon')}>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </div>
                                <div className={cx('social-button-icon')}>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-3')}>
                <div className={cx('privacies')}>
                    <ul className={cx('privacy-list')}>
                        {privacies.map((item) => (
                            <li key={item.id} className={cx('privacy-list-item')}>
                                <a href="#">{item.title}</a>
                            </li>
                        ))}
                    </ul>
                    <p>
                        Nidas System A/S, DK-7190 Billund, Denmark. Must be 18 years or older to purchase online. Nidas,
                        the Nidas logo, the Minifigure, DUPLO, LEGENDS OF CHIMA, NINJAGO, BIONICLE, MINDSTORMS and MIXELS
                        are trademarks and copyrights of the Nidas Group. ©2022 The Nidas Group. All rights reserved. Use
                        of this site signifies your agreement to the terms of use.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
