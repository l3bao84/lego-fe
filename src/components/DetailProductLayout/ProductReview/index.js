import styles from '../DetailProductLayout.module.scss';
import classNames from 'classnames/bind';
import { useDetailProduct, calculateReviewCounts } from '../service';
import { useState, useEffect, useRef } from 'react';
import Rating from '~/components/Layout/Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ProductReview() {
    const product = useDetailProduct();
    const [isActiveIntro, setIsActiveIntro] = useState(false);
    const [reviewCounts, setReviewCounts] = useState({ 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 });
    const [hoverIndex, setHoverIndex] = useState(0);
    const [clickIndex, setClickIndex] = useState(0);
    const [ratingValue, setRatingValue] = useState(0)
    const inputImageRef = useRef()
    const [selectedFiles, setSelectedFiles] = useState([]);

    useEffect(() => {
        if (product && Array.isArray(product.reviews)) {
            const newReviewCounts = calculateReviewCounts(product.reviews);
            setReviewCounts(newReviewCounts);
        }
    }, [product]);

    const calculateAverageRating = (reviews) => {
        if (!reviews || reviews.length === 0) {
            return 0;
        }

        const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
        return totalRating / reviews.length;
    };

    const handleChangeFile = (e) => {
        const files = e.target.files;
        setSelectedFiles(Array.from(files));

      };

    const handleUploadImages = (e) => {
        e.preventDefault();
        inputImageRef.current.click();
    };

    const hanleSubmitReview = (e) => {
        e.preventDefault();
    };

    const handleMouseEnter = (index) => {
        setHoverIndex(index);
    };
    
    const handleMouseLeave = () => {
        if (clickIndex === 0) {
          setHoverIndex(0);
        }
    };
    
    const handleClick = (index) => {
        setClickIndex(index)
        setRatingValue(index)
    };

    return (
        <div>
            <button onClick={() => setIsActiveIntro(!isActiveIntro)} className={cx('product-accordion-toggle-button')}>
                <div className={cx('product-accordion-title')}>
                    <div className={cx('product-accordion-title-content')}>
                        <div className={cx('product-accordion-title-row')}>
                            <h2>Customer Reviews</h2>
                        </div>
                        <div
                            className={`${cx('plus-minus-icon-intro')} ${cx(isActiveIntro ? 'activeRotate' : '')}`}
                        ></div>
                    </div>
                </div>
            </button>
            <div className={`${cx('animate-height-wrapper')} ${cx(isActiveIntro ? 'show' : '')}`}>
                <div className={cx('accordian-content')}>
                    <div className={cx('max-width-container')}>
                        <div className={cx('product-review-wrapper')}>
                            <div className={cx('product-review-stats-wrapper')}>
                                <div className={cx('overall-rating')}>
                                    <div className={cx('overall-rating-bar')}>
                                        <span className={cx('rating-bar-label')}>Overall Rating</span>
                                        <div className={cx('rating-container-detail')}>
                                            <Rating
                                                averageRating={
                                                    product &&
                                                    product.reviews &&
                                                    calculateAverageRating(product.reviews)
                                                }
                                            ></Rating>
                                            <span className={cx('rating-bar-text')}>
                                                {product &&
                                                    product.reviews &&
                                                    `${calculateAverageRating(product.reviews)} (${
                                                        product.reviews.length
                                                    } Reviews)`}
                                            </span>
                                        </div>
                                    </div>
                                    <div className={cx('overall-rating-count')}>
                                        <span className={cx('product-review-count')}></span>
                                    </div>
                                </div>
                                <div className={cx('breakdown-wrapper')}>
                                    <div className={cx('rating-detail')}>
                                        <h3 className={cx('rating-detail-title')}>Rating</h3>
                                        {Object.keys(reviewCounts)
                                            .sort((a, b) => b - a)
                                            .map((key) => (
                                                <button key={key} className={cx('rating-box')}>
                                                    <span className={cx('star-count')}>{`${key} stars`}</span>
                                                    <div className={cx('percentage-bar-wrapper')}>
                                                        <div className={cx('progress-bar-wrapper')}>
                                                            <div className={cx('track-wrapper')}>
                                                                <div className={cx('track')}>
                                                                    {/* fill="112.00000000000001" */}
                                                                    <div
                                                                        style={{
                                                                            width: `${
                                                                                product &&
                                                                                product.reviews &&
                                                                                (reviewCounts[key] /
                                                                                    product.reviews.length) *
                                                                                    100
                                                                            }%`,
                                                                        }}
                                                                        fill=""
                                                                        className={cx('fill')}
                                                                    ></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <span
                                                        className={cx('review-count')}
                                                    >{`${reviewCounts[key]} Reviews`}</span>
                                                </button>
                                            ))}
                                    </div>
                                    <div className={cx('write-review-form')}>
                                        <h3 className={cx('rating-detail-title')}>Write a Review</h3>
                                        <form encType="multipart/form-data" method="post">
                                            <div className={cx('review-rating-set')}>
                                                <div className={cx('review-field-rating')}>
                                                    <p className={cx('review-field-rating-title')}>Overall rating</p>
                                                    <div className={cx('styled-rating-bar')}>
                                                        <input value={ratingValue} type="hidden" name="rating" id="ratingInput" />
                                                        <div className={cx('rating-bar-container')}>
                                                            {[1, 2, 3, 4, 5].map((index) => (
                                                                <div
                                                                    key={index}
                                                                    className={cx('rating-segment')}
                                                                    onMouseEnter={() => handleMouseEnter(index)}
                                                                    onMouseLeave={handleMouseLeave}
                                                                    onClick={() => handleClick(index)}
                                                                >
                                                                    <div className={cx('segment-container')}>
                                                                        <FontAwesomeIcon
                                                                            style={{
                                                                                color:
                                                                                    index <= hoverIndex
                                                                                        ? '#FFD700'
                                                                                        : '#EBEBEB',
                                                                            }}
                                                                            icon={fasStar}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx('review-content-field')}>
                                                <p className={cx('review-field-rating-title')}>Write your review</p>
                                                <label htmlFor="" className={cx('text-area-review')}>
                                                    <textarea name="reviewContent" id="" cols="30" rows="10"></textarea>
                                                    <span className={cx('check-required')}></span>
                                                    <div className={cx('text-area-status')}></div>
                                                </label>
                                            </div>
                                            <div className={cx('choose-image')}>
                                                <p className={cx('review-field-rating-title')}>Share a photo</p>
                                                <button
                                                    onClick={(e) => handleUploadImages(e)}
                                                    className={cx('choose-image-button')}
                                                >
                                                    Upload an image
                                                </button>
                                                <input
                                                    ref={inputImageRef}
                                                    type="file"
                                                    name="files"
                                                    accept="image/png, image/jpeg"
                                                    className={cx('image-review-upload')}
                                                    onChange={handleChangeFile}
                                                    multiple
                                                />
                                                <div className={cx('feedback-container')}></div>
                                                <ul className={cx('image-reviews')}>
                                                {selectedFiles.map((file, index) => (
                                                    <p key={index}>{file.name}</p>
                                                ))}
                                                </ul>
                                            </div>
                                            <div className={cx('send-review-container')}>
                                                <input
                                                    onClick={(e) => hanleSubmitReview(e)}
                                                    type="submit"
                                                    value="Submit Your Review"
                                                ></input>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductReview;
