import styles from './DefaultAddress.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import { useState } from 'react';

const cx = classNames.bind(styles);

function DefaultAddress({ onOpenDeleteModal }) {
    const [openEditForm, setOpenEditForm] = useState(false);

    const handleDelete = () => {
        onOpenDeleteModal(true);
    };

    const handleCloseEditForm = (e) => {
        e.preventDefault();
        setOpenEditForm(!openEditForm)
    }

    return (
        <React.Fragment>
            <h2 className={cx('personal_infor-title')}>This is your default billing and shipping address</h2>
            {!openEditForm ? (
                <div className={cx('personal_info')}>
                    <div className={cx('main_info')}>
                        <div className={cx('info_card')}>
                            <div className={cx('an_info_card')}>
                                <div className={cx('infor_horizontal_layout')}>
                                    <div>
                                        <p className={cx('info_label')}>Lê Bảo</p>
                                        <p className={cx('info_label')}>0338171052</p>
                                        <p className={cx('info_label')}>
                                            xã Hoàng Diệu, huyện Chương Mỹ, thành phố Hà Nội
                                        </p>
                                        <p className={cx('info_label')}>Hà Nội</p>
                                    </div>
                                    <div className={cx('saved_address-control')}>
                                        <button onClick={() => setOpenEditForm(!openEditForm)} className={cx('edit_address_button')}>
                                            <div></div>
                                            <span>Edit</span>
                                        </button>
                                        <button onClick={() => handleDelete()} className={cx('remove_address_button')}>
                                            <div></div>
                                            <span>Delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={cx('address_page-default')}>
                    <div className={cx('address_page-main')}>
                        <div className={cx('address_card')}>
                            <div className={cx('address_form')}>
                                <div className={cx('cancel_header')}>
                                    <button onClick={() => setOpenEditForm(!openEditForm)} className={cx('cancel_header-button')}>
                                        <span>Cancel</span>
                                    </button>
                                </div>
                                <form className={cx('manual_form')}>
                                    <div className={cx('manual_form-input')}>
                                        <div className={cx('address_input-container')}>
                                            <div className={cx('textfield_container')}>
                                                <label htmlFor="fullname" className={cx('textfield_label')}>
                                                    Fullname *
                                                </label>
                                                <span className={cx('textfield_input_container')}>
                                                    <span className={cx('textfield_input')}>
                                                        <input id="fullname"></input>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className={cx('address_input-container')}>
                                            <div className={cx('textfield_container')}>
                                                <label htmlFor="phonenumber" className={cx('textfield_label')}>
                                                    Phonenumber *
                                                </label>
                                                <span className={cx('textfield_input_container')}>
                                                    <span className={cx('textfield_input')}>
                                                        <input id="phonenumber"></input>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className={cx('address_input-container')}>
                                            <div className={cx('textfield_container')}>
                                                <label htmlFor="address" className={cx('textfield_label')}>
                                                    Address *
                                                </label>
                                                <span className={cx('textfield_input_container')}>
                                                    <span className={cx('textfield_input')}>
                                                        <input id="address"></input>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        <div className={cx('address_input-container')}>
                                            <div className={cx('textfield_container')}>
                                                <label htmlFor="city" className={cx('textfield_label')}>
                                                    City *
                                                </label>
                                                <span className={cx('textfield_input_container')}>
                                                    <span className={cx('textfield_input')}>
                                                        <input id="city"></input>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('manual_form-default')}></div>
                                    <div className={cx('manual_form-button')}>
                                        <button onClick={(e) => handleCloseEditForm(e)} className={cx('cancel_edit_button')}>
                                            <span>Cancel</span>
                                        </button>
                                        <button className={cx('save_edit_button')}>
                                            <span>Save</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </React.Fragment>
    );
}

export default DefaultAddress;
