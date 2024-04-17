import styles from '../MyAccountLayout.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function ConfirmDeleteAddress({onOpenDeleteModal}) {

    const handleCloseDeleteModal = () => {
        onOpenDeleteModal(false);
    }

    return (    
        <div className={cx("modal_wrapper")}>
            <button onClick={() => handleCloseDeleteModal()}  className={cx("modal_backdrop")}></button>
            <div className={cx("overlay")}></div>
            <div className={cx("modal_container")}>
                <section className={cx("modal_content")}>
                    <div className={cx("confirmation_modal")}>
                        <h2 className={cx("confirmation_modal-title")}>Delete Address</h2>
                        <p className={cx("confirmation_modal-des")}>Are you sure you want to delete this address?</p>
                        <div className={cx("button-container")}>
                            <button onClick={() => handleCloseDeleteModal()} className={cx("cancel_delete_button")}>
                                <span>Cancel</span>
                            </button>
                            <button className={cx("confirm_delete_button")}>
                                <span>Delete</span>
                            </button>
                        </div>
                    </div>
                    <div className={cx("modal_closebutton")}>
                        <button onClick={() => handleCloseDeleteModal()} className={cx("close_button")}>
                            <div></div>
                        </button>
                    </div>
                </section>
            </div>
            <div className={cx("overlay")}></div>
        </div>
    )
}

export default ConfirmDeleteAddress