import styles from './OtherAddress.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import EditAddress from '../EditAddress';
import { useState } from 'react';

const cx = classNames.bind(styles);

function OtherAddress({ onOpenDeleteModal }) {
    const [openEditForm, setOpenEditForm] = useState(false);

    const handleDelete = () => {
        onOpenDeleteModal(true);
    };

    const handleCloseEditForm = (data) => {
        setOpenEditForm(data)
    }

    return (
        <React.Fragment>
            <h2 className={cx('personal_infor-title')}>Other addresses</h2>
            {!openEditForm ? (
                <div className={cx('address_page')}>
                    <div className={cx('address_card')}>
                        <div className={cx('saved_address')}>
                            <div className={cx('horizontal_layout')}>
                                <div>
                                    <p className={cx('info_label')}>Lê Bảo</p>
                                    <p className={cx('info_label')}>0338171052</p>
                                    <p className={cx('info_label')}>xã Hoàng Diệu, huyện Chương Mỹ, thành phố Hà Nội</p>
                                    <p className={cx('info_label')}>Hà Nội</p>
                                </div>
                                <div className={cx('saved_address-control')}>
                                    <button
                                        onClick={() => setOpenEditForm(!openEditForm)}
                                        className={cx('edit_address_button')}
                                    >
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
            ) : (
                <EditAddress onCloseEditForm={handleCloseEditForm} />
            )}
        </React.Fragment>
    );
}

export default OtherAddress;
