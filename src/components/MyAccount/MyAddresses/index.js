import styles from '../MyAccountLayout.module.scss';
import classNames from 'classnames/bind';
import DefaultAddress from './DefaultAddress';
import OtherAddress from './OtherAddress';
import AddAddress from './AddAddress';
import ConfirmDeleteAddress from '../ConfirmDelete';

import { useState } from 'react';

const cx = classNames.bind(styles);

function MyAddresses() {

    const [openDeleteModal, setOpenDeleteModal] = useState(false)

    const handleOpenModal = (newData) => {
        setOpenDeleteModal(newData);
    }

    return (    
        <div className={cx("content_layout")}>
            <div>
                <DefaultAddress onOpenDeleteModal={handleOpenModal}></DefaultAddress>
                <OtherAddress onOpenDeleteModal={handleOpenModal}></OtherAddress>
                <AddAddress></AddAddress>
                {openDeleteModal && <ConfirmDeleteAddress onOpenDeleteModal={handleOpenModal}></ConfirmDeleteAddress>}
            </div>
        </div>
    )
}

export default MyAddresses