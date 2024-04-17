import styles from './AddAddress.module.scss';
import classNames from 'classnames/bind';
import React from 'react';
import { useState } from 'react';
import EditAddress from '../EditAddress';

const cx = classNames.bind(styles);

function AddAddress() {

    const [openEditForm, setOpenEditForm] = useState(false);

    const handleCloseEditForm = (data) => {
        setOpenEditForm(data)
    }

    return (    
       <React.Fragment>
        {!openEditForm ?
        <button onClick={() => setOpenEditForm(!openEditForm)} className={cx("add_address_button")}>
            <div></div>
            <span>Add New Address</span>
        </button>
        : (<EditAddress onCloseEditForm={handleCloseEditForm} ></EditAddress>)
        }
       </React.Fragment>
    )
}

export default AddAddress