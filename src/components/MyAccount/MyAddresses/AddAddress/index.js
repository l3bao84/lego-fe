import styles from './AddAddress.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import { useState } from 'react';
import EditAddress from '../EditAddress';

const cx = classNames.bind(styles);

function AddAddress({refreshAddresses}) {

    const [openEditForm, setOpenEditForm] = useState(false);

    const handleCloseEditForm = (data) => {
        setOpenEditForm(data)
        refreshAddresses();
    }

    return (    
       <React.Fragment>
        {!openEditForm ?
        <button onClick={() => setOpenEditForm(!openEditForm)} className={cx("add_address_button")}>
            <div></div>
            <span>Add New Address</span>
        </button>
        : (<EditAddress actionType="add" onCloseEditForm={handleCloseEditForm} refreshAddresses={refreshAddresses}></EditAddress>)
        }
       </React.Fragment>
    )
}

export default AddAddress