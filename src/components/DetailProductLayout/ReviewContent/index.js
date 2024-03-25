import styles from '../DetailProductLayout.module.scss';
import classNames from 'classnames/bind';
import { format } from 'date-fns';
import Rating from '~/components/Layout/Rating';
import { useState, useRef } from 'react';
import { useProductReviews } from '../service';

const cx = classNames.bind(styles);

function ReviewContent() {

    const [isShowmore, setIsShowmore] = useState(false)
    const contentRef = useRef()
    const [page, setPage] = useState(0)
    const {reviews, totalPages} = useProductReviews(page)

    const convertDateTime = (data) => {
        const date = new Date(data);
        return format(date, 'MMMM do, yyyy');
    }

    const handlePageChange = (value) => {
        setPage(value)
    }

    const calculateContentLength = (data) => {
        return (data.length > 700) 
    }

    const handleShowmore = () => {
        setIsShowmore(!isShowmore)
    }

    return (
        <div>
            <p className={cx("reviews-title")}>Reviews</p>
            <ul>
                {reviews.map(review => (
                        <li key={review.id} className={cx("product-review-container")}>
                            <p className={cx("product-review-text")}><span>{convertDateTime(review.reviewDate)}</span></p>
                            <div>
                                <div className={cx("rating-container")}>
                                    <Rating averageRating={review.rating}></Rating>
                                    <span>{review.rating}</span>
                                </div>
                            </div>
                            <p className={cx("product-review-text")}><span itemProp="author">{review.user && `${review.user.firstName} ${review.user.lastName}`}</span></p>
                            <div className={cx("product-review-info-wrapper")}>
                                <div className={cx("product-review-info")}>
                                    <div className={cx("product-review-info-animate")}>
                                        <div ref={contentRef} style={{maxHeight: isShowmore ? 'none' : '7.4rem'}} className={cx("product-review-info-lineclamp")}>
                                            <div>
                                                <span className={cx("text-base")}>
                                                    <span>{review.content}</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    {calculateContentLength(review.content) && (
                                        <button onClick={() => handleShowmore()} className={cx("readmore")} kind="ghost" type="submit">
                                            {isShowmore ? 'Show Less' : 'Read more'}
                                        </button>
                                    )}
                                    <div className={cx("product-review-photobox")}>
                                        {review.imageReviews && 
                                            review.imageReviews.map((image, index) => 
                                                (
                                                    <button key={index} className={cx("product-review-photo")}>
                                                        <div className={cx("lazy-image-container")}>
                                                            <img alt="" src={`http://localhost:8080/img/${image}`}/>
                                                        </div>
                                                    </button>
                                                )
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <p className={cx("product-review-text")}>Was this helpful?</p>
                            <div className={cx("product-review-helpfull")}>
                                <button className={cx("rating-button")}>
                                    <div className={cx("flex-wrapper")}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M.993 20h4V8H0l.993 12zm18.928-8.645l-1.737 6.535A2.727 2.727 0 0 1 15.519 20H5.993V8.021l1.719-6.196a2.152 2.152 0 0 1 4.28.328V8h5.264a2.739 2.739 0 0 1 2.665 3.355z" fill="#CACACA" fillRule="evenodd"></path></svg>
                                        <div className={cx("spacing-jay")}></div>
                                        <span color="grey_dark">31</span>
                                    </div>
                                </button>
                                <button className={cx("rating-button")}>
                                    <div className={cx("flex-wrapper")}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M.993 0h4v12H0L.993 0zM19.92 8.645L18.184 2.11A2.727 2.727 0 0 0 15.519 0H5.993v11.979l1.719 6.196a2.152 2.152 0 0 0 4.28-.328V12h5.264a2.739 2.739 0 0 0 2.665-3.355z" fill="#CACACA"></path></g></svg>
                                        <div className={cx("spacing-jay")}></div>
                                        <span color="grey_dark">6</span>
                                    </div>
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
            <div className={cx("pagination-container")}>
                <nav className={cx("page-nav")}>
                    <a 
                    className={cx("pagination-prev", { "disabled": page === 0 })}
                    onClick={() => page !== 0 && handlePageChange(page - 1)}
                    >
                        <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" data-di-rand="1693311261883" data-di-res-id="5d20260e-82e80def"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path>
                        </svg>
                    </a>
                    <div className={cx("pagination-page-link")}>
                        {Array.from({ length: totalPages }, (_, i) => (
                            <a key={i} onClick={() => handlePageChange(i)} className={cx("link-anchor", {"active": page == i})}>{i + 1}</a>
                        ))}
                    </div>
                    <a 
                    className={cx("pagination-next", { "disabled": page === totalPages - 1 })}
                    onClick={() => page !== totalPages - 1 && handlePageChange(page + 1)}
                    >
                        <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" data-di-rand="1693311261883" data-di-res-id="5d20260e-66f4c137"><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path>
                        </svg>
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default ReviewContent;