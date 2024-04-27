import styles from '../CheckoutLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CheckoutFooter() {
    return (
        <footer className={cx("footer_container")}>
            <div className={cx("footer_max-with")}>
                <div className={cx("copy_container")}>
                    <h2 className={cx("service_text")}>
                        <span>Customer Service</span>
                    </h2>
                    <a>
                        <span>0338171052 (Vietnam)</span>
                    </a>
                    <p className={cx("copy_text")}>
                        <span>Nidas Brand Retail, Inc. Hoang Dieu, Chuong My, Ha Noi, Viet Nam. Must be 18 years or older to purchase online.</span>
                    </p>
                    <p className={cx("copy_text")}>
                        <span>Nidas, the Nidas logo, the Athlete Figure, SPORTY RACKETS, CHAMPIONS OF TENNIS, SOCCER KICKS, BASKETBALL HOOPS
                            , TRACK RUNNERS, and FITNESS GEAR are trademarks and copyrights of the Nidas Group. ©2024 The Nidas Group. All rights reserved. Use of this site signifies your agreement to the Terms of Use.</span>
                    </p>
                </div>
                <div className={cx("icon_container")}>
                    <div className={cx("icon_holder")}>
                        <img src='https://assets.lego.com/logos/v4.6.0/payments-paypal-card.svg'></img>
                        <img src='https://assets.lego.com/logos/v4.6.0/payments-visa-card.svg'></img>
                        <img src='https://assets.lego.com/logos/v4.6.0/payments-mastercard-card.svg'></img>
                        <img src='https://assets.lego.com/logos/v4.6.0/payments-discover-card.svg'></img>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default CheckoutFooter;