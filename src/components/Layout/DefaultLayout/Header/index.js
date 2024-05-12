import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { banner, menus } from '../commonData'
import { useState,useEffect,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ShopContent from './SubmenuContent/ShopContent'
import DiscoverContent from './SubmenuContent/DiscoverContent'
import HelpContent from './SubmenuContent/HelpContent'
import useAuth from '~/auth';
import { useCart } from '~/components/CartList/service';
import SignInModal from '~/components/SignInModal';

const cx = classNames.bind(styles);

function Header() {

    const [visibleSearchBar, setVisibleSearchBar] = useState(false);
    const [visibleSubnav, setVisibleSubnav] = useState(false);
    const [activeSubMenuButton, setActiveSubMenuButton] = useState(null);
    const [activeSubMenuContent, setActiveSubMenuContent] = useState(null);
    const [visibleSignInModal, setVisibleSignInModal] = useState(false)
    const [inputSearch, setInputSearch] = useState('');
    const [bannerIndex, setBannerIndex] = useState(0)
    const { cartItems } = useCart();

    const navigate = useNavigate()
    
    const isAuthenticated = useAuth()

    const handleInputSearch = (e) => {
        setInputSearch(e.target.value);
    };

    const handleBannerIndexIncrease = () => {
        if ((bannerIndex + 1) === banner.length) {
            setBannerIndex(0)
        } else {
            setBannerIndex(bannerIndex + 1)
        }
    }

    const handleBannerIndexDecrease = () => {
        if (bannerIndex - 1 >= 0) {
            setBannerIndex(bannerIndex - 1)
        }else {
            setBannerIndex(banner.length - 1)
        }
    }

    const handleSearchBarToggle = () => {
        setVisibleSearchBar(false);
    };

    useEffect(() => {
        const preventScroll = (e) => {
          e.preventDefault();
        };
    
        if (visibleSubnav) {
          window.addEventListener('wheel', preventScroll, { passive: false });
        } else {
          window.removeEventListener('wheel', preventScroll);
        }
    
        return () => {
          window.removeEventListener('wheel', preventScroll);
        };
    }, [visibleSubnav]);

    const handleSubMenuContainer = (index) => {
        setVisibleSubnav(true)
        setActiveSubMenuContent(index)
        setActiveSubMenuButton(index)
    }

    const handleCloseSubMenu = () => {
        setVisibleSubnav(false)
        setActiveSubMenuContent(null)
        setActiveSubMenuButton(null)
    }

    const handleSearch = () => {
        navigate(`/search?key=${inputSearch}`)
    }

    const handleSignInModal = () => {
        setVisibleSignInModal(true)
    }

    const handleCloseSinInModal = () => {
        setVisibleSignInModal(false)
    }

    const handleOpenAccount = () => {
        navigate(`/my-account`)
    }

    return (
        <div>
            <header>
                {visibleSignInModal && <SignInModal close={handleCloseSinInModal} isVisible={visibleSignInModal}></SignInModal>}
                <div className={cx("header-wrapper")}>
                    <div className={cx("utility-bar-container")}>
                        <div className={cx("contact-wrapper")}>
                            <a href='https://www.facebook.com/l3bao84' className={cx("link-style")}>
                                <svg width="37" height="16" viewBox="0 0 37 16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className={`${cx("icon-styled")} ${cx("icon-arrow")}`}><path fill="currentColor" d="M29.493.597l.095.084 6.535 6.54a1 1 0 01.083 1.319l-.083.094-6.535 6.54a1 1 0 01-1.498-1.32l.083-.094 4.83-4.834-31.908.001A1 1 0 01.98 6.934l.116-.007h31.907l-4.83-4.833a1 1 0 01-.082-1.32l.083-.094a1 1 0 011.32-.083z"></path></svg>
                                Contact me
                            </a>
                        </div>
                        <div className={cx("global-banner-wrapper")}>
                            <button className={cx("control-button")} onClick={handleBannerIndexDecrease}>
                                <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className={`${cx("icon-styled")} ${cx("button-icon-arrow")} ${cx("button-icon-arrow-rotate")}`}><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path></svg>
                            </button>
                            <div className={cx("transform-wrapper")}>
                                <div className={cx("banner-container")}>
                                    <p className={cx("text-base")}>
                                        <span className={cx("markup")}>{banner[bannerIndex].title}</span>
                                    </p>
                                </div>
                            </div>
                            <button className={cx("control-button")} onClick={handleBannerIndexIncrease}>
                                <svg width="18" height="28" viewBox="0 0 18 28" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className={`${cx("icon-styled")} ${cx("button-icon-arrow")}`}><path d="M1.825 28L18 14 1.825 0 0 1.715 14.196 14 0 26.285z" fill="currentColor"></path></svg>
                            </button>
                        </div>
                        <div className={cx("account-wrapper")}>
                            <button className={cx("account-button")}>
                                {/* <svg width="20" height="22" viewBox="0 0 20 22" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className={cx("icon-styled")}><g transform="translate(1 1)" fillRule="nonzero" fill="none"><rect stroke="#2C2C2C" strokeWidth="1.5" fill="#FFCF00" x="4.875" width="8.25" height="6.038" rx=".729"></rect><rect stroke="#2C2C2C" strokeWidth="1.2" fill="#FFCF00" x="3.75" y="14.34" width="10.5" height="5.66" rx=".729"></rect><path d="M14.25 17.736H3.75C0 17.736 0 14.717 0 14.717v-8.68S0 3.02 3.75 3.02h10.5C18 3.019 18 6.038 18 6.038v8.679s0 3.019-3.75 3.019z" stroke="#2C2C2C" strokeWidth="1.5" fill="#FFCF00"></path><path d="M7.125 8.868a.94.94 0 00-.938-.943.94.94 0 00-.937.943c0 .52.42.943.938.943a.94.94 0 00.937-.943zm4.688-.943a.94.94 0 00-.938.943c0 .52.42.943.938.943a.94.94 0 00.937-.943.94.94 0 00-.938-.943zm.293 3.86a.452.452 0 00-.649.21c-.005.008-.461.84-2.463.84-1.953 0-2.437-.793-2.462-.84a.446.446 0 00-.638-.234.618.618 0 00-.215.761c.063.147.69 1.446 3.315 1.446s3.25-1.299 3.313-1.446a.609.609 0 00-.201-.738z" fill="#2C2C2C"></path></g></svg> */}
                                <img src='https://i.pinimg.com/564x/66/c0/2a/66c02a87060ac06d01d2b4d5def3800c.jpg' className={cx("icon-styled")}></img>
                                {isAuthenticated ? <span onClick={() => handleOpenAccount()}>Account</span> : <span onClick={() => handleSignInModal()}>Sign In</span>}
                            </button>
                        </div>
                    </div>
                    <div className={cx("main-bar-container")}>
                        <div className={cx("main-bar-wrapper")}>
                            <div>
                                <nav className={cx("navigation")}>
                                    <a href="http://localhost:3000" className={cx("logo-link")}>
                                        <img src="https://nidas.hi.link/_assets/site-data/ops_Zmctdq5vlG64qvFFiw/images/9319c80b29e29af1aa255c1750ab1ebca33a904137e5ed04e25e93fd646c9cdf.png"></img>
                                    </a>
                                    <ul className={cx("menu")}>
                                        {menus.map(menu => (
                                            <li key={menu.id} className={cx("menu-item")}>
                                                <button onClick={() => handleSubMenuContainer(menu.id)} 
                                                        className={cx("menu-item-button", { active: menu.id === activeSubMenuButton })}
                                                >{menu.title}</button>
                                            </li>
                                        ))}
                                    </ul>
                                    {visibleSubnav && 
                                        <div className={cx("subnav")}>
                                            <button onClick={handleCloseSubMenu} className={cx("close-button-subnav")}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" aria-hidden="true" className={cx("icon-styled")}><path d="M10.377 8.142l5.953-5.954-2.234-2.234-5.954 5.954L2.188-.046-.046 2.188l5.954 5.954-5.954 5.954 2.234 2.234 5.954-5.953 5.954 5.953 2.234-2.234z" fill="currentColor" fillRule="evenodd"></path></svg>
                                            </button>
                                            {activeSubMenuContent === 1 && <ShopContent></ShopContent>}
                                            {activeSubMenuContent === 2 && <DiscoverContent></DiscoverContent>}
                                            {activeSubMenuContent === 3 && <HelpContent></HelpContent>}
                                        </div>
                                    }
                                </nav>
                                <div className={`${cx("main-bar-overlay")}`} onClick={handleCloseSubMenu} style={{visibility: visibleSubnav ? 'visible' : 'hidden'}}></div>
                            </div>
                            <div className={cx("action-container")}>
                                <div className={cx("search-container")}>
                                    {!visibleSearchBar && (
                                        <button className={cx("open-button")} onClick={() => setVisibleSearchBar(true)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className={cx("icon-styled")}><path d="M18 16.615c0 .375-.137.7-.412.973a1.331 1.331 0 01-.973.412 1.28 1.28 0 01-.973-.412l-3.71-3.7a7.41 7.41 0 01-4.317 1.342c-1.03 0-2.017-.2-2.958-.6a7.616 7.616 0 01-2.434-1.623 7.605 7.605 0 01-1.622-2.433A7.472 7.472 0 010 7.616c0-1.032.2-2.018.6-2.96a7.65 7.65 0 011.623-2.433A7.616 7.616 0 014.657.601 7.49 7.49 0 017.615 0c1.032 0 2.018.2 2.959.601.94.4 1.752.941 2.434 1.622a7.624 7.624 0 011.622 2.434c.4.941.601 1.927.601 2.959a7.403 7.403 0 01-1.342 4.316l3.71 3.71c.267.266.401.592.401.973m-5.539-9c0-1.334-.474-2.475-1.423-3.423C10.09 3.244 8.95 2.77 7.615 2.77c-1.333 0-2.475.474-3.423 1.422C3.243 5.14 2.77 6.28 2.77 7.616c0 1.334.474 2.475 1.423 3.423.948.949 2.09 1.422 3.423 1.422 1.335 0 2.475-.473 3.423-1.422.95-.948 1.423-2.09 1.423-3.423" fill="currentColor" fillRule="evenodd"></path></svg>
                                        </button>
                                    )}
                                    <div className={`${!visibleSearchBar ? cx("search-wrapper") : cx("search-wrapper-open")}`}>
                                        {/* <div style={{width: "1px",
                                            height: "0px",
                                            padding: "0px",
                                            overflow: "hidden",
                                            position: "fixed",
                                            top: "1px",
                                            left: "1px"}}></div> */}
                                        <div>
                                            <div className={cx("search-style-overlay")} onClick={handleSearchBarToggle} style={{zIndex: 3}}></div>
                                            <div className={cx("search-style-wrapper")}>
                                                <form action="" className={cx("styled-form")}>
                                                    <label htmlFor="desktop-search-search-input" className={cx("label")}>
                                                        <span className={cx("visual-hidden")}>Search</span>
                                                    </label>
                                                    <input onChange={(e) => handleInputSearch(e)} autoComplete="off" name="key" type="text" data-test="search-input" placeholder="Search..." id="desktop-search-search-input" className={cx("input-field")} value={inputSearch} />
                                                    <button onClick={() => handleSearch()} type="submit" tabIndex="0" className={cx("search-button")}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className={cx("icon-styled")}><path d="M18 16.615c0 .375-.137.7-.412.973a1.331 1.331 0 01-.973.412 1.28 1.28 0 01-.973-.412l-3.71-3.7a7.41 7.41 0 01-4.317 1.342c-1.03 0-2.017-.2-2.958-.6a7.616 7.616 0 01-2.434-1.623 7.605 7.605 0 01-1.622-2.433A7.472 7.472 0 010 7.616c0-1.032.2-2.018.6-2.96a7.65 7.65 0 011.623-2.433A7.616 7.616 0 014.657.601 7.49 7.49 0 017.615 0c1.032 0 2.018.2 2.959.601.94.4 1.752.941 2.434 1.622a7.624 7.624 0 011.622 2.434c.4.941.601 1.927.601 2.959a7.403 7.403 0 01-1.342 4.316l3.71 3.71c.267.266.401.592.401.973m-5.539-9c0-1.334-.474-2.475-1.423-3.423C10.09 3.244 8.95 2.77 7.615 2.77c-1.333 0-2.475.474-3.423 1.422C3.243 5.14 2.77 6.28 2.77 7.616c0 1.334.474 2.475 1.423 3.423.948.949 2.09 1.422 3.423 1.422 1.335 0 2.475-.473 3.423-1.422.95-.948 1.423-2.09 1.423-3.423" fill="currentColor" fillRule="evenodd"></path></svg>
                                                        <span className={cx("visual-hidden")}>APPLY</span>
                                                    </button>
                                                    <button onClick={() => setVisibleSearchBar(false)} type="button" data-test="close-search" className={cx("close-button")} style={{ visibility: visibleSearchBar ? 'visible' : 'hidden' }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" aria-hidden="true" className={cx("icon-styled")}><path d="M10.377 8.142l5.953-5.954-2.234-2.234-5.954 5.954L2.188-.046-.046 2.188l5.954 5.954-5.954 5.954 2.234 2.234 5.954-5.953 5.954 5.953 2.234-2.234z" fill="currentColor" fillRule="evenodd"></path></svg>
                                                        <span className={cx("visual-hidden")}>Reset</span>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className={cx("styled-button")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" aria-hidden="true" className={cx("icon-styled")}><path d="M16.84 8.417L10 15.204 3.16 8.417A3.67 3.67 0 012 5.739C2 3.677 3.71 2 5.815 2a3.82 3.82 0 012.754 1.159l1.43 1.467 1.433-1.467A3.818 3.818 0 0114.186 2C16.289 2 18 3.677 18 5.739a3.673 3.673 0 01-1.16 2.678M9.986 18l.014-.014.014.014 8.223-8.116-.018-.019a5.678 5.678 0 001.78-4.126C20 2.569 17.398 0 14.187 0A5.829 5.829 0 0010 1.762 5.827 5.827 0 005.815 0C2.604 0 0 2.569 0 5.739a5.68 5.68 0 001.782 4.126" fill="currentColor" fillRule="evenodd"></path></svg>
                                </button>
                                <a href='/cart' className={cx("styled-link")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" aria-hidden="true" className={cx("icon-styled")}><g fill="currentColor" fillRule="evenodd"><path d="M4 3.512v5.804c0 .377.349.684.779.684.43 0 .779-.307.779-.684V3.512C5.558 2.33 6.653 1.368 8 1.368c1.347 0 2.442.962 2.442 2.144v5.804c0 .377.35.684.78.684.43 0 .778-.307.778-.684V3.512C12 1.575 10.206 0 8 0S4 1.575 4 3.512z"></path><path d="M2.46 6.33c-.269 0-.489.194-.5.441L1.435 18.19a.436.436 0 00.131.332.52.52 0 00.348.149h12.151c.276 0 .501-.207.501-.462l-.525-11.436c-.011-.248-.23-.442-.5-.442H2.46zM14.448 20l-12.974-.001a1.591 1.591 0 01-1.064-.462 1.357 1.357 0 01-.408-1.03L.56 6.372C.595 5.602 1.277 5 2.11 5h11.78c.835 0 1.516.602 1.551 1.372l.56 12.197c0 .789-.697 1.431-1.553 1.431z"></path></g></svg>
                                    {!isAuthenticated ? `(0)` : `(${cartItems.length})`}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className={`${cx("search-style-overlay")}`} onClick={handleSearchBarToggle} style={{visibility: visibleSearchBar ? 'visible' : 'hidden'}}></div>
        </div>
    );
}

export default Header;
