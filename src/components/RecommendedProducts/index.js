import styles from '../RecommendedProducts/RecommendedProducts.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef, CSSProperties } from 'react';
import BarLoader from "react-spinners/BarLoader";

import ProductSwiper from './productSwiper';

const cx = classNames.bind(styles);

function RecommendedProducts() {

    const nextBtn = useRef(null);
    const prevBtn = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
    }, []);

    return (
        <div className={cx('recommended-section')}>
            <div>
                <div className={cx('product-recommentaion-container')}>
                    <div className={cx('product-recommentaion-wrapper')}>
                        <div className={cx('product-recommentaion-carousel-wrapper')}>
                            <div className={cx('carousel-header')}>
                                <div className={cx('text-wrapper')}>
                                    <h2 className={cx('title')}>
                                        <span>Recommended For You</span>
                                    </h2>
                                </div>
                            </div>
                            <div className={cx('carousel-wrapper')}>
                                {
                                    isLoading ? 
                                    <BarLoader color={'rgb(255, 207, 0)'} className={cx("loader")} loading={isLoading} size={10} /> 
                                    : 
                                    <div>
                                        <button ref={prevBtn} className={cx('carousel-control-button-left')}>
                                            <svg viewBox="0 0 40 40" className={cx('chevron-round')} data-di-rand="1706861521829">
                                                <g fill="none" fillRule="evenodd">
                                                    <rect className={cx('chevron-round-rect')} opacity="1" width="38" height="38" rx="20"></rect>
                                                    <path className={cx('chevron-round-path')} d="M16.42 9L29 20 16.42 31 15 29.653 26.042 20 15 10.347z"></path>
                                                </g>
                                            </svg>
                                        </button>
                                        <div className={cx('scroll-area-wrapper')}>
                                            <div className={cx('scroll-area')}>
                                                <ProductSwiper nextBtn={nextBtn} prevBtn={prevBtn}></ProductSwiper>
                                            </div>
                                        </div>
                                        <button ref={nextBtn} className={cx('carousel-control-button-right')}>
                                            <svg viewBox="0 0 40 40" className={cx('chevron-round-right')} data-di-rand="1706861521829">
                                                <g fill="none" fillRule="evenodd">
                                                    <rect className={cx('chevron-round-rect')} opacity="1" width="38" height="38" rx="20"></rect>
                                                    <path className={cx('chevron-round-path')} d="M16.42 9L29 20 16.42 31 15 29.653 26.042 20 15 10.347z"></path>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecommendedProducts;
