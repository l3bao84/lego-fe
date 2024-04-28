import styles from '../MyAccountLayout.module.scss';
import classNames from 'classnames/bind';
import DefaultAddress from './DefaultAddress';
import OtherAddress from './OtherAddress';
import AddAddress from './AddAddress';
import ConfirmDeleteAddress from '../ConfirmDelete';
import { useAddress } from '../service';
import { useState } from 'react';

const cx = classNames.bind(styles);

function MyAddresses() {

    const { addresses, refreshAddresses } = useAddress();
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    const handleOpenModal = (id,data) => {
        setDeleteId(id)
        setOpenDeleteModal(data);
        refreshAddresses()
    }

    return (    
        <div className={cx("content_layout")}>
            <div>
                <DefaultAddress address={addresses && addresses} onOpenDeleteModal={handleOpenModal} refreshAddresses={refreshAddresses}></DefaultAddress>
                <OtherAddress address={addresses && addresses} onOpenDeleteModal={handleOpenModal} refreshAddresses={refreshAddresses}></OtherAddress>
                <AddAddress refreshAddresses={refreshAddresses}></AddAddress>
                {openDeleteModal && <ConfirmDeleteAddress deleteId={deleteId} onOpenDeleteModal={handleOpenModal} refreshAddresses={refreshAddresses}></ConfirmDeleteAddress>}
            </div>
        </div>
    )
}

export default MyAddresses