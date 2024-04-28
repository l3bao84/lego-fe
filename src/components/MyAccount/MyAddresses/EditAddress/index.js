import styles from './EditAddress.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import { useState } from 'react';
import { useAddAddress } from '../../service';
import { handleUpdateAddress } from '../../service';

const cx = classNames.bind(styles);

function EditAddress({actionType, editingData, onCloseEditForm, refreshAddresses}) {

    const [editData, setEditData] = useState({
        id: editingData && editingData.id ? editingData.id : '',
        fullName: editingData && editingData.fullName ? editingData.fullName : '',
        phoneNumber: editingData && editingData.phoneNumber ? editingData.phoneNumber : '',
        address: editingData && editingData.address ? editingData.address : '',
        city: editingData && editingData.city ? editingData.city : ''
    });

    const addAddress = useAddAddress();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(actionType === 'add') {
            await addAddress(editData)
        }else {
            handleUpdateAddress(editData.id, editData)
        }
        onCloseEditForm();    
        refreshAddresses()
    };

    const handleCloseEditForm = (e) => {
        e.preventDefault();
        onCloseEditForm();
    }

    const inputData = (tag, content) => {
        setEditData(prevData => ({
            ...prevData,
            [tag]: content
        }));
    };

    return (
        <div className={cx('address_page')}>
            <div className={cx('address_card')}>
                <div className={cx('address_card_container')}>
                    <div className={cx('address_cancel_header')}>
                        <button onClick={() => onCloseEditForm()} className={cx('cancel_header-button')}>
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
                                            <input onChange={(e) => inputData("fullName", e.target.value)} id="fullname" value={editData.fullName}></input>
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
                                            <input onChange={(e) => inputData("phoneNumber", e.target.value)} id="phonenumber" value={editData.phoneNumber}></input>
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
                                            <input onChange={(e) => inputData("address", e.target.value)} id="address" value={editData.address}></input>
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
                                            <input onChange={(e) => inputData("city", e.target.value)} id="city" value={editData.city}></input>
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
                            <button onClick={(e) => handleSubmit(e)} className={cx('save_edit_button')}>
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
