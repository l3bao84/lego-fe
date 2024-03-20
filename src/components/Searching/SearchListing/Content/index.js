import styles from '../SearchListing.module.scss'
import classNames from 'classnames/bind';
import { useRef, useState, useEffect} from 'react';
import BarLoader from "react-spinners/BarLoader";
import { useLocation } from 'react-router-dom';
import { useSearchProducts } from '../../searchProductService';

const cx = classNames.bind(styles);

function SearchListingContent({products, totalPages, onValueChange}) {

    const param = new URLSearchParams(useLocation().search).get("key")
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(0)

    const handlePageChange = (value) => {
        setPage(value)
        onValueChange(value)
    }

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 2000);
    }, [products]);

    function calculateAverageRating(reviews) {
        if (!reviews || reviews.length === 0) {
            return 0;
        }

        const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
        return totalRating / reviews.length;
    }

    return (
        <div className={cx("search-page-container")}>
            {isLoading ? 
            <BarLoader color={'rgb(255, 207, 0)'} className={cx("loader")} loading={isLoading} size={10} />
            : 
            <div>
                <ul className={cx("product-grid")}>
                    {products.map(item => (
                        <li key={item.productId} className={cx("product-item")}>
                            <div className={cx("product-leaf-wrapper")}>
                                <div className={cx("product-leaf-wishlist")}>
                                    <div className={cx("wishlist-dropdown")}>
                                        <div className={cx("wishlist-toggle-button")}>
                                            <div className={cx("wishlist-wrapper")}>
                                                <button className={cx("wishlist-icon-button")}>
                                                    <a href="">
                                                        <div className={cx("icon-wrapper")}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="currentColor" data-di-res-id="50787ecb-1fcc91a4" data-di-rand="1693290842499">
                                                                <path d="M20.767 37.673a1.104 1.104 0 0 1-1.567 0l-15.867-16A11.583 11.583 0 0 1 0 13.574c.027-2.336.744-4.61 2.058-6.53a11.591 11.591 0 0 1 5.316-4.247 11.432 11.432 0 0 1 6.751-.506A11.533 11.533 0 0 1 20 5.697a11.533 11.533 0 0 1 5.875-3.407c2.25-.517 4.601-.34 6.751.506a11.59 11.59 0 0 1 5.316 4.246A11.813 11.813 0 0 1 40 13.573a11.568 11.568 0 0 1-.871 4.38 11.453 11.453 0 0 1-2.462 3.71l-15.9 16.01ZM11.544 5.37a8.125 8.125 0 0 0-5.776 2.386 8.332 8.332 0 0 0-2.435 5.816 8.178 8.178 0 0 0 .602 3.105c.4.984.989 1.88 1.732 2.633L20 33.724 34.344 19.3a8.176 8.176 0 0 0 2.323-5.727 8.392 8.392 0 0 0-1.71-4.994 8.218 8.218 0 0 0-4.334-2.946 8.126 8.126 0 0 0-5.211.29 8.25 8.25 0 0 0-3.99 3.408L20 11.705l-1.422-2.374a8.235 8.235 0 0 0-3.003-2.915 8.109 8.109 0 0 0-4.03-1.045Z"></path>
                                                            </svg>
                                                        </div>
                                                    </a>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx("product-leaf-image")}>
                                    <a href={`http://localhost:3000/product/${item.productId}`} className={cx("product-image-link")}>
                                        <div className={cx("product-image-wrapper")}>
                                            <div className={cx("product-image-container")}>
                                                <div className={cx("product-image")}>
                                                    <img src={`http://localhost:8080/img/${item.images[0]}`} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <span className={cx("product-leaf-detail")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="#141414" aria-hidden="true" data-di-res-id="7db61cb-d516c15d" data-di-rand="1693290841797"><path d="m8.18 11.486-.03.014c-.15.141-.15.775-.15.775v17.79c0 .38.21.733.571.916l10.956 5.892c.15.085.33.127.51.127s.361-.042.527-.127l10.865-5.892c.36-.183.571-.536.571-.916V12.26s0-.634-.18-.747l-.166-.127-.796-.437-4.043-2.199-.18-.084V6.919C26.635 4.692 23.87 3 20.038 3c-3.833 0-6.583 1.706-6.583 3.933V8.61m6.583-3.481c2.675 0 4.373 1.07 4.373 1.818 0 .747-1.698 1.818-4.373 1.818-2.675 0-4.374-1.071-4.374-1.818 0-.747 1.729-1.818 4.374-1.818Zm-4.374 4.778a9.916 9.916 0 0 0 4.374.959 9.542 9.542 0 0 0 4.373-.959v.212c0 .76-1.698 1.832-4.373 1.832-2.675 0-4.374-1.071-4.374-1.818v-.226Zm3.277 8.726v15.52l-8.717-4.709V14.01l8.716 4.567v.07-.013Zm1.112-1.819-7.65-4.045-.992-.494-.12-.056 2.3-1.269c.6 1.819 3.17 3.101 6.462 3.101 3.29 0 5.77-1.24 6.432-3.016l2.164 1.198h.015l-8.581 4.595-.03-.014Zm9.783 12.616-8.656 4.737v-15.52l8.656-4.652V29.43Z"></path>
                                    </svg>
                                    <span className={cx("product-leaf-piece-count")}>{item.pieces}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" aria-hidden="true" viewBox="0 0 36 36" data-di-res-id="54dfce1b-69d2c4ec" data-di-rand="1693293755924"><path d="M13.81 12.333l-2.833 11.334h11.216l2.834-11.334H13.81zm.945-3.777H25.97l1.53-6.124a1.89 1.89 0 013.668.914l-1.303 5.21h3.245c1.047 0 1.889.846 1.889 1.889a1.887 1.887 0 01-1.889 1.888h-4.19l-2.833 11.334h7.023c1.047 0 1.889.846 1.889 1.888a1.887 1.887 0 01-1.889 1.89h-7.967l-1.534 6.123a1.888 1.888 0 11-3.66-.914l1.299-5.21H10.033l-1.534 6.124a1.888 1.888 0 11-3.66-.914l1.299-5.21h-3.25a1.89 1.89 0 010-3.777h4.194l2.834-11.334H2.889a1.89 1.89 0 010-3.777h7.971l1.534-6.124a1.884 1.884 0 012.285-1.375 1.883 1.883 0 011.375 2.29l-1.3 5.209z" fill="currentColor" stroke="#FFF" fillRule="evenodd"></path>
                                    </svg>
                                    <span className={cx("product-leaf-stock")}>{item.stock}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="#ffc20e" aria-hidden="true" data-di-res-id="7db61cb-86e93ce8" data-di-rand="1693290841797"><path d="M10.485 36c-.332 0-.66-.102-.942-.304a1.56 1.56 0 0 1-.638-1.546l1.674-9.612-7.093-6.811a1.554 1.554 0 0 1-.406-1.62c.19-.576.686-.988 1.295-1.075l9.8-1.403 4.386-8.748A1.597 1.597 0 0 1 20 4c.616 0 1.167.338 1.439.881l4.383 8.746 9.803 1.404c.609.087 1.106.5 1.295 1.076.19.576.035 1.197-.406 1.62l-7.091 6.808 1.673 9.615a1.56 1.56 0 0 1-.64 1.546 1.614 1.614 0 0 1-1.69.12l-8.764-4.538-8.77 4.539a1.624 1.624 0 0 1-.747.183Z"></path>
                                    </svg>
                                    <span>
                                        <span className={cx("product-leaf-rating")}>{calculateAverageRating(item.reviews)}</span>
                                    </span>
                                </span>
                                <h3 className={cx("product-leaf-title")}>
                                    <a href={`http://localhost:3000/product/${item.productId}`} className={cx("product-leaf-title-link")}>
                                        <span className={cx("product-leaf-title-text")}>
                                            <span>{item.productName}</span>
                                        </span>
                                    </a>
                                </h3>
                                <span className={cx("product-leaf-price")}>
                                    <span className={cx("price-sm-bold")}>{`$${item.price}`}</span>
                                </span>
                                <form action="" method="post" className={cx("product-leaf-action")}>
                                    <input type="hidden" name="quantity" value="1"/>
                                    <button className={cx("add-to-bag-button")}>
                                        <div className={cx("icon-wrapper-leaf")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="currentColor" data-di-res-id="4b715c35-5c943802" data-di-rand="1693290376384"><path d="M28.036 8.889V5a5.106 5.106 0 0 0-1.416-3.532A4.747 4.747 0 0 0 23.214 0h-6.428a4.747 4.747 0 0 0-3.406 1.468A5.106 5.106 0 0 0 11.964 5v3.889H5V35a5.107 5.107 0 0 0 1.415 3.532A4.747 4.747 0 0 0 9.821 40H30.18a4.747 4.747 0 0 0 3.406-1.468A5.106 5.106 0 0 0 35 35V8.889h-6.964ZM15.179 5c0-.442.169-.866.47-1.179.302-.312.71-.488 1.137-.488h6.428c.427 0 .835.176 1.137.488.301.313.47.737.47 1.179v3.889H15.18V5Zm16.607 30c0 .442-.17.866-.471 1.178-.301.313-.71.489-1.136.489H9.82c-.426 0-.835-.176-1.136-.489A1.698 1.698 0 0 1 8.215 35V12.222h3.75v4.445h3.214v-4.445h9.642v4.445h3.215v-4.445h3.75V35Z"></path>
                                        </svg>
                                        </div>
                                        <span>Add to Bag</span>
                                    </button>
                                </form>
                            </div>
                        </li>
                    ))}
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
            }
        </div>
    )
}

export default SearchListingContent;