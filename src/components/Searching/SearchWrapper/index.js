import styles from './SearchingHeader.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSearchProducts, useCategory } from '../searchProductService';
import SearchListing from '../SearchListing';

const cx = classNames.bind(styles);

function SearchWrapper() {

    const param = new URLSearchParams(useLocation().search).get('key');
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const dropdownRef = useRef(null);
    const spanRef = useRef(null);
    const [sortOption, setSortOption] = useState('relevance');
    const [page, setPage] = useState(0)
    const {products, totalPages} = useSearchProducts(param, page, sortOption);

    const handlePageChange = (num) => {
        setPage(num)
    }

    const handleSortChange = (e) => {
        setSortOption(e.target.value);
        spanRef.current.textContent = e.target.value;
    };

    const handleActiveDropdown = () => {
        setIsDropdownActive(!isDropdownActive);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownActive(false);
            }
        };

        if (isDropdownActive) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isDropdownActive]);

    return (
        <div>
            <div className={cx('searching-header')}>
                <div className={cx('breadcrumbs-wrapper')}>
                    <nav>
                        <ol>
                            <li className={cx('breadcrumbs-item')}>
                                <span>
                                    <a href="/">Home</a>
                                </span>
                                <div className={cx('icon-wrapper')}></div>
                            </li>
                            <li className={cx('breadcrumbs-item')}>
                                <a className={cx('breadcrumbs-item-link')}>Search</a>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className={cx('summary-wrapper')}>
                    <div className={cx('summary-textwrapper')}>
                        <span className={cx('search-result-text')}>
                            Search results for
                            <span> {`"${param}"`}</span>
                        </span>
                        <span className={cx('summary-seperator')}></span>
                        <span className={cx('summary-result-count')}>{`Showing ${products.length} Products`}</span>
                    </div>
                    <div className={cx('summary-sortwrapper')}>
                        <div className={cx('sortby-dropdown-wrapper')}>
                            <div className={cx('sort-select-wrapper')}>
                                <div className={cx('select-component')}>
                                    <div
                                        ref={dropdownRef}
                                        onClick={() => handleActiveDropdown()}
                                        className={
                                            isDropdownActive
                                                ? `${cx('active')} ${cx('styled-select')}`
                                                : cx('styled-select')
                                        }
                                    >
                                        <div className={cx('select-button-wrapper')}>
                                            <span className={cx('select-label')}>Sort by:</span>
                                            <span ref={spanRef} className={cx('selected-value')}>
                                                Relevance
                                            </span>
                                            <div className={cx('select-chevron-wrapper')}>
                                                <svg
                                                    style={{
                                                        transform: isDropdownActive ? 'rotate(270deg)' : 'rotate(90deg)',
                                                    }}
                                                    width="18"
                                                    height="28"
                                                    viewBox="0 0 18 28"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    data-di-rand="1709262213050"
                                                    data-di-res-id="b257776d-7a5720b"
                                                >
                                                    <path
                                                        d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z"
                                                        fill="currentColor"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <ul
                                        style={{ transform: isDropdownActive ? 'scaleY(1)' : 'scaleY(0)' }}
                                        className={cx('custom-dropdown')}
                                    >
                                        <li>
                                            <label>
                                                <span>
                                                    <input
                                                        type="radio"
                                                        value="Relevance"
                                                        checked={sortOption === 'Relevance'}
                                                        onChange={handleSortChange}
                                                    ></input>
                                                    Relevance
                                                </span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <span>
                                                    <input
                                                        type="radio"
                                                        value="Price: Low to High"
                                                        checked={sortOption === 'Price: Low to High'}
                                                        onChange={handleSortChange}
                                                    ></input>
                                                    Price: Low to High
                                                </span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <span>
                                                    <input
                                                        type="radio"
                                                        value="Price: High to Low"
                                                        checked={sortOption === 'Price: High to Low'}
                                                        onChange={handleSortChange}
                                                    ></input>
                                                    Price: High to Low
                                                </span>
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <span>
                                                    <input
                                                        type="radio"
                                                        value="A-Z"
                                                        checked={sortOption === 'A-Z'}
                                                        onChange={handleSortChange}
                                                    ></input>
                                                    A-Z
                                                </span>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SearchListing onValueChange={handlePageChange} products={products} totalPages={totalPages}></SearchListing>
        </div>
    );
}

export default SearchWrapper;
