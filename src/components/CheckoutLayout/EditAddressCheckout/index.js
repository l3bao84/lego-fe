import styles from '../CheckoutLayout.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { isNullOrEmpty } from '../service';
import { isEnableButton } from '../service';
import { handleUpdateAddress } from '~/components/MyAccount/service';

const cx = classNames.bind(styles);

function EditAddressCheckout({ data, onClose}) {

    const [fullname, setFullname] = useState(data.fullName)
    const [phonenumber, setPhonenumber] = useState(data.phoneNumber)
    const [add, setAdd] = useState(data.address)
    const [city, setCity] = useState(data.city)

    const inputFields = [
        {
            id: 1,
            tag: "fullname",
            label: "Full Name",
            type: "text",
            value: fullname
        },
        {
            id: 2,
            tag: "phonenumber",
            label: "Phonenumber",
            type: "text",
            value: phonenumber
        },
        {
            id: 3,
            tag: "address",
            label: "Address",
            type: "text",
            value: add
        },
        {
            id: 4,
            tag: "city",
            label: "City",
            type: "text",
            value: city
        }
    ]

    const handleEditForm = (e) => {
        e.preventDefault();
        onClose(data);
    }

    const handleUseThisData = (e) => {
        e.preventDefault();
        var address = {
            fullName: fullname,
            address: add,
            city: city,
            phoneNumber: phonenumber
        };
        handleUpdateAddress(data.id, address)
        window.location.reload()
        onClose(address);
    }

    const handleInputData = (valueTag, e) => {
        switch (valueTag) {
            case "fullname":
                setFullname(e.target.value);
                break;
            case "phonenumber":
                setPhonenumber(e.target.value);
                break;
            case "address":
                setAdd(e.target.value);
                break;
            case "city":
                setCity(e.target.value);
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div className={cx('loading_style-wrapper')}>
                <h3>Enter shipping details</h3>
                <form className={cx('standard_style_form')}>
                    {inputFields.map(item => (
                        <div key={item.id} className={cx("form_field_wrapper")}>
                            <div className={cx("form_field-input-wrapper")}>
                                <div className={cx("input_wrapper")}>
                                    <label type={item.type} htmlFor={item.tag} className={cx("input_style_label")}>
                                        <input onChange={(e) => handleInputData(item.tag, e)} id={item.tag} type={item.type} name={item.tag} value={item.value}/>
                                        <span>{item.label}</span>
                                        {isNullOrEmpty(item.value)
                                        ? 
                                        <svg style={{color: "rgb(208, 2, 27)"}} xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" aria-hidden="true"><path d="M10.377 8.142l5.953-5.954-2.234-2.234-5.954 5.954L2.188-.046-.046 2.188l5.954 5.954-5.954 5.954 2.234 2.234 5.954-5.953 5.954 5.953 2.234-2.234z" fill="currentColor" fillRule="evenodd"></path></svg>
                                        :
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="13" viewBox="0 0 20 13" aria-hidden="true" data-di-res-id="8c40201b-5366f3fa" data-di-rand="1714146080071">
                                            <path d="M0 5.703L7.177 13 20 0h-4.476L7.177 8.442 4.476 5.723H2.238z" fill="currentColor" fillRule="evenodd"></path>
                                        </svg>
                                        }
                                    </label>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className={cx("address_form_footer")}>
                        <div className={cx("button_container")}>
                            <div className={cx("button_flex_submit")}>
                                <button 
                                    style={{pointerEvents: isEnableButton({fullname: fullname, phonenumber: phonenumber, address: add, city: city}) ? "none" : "auto"}} 
                                    onClick={(e) => handleUseThisData(e)} 
                                    className={cx("button_primary")}>
                                    <span>Use this address</span>
                                </button>
                            </div>
                            <button onClick={(e) => handleEditForm(e)} className={cx("text_button")}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default EditAddressCheckout;
