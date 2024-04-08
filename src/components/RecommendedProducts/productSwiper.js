import styles from '../RecommendedProducts/RecommendedProducts.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import Rating from '../Layout/Rating';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom';
import useAuth from '~/auth';
import { useCart } from '../CartList/service';

const cx = classNames.bind(styles);

function ProductSwiper({ nextBtn, prevBtn, onDataUpdate }) {

    const [products, setProducts] = useState([]);
    const [swiper, setSwiper] = useState(null);    
    const isAuthenticated = useAuth()
    const navigate = useNavigate() 
    const { reloadCart } = useCart()

    useEffect(() => {
        if (swiper && swiper.navigation) {
            const checkNavigation = () => {
                swiper.isBeginning === true
                    ? (swiper.navigation.prevEl.style.visibility = 'hidden')
                    : (swiper.navigation.prevEl.style.visibility = 'visible');
                swiper.isEnd === true
                    ? (swiper.navigation.nextEl.style.visibility = 'hidden')
                    : (swiper.navigation.nextEl.style.visibility = 'visible');
            };

            checkNavigation();

            swiper.on('slideChange', checkNavigation);

            return () => {
                swiper.off('slideChange', checkNavigation);
            };
        }
    }, [swiper]);

    function calculateAverageRating(reviews) {
        if (!reviews || reviews.length === 0) {
            return 0;
        }

        const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
        return totalRating / reviews.length;
    }

    useEffect(() => {
        const fetchProducts = () => {
            fetch('http://localhost:8080/product/recommendations')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then((result) => {
                    setProducts(result);
                })
                .catch((error) => {
                    console.error('Error fetching products:', error);
                });
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (id, quantity = 1) => {
        
        if(!isAuthenticated) {
            navigate('/login')
        }else {
            const postData = {
                id,
                quantity,
            };
    
            fetch('http://localhost:8080/carts', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
                })
            .then(response => {
                if (response.status !== 201) {
                    throw new Error('Failed to add product to cart');
                }
                reloadCart()
                return response.json();
            })
            .then(data => {
                onDataUpdate(data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }

    }

    return (
            <Swiper
                modules={[Navigation]}
                onSwiper={setSwiper}
                spaceBetween={0}
                slidesPerView={4}
                navigation={{
                    nextEl: nextBtn.current,
                    prevEl: prevBtn.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.nextEl = nextBtn.current;
                    swiper.params.navigation.prevEl = prevBtn.current;
                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
            >
                {products.map((product) => (
                    <SwiperSlide key={product.productId}>
                        <div className={cx('product-carousel-wrapper')}>
                            <div className={cx('product-leaf-wrapper')}>
                                <div className={cx('column')}>
                                    <div className={cx('detail-row')}>
                                        <div className={cx('image-row')}>
                                            <a href={`http://localhost:3000/product/${product.productId}`} className={cx('product-image-link')}>
                                                <div className={cx('product-lazy-image')}>
                                                    <picture className={cx('lazy-image-picture')}>
                                                        <img src={`http://localhost:8080/img/${product.images[0]}`}></img>
                                                    </picture>
                                                </div>
                                            </a>
                                            <div className={cx('inner')}>
                                                <div className={cx('badge-container')}>
                                                    <span>New</span>
                                                </div>
                                            </div>
                                            <div className={cx('wish-list-row')}>
                                                <div className={cx('wishlist-dropdown-wrapper')}>
                                                    <div className={cx('wishlist-toggle-button-wrapper')}>
                                                        <button className={cx('wishlist-button')}>
                                                            <svg
                                                                width="100%"
                                                                height="100%"
                                                                viewBox="0 0 40 40"
                                                                alt=""
                                                                className={cx('icon-styled')}
                                                                data-di-rand="1706861521825"
                                                            >
                                                                <rect fill="#F8F8F8" width="40" height="40" rx="20"></rect>
                                                                <path
                                                                    d="M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126"
                                                                    fill="#006DB7"
                                                                ></path>
                                                                <path
                                                                    d="M26.84 20.417L20 27.204l-6.84-6.787A3.67 3.67 0 0 1 12 17.739C12 15.677 13.71 14 15.815 14a3.82 3.82 0 0 1 2.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0 1 24.186 14C26.289 14 28 15.677 28 17.739a3.673 3.673 0 0 1-1.16 2.678M19.986 30l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 0 0 1.78-4.126C30 14.569 27.398 12 24.187 12A5.829 5.829 0 0 0 20 13.762 5.827 5.827 0 0 0 15.815 12C12.604 12 10 14.569 10 17.739a5.68 5.68 0 0 0 1.782 4.126"
                                                                    fill="#006DB7"
                                                                ></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('detail-content')}>
                                            <a href={`http://localhost:3000/product/${product.productId}`} className={cx('product-leaf-title')}>
                                                <h3>
                                                    <span>{product.productName}</span>
                                                </h3>
                                            </a>
                                            <div className={cx('detail-footer')}>
                                                <div className={cx('detail-footer-content')}>
                                                    <div className={cx('rating-row')}>
                                                        <div>
                                                            <div className={cx('rating-bar-container')}>
                                                                <div className={cx('segment-container')}>
                                                                    {/* <img src='https://www.lego.com/_next/static/images/starActive-8f24279ea4ef0bb5bb5e8af9fbab2aab.svg'></img> */}
                                                                    <Rating
                                                                        averageRating={calculateAverageRating(
                                                                            product.reviews,
                                                                        )}
                                                                    ></Rating>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={cx('price-row')}>
                                                        <div className={cx('price-wrapper')}>
                                                            <span className={cx('price-text')}>
                                                                <span>{`$${product.price}`}</span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={cx('action-row')}>
                                                    <button onClick={() => handleAddToCart(product.productId)} className={cx('addToCart-button')}>
                                                        <div>Add to Bag</div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
   );
}

export default ProductSwiper;
