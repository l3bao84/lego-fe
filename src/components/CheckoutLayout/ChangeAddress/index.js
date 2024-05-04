import styles from '../CheckoutLayout.module.scss';
import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function ChangeAddress({ addresses, onClose, onOpenEditForm }) {

    const dataList = addresses.map((address, index) => {
        return {
            id: index,
            data: address
        }
    });    

    const [selectdAddress, setSelectedAddress] = useState(dataList[0].id);
    const [isActive, setIsActive] = useState(false);
    const [addressData, setAddressData] = useState();

    useEffect(() => {
        if (addresses && addresses.length > 0) {
            setAddressData(addresses[selectdAddress])
        }
    }, [addresses]);

    const handleChooseAddress = (index) => {
        setSelectedAddress(index);
        setIsActive(true);
        setAddressData(dataList[index]);
    };

    const handleSelectAddress = (selectdAddress) => {
        const address = dataList[selectdAddress].data;
        if (address) {
            onClose(address);
        }
    };

    const emptyData = {
        fullName: '',
        phoneNumber: '',
        address: '',
        city: '',
    };

    const style = {
        '--scale-factor': isActive ? 0.6 : 0,
        '--opacity-level': isActive ? 1 : 0,
    };

    return (
        <div>
            <div>
                <aside className={cx('modal_style_container')}>
                    <div className={cx('modal_window')}>
                        <div className={cx('modal_close_button_wrapper')}>
                            <button onClick={() => onClose(addressData)} className={cx('close_button')}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    aria-hidden="true"
                                    data-di-res-id="c2f89ec9-c65917a1"
                                    data-di-rand="1714191797000"
                                >
                                    <path
                                        d="M10.377 8.142l5.953-5.954-2.234-2.234-5.954 5.954L2.188-.046-.046 2.188l5.954 5.954-5.954 5.954 2.234 2.234 5.954-5.953 5.954 5.953 2.234-2.234z"
                                        fill="currentColor"
                                        fillRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div className={cx('select_address_wrapper')}>
                            <div className={cx('select_address_scrollable')}>
                                <div className={cx('select_address_content')}>
                                    <span>Select address</span>
                                    <p>Please select the correct address below.</p>
                                </div>
                                <ul>
                                    {dataList.map((item, index) => (
                                        <li key={index} className={cx('address_item')}>
                                            <label
                                                onClick={() => handleChooseAddress(item.id)}
                                                className={cx('radio_input_label_address')}
                                            >
                                                <div className={cx('radio_input_container')}>
                                                    <input type="radio"></input>
                                                    <div
                                                        style={selectdAddress === item.id ? style : {}}
                                                        className={cx('radio_input_style')}
                                                    ></div>
                                                </div>
                                                <p className={cx('address_item_content')}>
                                                    <span>
                                                        <span>{item.data.fullName}</span>
                                                    </span>
                                                    <span style={{ color: 'rgb(117, 117, 117)' }}>
                                                        <span>{`${item.data.address}, ${item.data.city}, (${item.data.phoneNumber})`}</span>
                                                    </span>
                                                </p>
                                                <button onClick={() => onOpenEditForm(item.data)}>Edit</button>
                                            </label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={cx('select_address_footer_content')}>
                                <button
                                    onClick={() => handleSelectAddress(selectdAddress)}
                                    className={cx('button_primary')}
                                >
                                    <span>Select address</span>
                                </button>
                                <button onClick={() => onOpenEditForm(emptyData)} className={cx('text_button')}>
                                    Add new address
                                </button>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default ChangeAddress;
