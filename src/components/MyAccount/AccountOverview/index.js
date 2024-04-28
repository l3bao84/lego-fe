import styles from '../MyAccountLayout.module.scss'
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function AccountOverview() {

    const [personal, setPersonal] = useState({})

    useEffect(() => {
        fetch('http://localhost:8080/my-account/get-personal-info', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            setPersonal(data)
        })
        .catch(error => {
            console.error(error.message);
        });
    }, []);

    return (
        <div>
            <h2 className={cx("personal_infor-title")}>This is your personal information</h2>
            <div className={cx("personal_info")}>
                <div className={cx("main_info")}>
                    <div className={cx("info_card")}>
                        <div className={cx("an_info_card")}>
                            <div className={cx("infor_horizontal_layout")}>
                                <div>
                                    <p className={cx("info_label")}>{personal.fullname}</p>
                                    <p className={cx("info_label")}>{personal.email}</p>
                                    <p className={cx("info_label")}>{personal.address}</p>
                                    <p className={cx("info_label")}>{personal.phonenumber}</p>
                                    <p className={cx("info_label")}>{`Order is being delivered: ${personal.numberOfOder}`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccountOverview;
