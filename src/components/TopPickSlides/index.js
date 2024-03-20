import { useState, useEffect } from 'react';
import styles from './TopPickSlides.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const cx = classNames.bind(styles);

function TopPickSlides() {
    const [topPicks, setTopPicks] = useState([]);

    useEffect(() => {
        const fetchTopPicks = () => {
            fetch('http://localhost:8080/product/topPicks')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((result) => {
                    setTopPicks(result);
                })
                .catch((error) => {
                    console.error('Error fetching top picks:', error);
                });
        };

        fetchTopPicks();
    }, []);

    return (
        <div className={cx('slides')}>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination = {{clickable: true}}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}

            >
                <SwiperSlide>
                    <div className={cx('slide')}>
                        <div className={cx('image-slide')}>
                            <img src="http://localhost:8080/img/445228.png" alt="" />
                        </div>
                        <div className={cx('overlay-text')}>Top Selling Items</div>
                    </div>
                </SwiperSlide>
                {topPicks &&
                    topPicks.map((item) => (
                        <SwiperSlide key={item.productId}>
                            <div className={cx('slide')}>
                                <div className={cx('trending-pro-infor')}>
                                    <div className={cx('trending-pro-infor-detail')}>
                                        <div className={cx('infor-detail-name')}>{item.productName}</div>
                                        <div className={cx('infor-detail-price')}>{`$${item.price}`}</div>
                                        <div className={cx('infor-detail-action')}>
                                            <a className={cx("detail-action-link")}>
                                                Shop now
                                                <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  data-di-res-id="dc762c40-c286e5f8" data-di-rand="1707402895159">
                                                    <path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('trending-pro-img')}>
                                    <div className={cx('brick-1')}></div>
                                    <div className={cx('brick-2')}></div>
                                    <div className={cx('brick-3')}></div>
                                    <div className={cx('brick-4')}></div>
                                    <div className={cx('brick-5')}></div>
                                    <div className={cx('brick-6')}></div>
                                    <img src={`http://localhost:8080/img/${item.images[0]}`} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}

export default TopPickSlides;
