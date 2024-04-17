import styles from './EditAddress.module.scss';
import classNames from 'classnames/bind';
import React from 'react';

const cx = classNames.bind(styles);

function EditAddress({onCloseEditForm}) {

    const handleCloseEditForm = (e) => {
        e.preventDefault();
        onCloseEditForm(false);
    }

    return (
        <div className={cx('address_page')}>
            <div className={cx('address_card')}>
                <div className={cx('address_card_container')}>
                    <div className={cx('address_cancel_header')}>
                        <button onClick={() => onCloseEditForm(false)} className={cx('cancel_header-button')}>
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
    );
}

export default EditAddress;
