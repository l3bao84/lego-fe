import styles from './OtherAddress.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import EditAddress from '../EditAddress';
import { useState } from 'react';

const cx = classNames.bind(styles);

function OtherAddress({ address, onOpenDeleteModal, refreshAddresses }) {

    const [editingId, setEditingId] = useState(null);

    const handleDelete = (id) => {
        onOpenDeleteModal(id, true);
    };

    const handleCloseEditForm = () => {
        setEditingId(null)
        refreshAddresses()
    };

    return (
        <React.Fragment>
            <h2 className={cx('personal_infor-title')}>Other addresses</h2>
            {address && address.length > 0 && address.map((item, index) => (
                index > 0 && (
                    editingId === item.id ? (
                        <EditAddress key={item.id} actionType="edit" editingData={item} onCloseEditForm={handleCloseEditForm} refreshAddresses={refreshAddresses}/>
                    ) : (
                        
                        <div key={item.id} className={cx('address_page')}>
                            <div className={cx('address_card')}>
                                <div className={cx('saved_address')}>
                                    <div className={cx('horizontal_layout')}>
                                        <div>
                                            <p className={cx('info_label')}>{item.fullName}</p>
                                            <p className={cx('info_label')}>{item.phoneNumber}</p>
                                            <p className={cx('info_label')}>{item.address}</p>
                                            <p className={cx('info_label')}>{item.city}</p>
                                        </div>
                                        <div className={cx('saved_address-control')}>
                                            <button
                                                onClick={() => setEditingId(item.id)}
                                                className={cx('edit_address_button')}
                                            >
                                                <span>Edit</span>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(item.id)}
                                                className={cx('remove_address_button')}
                                            >
                                                <span>Delete</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                )
            ))}
        </React.Fragment>
    )    
}

export default OtherAddress;
