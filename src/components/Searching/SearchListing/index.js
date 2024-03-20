import styles from './SearchListing.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState, useRef } from 'react';
import SearchListingContent from './Content';
import { useCategory } from '../searchProductService';

const cx = classNames.bind(styles);

function SearchListing({products, totalPages, onValueChange}) {

    const categories = useCategory()
    return (
        <div className={cx('search-listing')}>
            <div className={cx('facet-container')}>
                <div className={cx("listing-facet")}>
                    <div className={cx("facet-wrapper")}>
                        <div className={cx("facet-selector")}>
                            {categories.map(item => (
                                <div key={item.categoryId} className={cx("facet-group")}>
                                    <h3>
                                        <button className={cx("toggle-button")}>
                                            <a href="">
                                                <span className={cx("facet-title-container")}>
                                                    <span>{item.categoryName}</span>
                                                </span>
                                            </a>
                                        </button>
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <SearchListingContent onValueChange={onValueChange} products={products} totalPages={totalPages}/>
        </div>
    );
}

export default SearchListing;
