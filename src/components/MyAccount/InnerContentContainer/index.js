import styles from '../MyAccountLayout.module.scss'
import classNames from 'classnames/bind';
import React from 'react';
import LatestOrder from '../LatestOrder';
import AccountOverview from '../AccountOverview';

const cx = classNames.bind(styles);

function InnerContentContainer({ data }) {

    return (
        <div className={cx("inner-content-container")}>
            <nav className={cx("breadcrumbs")}>
                <ol>
                    <li className={cx("breadcrumb")}>
                        <span><a href={data ? 'my-account' : '/'}>{data ? data.root : "Home"}</a></span>
                        <div></div>
                    </li>
                    <li className={cx("breadcrumb")}>
                        <span>
                            {data ? data.current : "Account Overview"}
                        </span>
                    </li>
                </ol>
            </nav>
            <h1>
                <span>{data ? data.title : "My Account"}</span>
            </h1>
            {data ? data.content.map((component, index) => (
                <React.Fragment key={index}>
                    {component}
                </React.Fragment>
               
            )) : (
                    <>
                        <AccountOverview></AccountOverview>
                    </>
                )
            }
            <div className={cx("support-block")}>
                <img src="http://localhost:8080/img/ball-icon.png" className={cx("support-block_image")}></img>
                <span className={cx("support-block_style")}>
                    <span>Support</span>
                </span>
                <div className={cx("horizontal_separator")}></div>
                <div className={cx("support-link-container")}>
                    <div className={cx("support-link-row")}>
                        <a className={cx("link-style-anchor")}>Deliveries and Returns</a>
                        <a className={cx("link-style-anchor")}>FAQs</a>
                    </div>
                    <div className={cx("support-link-row")}>
                        <a className={cx("link-style-anchor")}>Contact</a>
                        <a className={cx("link-style-anchor")}>Replacement Parts and Instructions</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InnerContentContainer;
