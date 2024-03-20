import styles from '../DetailProductLayout.module.scss';
import classNames from 'classnames/bind';
import { useDetailProduct } from '../service';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ProductInfor() {

    const product = useDetailProduct()
    const [isActiveIntro, setIsActiveIntro] = useState(false)

    return (
        <div>
            <button onClick={() => setIsActiveIntro(!isActiveIntro)} className={cx("product-accordion-toggle-button")}>
                <div className={cx("product-accordion-title")}>
                    <div className={cx("product-accordion-title-content")}>
                        <div className={cx("product-accordion-title-row")}>
                            <h2>Introductions & Descriptions</h2>
                        </div>
                        <div 
                        className={`${cx("plus-minus-icon-intro")} ${cx(isActiveIntro ? "activeRotate" : "")}`}
                        ></div>
                    </div>
                </div>
            </button>
            <div 
            className={`${cx("animate-height-wrapper")} ${cx(isActiveIntro ? "show" : "")}`}
            >
                <div className={cx("accordian-content")}>
                    <div className={cx("max-width-container")}>
                        <div className={cx("product-intro-des-body")}>
                            <div className={cx("product-intro-des-copy")}>
                                <div className={cx("product-intro-des-copy-text")}>
                                    <span className={cx("markup")}>
                                        <p>{(product && product.productDescription) && `${product.productDescription}`}</p>
                                    </span>
                                </div>
                            </div>
                            <div className={cx("product-intro-des-cta")}>
                                <img src={product &&
                                        product.images &&
                                        `http://localhost:8080/img/${product.images[0]}`} alt="" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductInfor;
