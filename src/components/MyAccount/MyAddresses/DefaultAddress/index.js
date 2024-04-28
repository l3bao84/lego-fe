import styles from './DefaultAddress.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import { useState, useEffect } from 'react';
import { handleUpdateAddress } from '../../service';

const cx = classNames.bind(styles);

function DefaultAddress({ address, onOpenDeleteModal, refreshAddresses }) {

    const [openEditForm, setOpenEditForm] = useState(false);
    const [editingAddress, setEditingAddress] = useState({
        id: '',
        fullName: '',
        phoneNumber: '',
        address: '',
        city: ''
    });

    useEffect(() => {
        if (address && address.length > 0) {
            setEditingAddress({
                id: address[0].id || '',
                fullName: address[0].fullName || '',
                phoneNumber: address[0].phoneNumber || '',
                address: address[0].address || '',
                city: address[0].city || ''
            });
        }
    }, [address]);

    const handleDelete = (id) => {
        onOpenDeleteModal(id,true);
        refreshAddresses()
    };

    const handleCloseEditForm = (e) => {
        e.preventDefault();
        refreshAddresses()
        setOpenEditForm(!openEditForm)
    }

    const handleSubmit = (e, id) => {
        e.preventDefault();
        handleUpdateAddress(id, editingAddress)
        setOpenEditForm(!openEditForm)
        refreshAddresses()
    }

    const inputData = (tag, content) => {
        setEditingAddress(prevData => ({
            ...prevData,
            [tag]: content
        }));
    };

    return (
        <React.Fragment>
            <h2 className={cx('personal_infor-title')}>This is your default billing and shipping address</h2>
            {!openEditForm ? (
                address && address.length > 0 && (
                <div className={cx('personal_info')}>
                    <div className={cx('main_info')}>
                        <div className={cx('info_card')}>
                            <div className={cx('an_info_card')}>
                                <div className={cx('infor_horizontal_layout')}>
                                    <div>
                                        <p className={cx('info_label')}>{editingAddress.fullName}</p>
                                        <p className={cx('info_label')}>{editingAddress.phoneNumber}</p>
                                        <p className={cx('info_label')}>
                                        {editingAddress.address}
                                        </p>
                                        <p className={cx('info_label')}>{editingAddress.city}</p>
                                    </div>
                                    <div className={cx('saved_address-control')}>
                                        <button onClick={() => setOpenEditForm(!openEditForm)} className={cx('edit_address_button')}>
                                            <div></div>
                                            <span>Edit</span>
                                        </button>
                                        <button onClick={() => handleDelete(editingAddress.id)} className={cx('remove_address_button')}>
                                            <div></div>
                                            <span>Delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )
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
                                                        <input id="fullname" onChange={(e) => inputData("fullName", e.target.value)} value={editingAddress.fullName}></input>
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
                                                        <input id="phonenumber" onChange={(e) => inputData("phoneNumber", e.target.value)} value={editingAddress.phoneNumber}></input>
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
                                                        <input id="address" onChange={(e) => inputData("address", e.target.value)} value={editingAddress.address}></input>
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
                                                        <input id="city" onChange={(e) => inputData("city", e.target.value)} value={editingAddress.city}></input>
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
                                        <button onClick={(e) => handleSubmit(e, editingAddress.id)} className={cx('save_edit_button')}>
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
