import styles from '../CheckoutLayout.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import EditAddressCheckout from '../EditAddressCheckout'
import { isNullOrEmpty } from '../service';
import ChangeAddress from '../ChangeAddress';

const cx = classNames.bind(styles);

const shippingMethods = [
    {
        index: 0,
        title: 'Standard (Free)',
        name: 'Standard',
        price: 0,
        caption: '(3-5 business days)',
        value: 1
    },
    {
        index: 1,
        title: 'Express Saver ($24.95)',
        name: 'Express Saver',
        price: 24.95,
        caption: '(2-3 business days)',
        value: 2
    },
    {
        index: 2,
        title: 'Express ($29.95)',
        name: 'Express',
        price: 29.95,
        caption: '(1-2 business days)',
        value: 3
    }
]

const PaymentMethods = [
    {
        id: 1,
        name: "Cash on delivery",
        icon: "<span><img src='https://kienvanghcm.com/wp-content/uploads/2022/02/ship-cod-ship-code-5.jpg'></img></span>"
    },
    {
        id: 2,
        name: "Paypal",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="16" viewBox="0.5 0 63 16.1" aria-label="PayPal" data-di-res-id="95b4664-eae7bf05" data-di-rand="1713794009142"><g fill="none"><path d="M49.2 4.2h-3.4c-.2 0-.4.2-.5.4l-1.4 8.8c0 .2.1.3.3.3H46c.2 0 .3-.1.3-.3l.4-2.5c0-.2.2-.4.5-.4h1.1c2.3 0 3.6-1.1 3.9-3.3.2-.9 0-1.7-.4-2.2-.6-.5-1.5-.8-2.6-.8m.4 3.3c-.2 1.2-1.1 1.2-2 1.2H47l.4-2.3c0-.1.1-.2.3-.2h.2c.6 0 1.2 0 1.5.4.2.1.2.4.2.9" fill="#139AD6"></path><path d="M24.7 4.2h-3.4c-.2 0-.4.2-.5.4l-1.4 8.8c0 .2.1.3.3.3h1.6c.2 0 .4-.2.5-.4l.4-2.4c0-.2.2-.4.5-.4h1.1c2.3 0 3.6-1.1 3.9-3.3.2-.9 0-1.7-.4-2.2-.6-.5-1.4-.8-2.6-.8m.4 3.3c-.2 1.2-1.1 1.2-2 1.2h-.5l.4-2.3c0-.1.1-.2.3-.2h.2c.6 0 1.2 0 1.5.4.1.1.2.4.1.9m9.9-.1h-1.6c-.1 0-.3.1-.3.2l-.1.5-.1-.2c-.4-.5-1.1-.7-1.9-.7-1.8 0-3.4 1.4-3.7 3.3-.2 1 .1 1.9.6 2.5.5.6 1.2.8 2.1.8 1.5 0 2.3-.9 2.3-.9l-.1.5c0 .2.1.3.3.3H34c.2 0 .4-.2.5-.4l.9-5.6c-.1-.1-.3-.3-.4-.3m-2.3 3.2c-.2.9-.9 1.6-1.9 1.6-.5 0-.9-.2-1.1-.4-.2-.3-.3-.7-.3-1.2.1-.9.9-1.6 1.8-1.6.5 0 .8.2 1.1.4.3.3.4.8.4 1.2" fill="#263B80"></path><path d="M59.4 7.4h-1.6c-.1 0-.3.1-.3.2l-.1.5-.1-.2c-.4-.5-1.1-.7-1.9-.7-1.8 0-3.4 1.4-3.7 3.3-.2 1 .1 1.9.6 2.5.5.6 1.2.8 2.1.8 1.5 0 2.3-.9 2.3-.9l-.1.5c0 .2.1.3.3.3h1.5c.2 0 .4-.2.5-.4l.9-5.6c-.1-.1-.2-.3-.4-.3m-2.3 3.2c-.2.9-.9 1.6-1.9 1.6-.5 0-.9-.2-1.1-.4-.2-.3-.3-.7-.3-1.2.1-.9.9-1.6 1.8-1.6.5 0 .8.2 1.1.4.4.3.5.8.4 1.2" fill="#139AD6"></path><path d="M43.7 7.4H42c-.2 0-.3.1-.4.2L39.4 11l-1-3.2c-.1-.2-.2-.3-.5-.3h-1.6c-.2 0-.3.2-.3.4l1.8 5.3-1.7 2.4c-.1.2 0 .5.2.5h1.6c.2 0 .3-.1.4-.2L43.8 8c.3-.3.1-.6-.1-.6" fill="#263B80"></path><path d="M61.3 4.5l-1.4 9c0 .2.1.3.3.3h1.4c.2 0 .4-.2.5-.4l1.4-8.8c0-.2-.1-.3-.3-.3h-1.6c-.1-.1-.2 0-.3.2" fill="#139AD6"></path><path d="M12 1.2C11.3.4 10 0 8.2 0h-5c-.3 0-.6.3-.7.6l-2 13.1c0 .3.2.5.4.5H4l.8-4.9v.2c.1-.3.4-.6.7-.6H7c2.9 0 5.1-1.2 5.8-4.5v-.3c-.1 0-.1 0 0 0 .1-1.3-.1-2.1-.8-2.9" fill="#263B80"></path><path d="M12.7 4.1v.3C12 7.8 9.8 8.9 6.9 8.9H5.4c-.3 0-.6.3-.7.6l-1 6.1c0 .2.1.4.4.4h2.6c.3 0 .6-.2.6-.5v-.1l.5-3.1v-.2c0-.3.3-.5.6-.5h.4c2.5 0 4.5-1 5-4 .2-1.2.1-2.3-.5-3-.1-.2-.3-.4-.6-.5" fill="#139AD6"></path><path d="M12 3.8c-.1 0-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.4-.1-.8-.1-1.3-.1H6.2c-.1 0-.2 0-.3.1-.2.1-.3.3-.3.5l-.8 5.2v.2c.1-.3.4-.6.7-.6H7c2.9 0 5.1-1.2 5.8-4.5 0-.1 0-.2.1-.3-.2-.1-.3-.2-.5-.2-.3-.1-.3-.1-.4-.1" fill="#232C65"></path></g></svg>'
    }
]

function CheckoutContent() {

    const [selectedMethod, setSelectedMethod] = useState(0)
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [openEditForm, setOpenEditForm] = useState(false)
    const [editedAddress, setEditedAddress] = useState('')
    const [changeAddresForm, setChangeAddresForm] = useState(false)

    const handleShippingMethodChange = (index) => {
        setSelectedMethod(index)
    }

    const handleChoosePaymentMethod = (index) => {
        setSelectedPaymentMethod(index)
        setIsActive(true)
    }

    const style = {
        '--scale-factor': isActive ? 0.6 : 0,
        '--opacity-level': isActive ? 1 : 0
    };

    const calculateTotalPrice = (subtotal, shippingcost) => {
        return subtotal + shippingcost;
    }

    const handleCloseEditForm = () => {
        setOpenEditForm(!openEditForm)
    }

    const handleEditedAddress = (data) => {
        setEditedAddress(data)
    }

    const handleCloseChangeForm = () => {
        setChangeAddresForm(!changeAddresForm)
        setOpenEditForm(!openEditForm)
    }

    const handleCloseAndOpenEditForm = () => {
        setChangeAddresForm(!changeAddresForm)
        setOpenEditForm(!openEditForm)
    }

    return (
        <div className={cx("loading_wrapper")}>
            <div className={cx("checkout_page_container")}>
                <main style={{display: "block"}}>
                    <div className={cx("checkout_maxwidth")}>
                        <div className={cx("checkout_wrapper")}>
                            <div className={cx("checkout_content")}>
                                <div>
                                    <section>
                                        <div className={cx("style_container")}>
                                            <div className={cx("step_badge_wrap")}>
                                                <div className={cx("status_icon_circle")}>
                                                    <span>1</span>
                                                </div>
                                                <h2>
                                                    <span>Shipping</span>
                                                </h2>
                                            </div>
                                        </div>
                                        <div className={cx("divider_wrapper")}>
                                            <hr></hr>
                                        </div>
                                        {!openEditForm 
                                        ?
                                        <div className={cx("loading_style-wrapper")}>
                                            <div className={cx("loading_style-wrapper")}>
                                                <h3>Your shipping address</h3>
                                                <div className={cx("summary_style-wrapper")}>
                                                    <div className={cx("address_row")}>
                                                        <span>
                                                            <span>{isNullOrEmpty(editedAddress) ? `Lê Bảo, 90011 Baychester Ave, Bronx, 10475-1704, NY, (0338171052)` : editedAddress}</span>
                                                        </span>
                                                        <div className={cx("saved_address-sticky")}>
                                                            <span>
                                                                <button onClick={() => setOpenEditForm(!openEditForm)} className={cx("button_edit")}>Edit</button>
                                                                |
                                                                <button onClick={() => setChangeAddresForm(!changeAddresForm)} className={cx("button_change")}>Change</button>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx("contact_summary-wrapper")}>
                                                <h3>Nidas Account Email</h3>
                                                <div className={cx("contact_summary_email-wrapper")}>
                                                    <span>bao08042002@gmail.com</span>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <EditAddressCheckout onClose={handleCloseEditForm} onChange={handleEditedAddress}></EditAddressCheckout>
                                        }
                                        {changeAddresForm && <ChangeAddress onClose={handleCloseChangeForm} onOpenEditForm={handleCloseAndOpenEditForm}></ChangeAddress>}
                                        <div className={cx("loading_style-wrapper")}>
                                            <div className={cx("shipping_method_wrapper")}>
                                                <div className={cx("shipping_method_title-wrapper")}>
                                                    <h3>Choose your shipping speed</h3>
                                                </div>
                                            </div>
                                            <div className={cx("shipping_method_style-wrapper")}>
                                                {shippingMethods.map((item) => (
                                                    <div key={item.index}>
                                                        <label 
                                                            onClick={() => handleShippingMethodChange(item.index)} 
                                                            className={cx("radio_button-label")}
                                                            style={{border: selectedMethod === item.index ? "1px solid rgb(39, 131, 235)" : "1px solid rgb(224, 224, 224)"}}
                                                        >
                                                            <div className={cx("shipping_method_title-wrapper")}>
                                                                <div className={cx("shipping_method_title-text")}>
                                                                    <span>{item.title}</span>
                                                                </div>
                                                                <span className={cx("shipping_method_title-caption")}>
                                                                    <span>
                                                                        <span>{item.caption}</span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <input type='radio' className={cx("radio_button")} value={item.value}></input>
                                                            <div style={{display: selectedMethod === item.index ? "block" : "none"}} className={cx("radio_button-style")}></div>
                                                        </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        
                                    </section>
                                    <section>
                                        <div className={cx("style_container")}>
                                            <div className={cx("step_badge_wrap")}>
                                                <div className={cx("status_icon_circle")}>
                                                    <span>2</span>
                                                </div>
                                                <h2>
                                                    <span>Payment</span>
                                                </h2>
                                            </div>
                                        </div>
                                        <div className={cx("divider_wrapper")}>
                                            <hr></hr>
                                        </div>
                                        <h3>Choose your payment method</h3>
                                        <div className={cx("payment_wrapper")}>
                                            <div className={cx("loading_wrapper")}>
                                                {PaymentMethods.map(item => (
                                                    <div key={item.id}>
                                                        <div style={{borderColor: selectedPaymentMethod === item.id ? "rgb(0, 90, 210)" : "rgb(224, 224, 224)"}} className={cx("accordion_item_wrapper")}>
                                                            <div onClick={() => handleChoosePaymentMethod(item.id)} className={cx("header_button")}>
                                                                <label className={cx("radio_input_label")}>
                                                                    <div className={cx("radio_input_container")}>
                                                                        <input type='radio'></input>
                                                                        <div style={selectedPaymentMethod === item.id ? style : {}} className={cx("radio_input_style")}></div>
                                                                    </div>
                                                                    <div className={cx("header_content")}>
                                                                        <span>{item.name}</span>
                                                                        <div className={cx("payment_icon_container")}>
                                                                        {item.icon.includes('<svg')
                                                                            ? <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                                                                            : <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                                                                        }
                                                                        </div>
                                                                    </div>
                                                                </label>
                                                            </div>
                                                            <div className={cx("animate_height")}></div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <p className={cx("primary_payment_des")}>
                                            <span>By placing your order, you agree to the Terms and Conditions and Privacy Policy. Please note, we use your personal information to process, deliver and support your order. We may also use your personal information to email you in order to gather feedback on our services. To find out how to control your personal data, please see our Privacy Policy.</span>
                                        </p>
                                        <div className={cx("payment_button_outer_container")}>
                                                <div className={cx("payment_button_container")}>
                                                    <button>
                                                        <span>{selectedPaymentMethod === 1 ? "Place order" : "PayPal"}</span>
                                                    </button>
                                                    <span>{`Total: $179.99`}</span>
                                                </div>
                                        </div>
                                    </section>
                                </div>    
                            </div>
                            <div className={cx("checkout_sidebar-wrapper")}>
                                <div className={cx("loading_wrapper")}>
                                    <div className={cx("summary_wrapper")}>
                                        <h2>Order Summary</h2>
                                        <div className={cx("sidebar_line")}>
                                            <span className={cx("sidebar_line-text")}>Subtotal</span>
                                            <span className={cx("sidebar_line-text")}>
                                                <span>$179.99</span>
                                            </span>
                                        </div>
                                        <div className={cx("sidebar_line")}>
                                            <span className={cx("sidebar_line-text")}>{shippingMethods[selectedMethod].name}</span>
                                            <span className={cx("sidebar_line-text")}>{shippingMethods[selectedMethod].price === 0 ? "Free" : `$${shippingMethods[selectedMethod].price}`}</span>
                                        </div>
                                        <div className={cx("sidebar_line")}>
                                            <span style={{fontWeight: "700", fontSize: "1.125rem", lineHeight: "1.75rem"}} className={cx("sidebar_line-text")}>Order Total</span>
                                            <span style={{fontWeight: "700", fontSize: "1.125rem", lineHeight: "1.75rem"}} className={cx("sidebar_line-text")}>
                                                <span>{`$${calculateTotalPrice(179.99,shippingMethods[selectedMethod].price)}`}</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className={cx("wrap")}>
                                        <div>
                                            <div className={cx("accordian_style")}>
                                                <div className={cx("order_detail-title")}>
                                                    <div className={cx("order_detail-title-content")}>
                                                        <div className={cx("order_detail-title-row")}>
                                                            <h2>Order Details</h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={cx("animate_height-wrapper")}>
                                                <div className={cx("accordian_content")}>
                                                    <div className={cx("animate_height-wrapper")}>
                                                        <div className={cx("line_item-wrapper")}>
                                                            <div className={cx("line_item-section")}>
                                                                <div className={cx("line_item-section-header")}>
                                                                    <h2>
                                                                        <span>Available now</span>
                                                                    </h2>
                                                                </div>
                                                                <div className={cx("line_item-section-content")}>
                                                                    <div className={cx("product_row_container")}>
                                                                        <div className={cx("lineitem_detail")}>
                                                                            <div className={cx("product_image-wrapper")}>
                                                                                <img src='https://www.lego.com/cdn/cs/set/assets/blt468d63d0eb6c81a8/42096.jpg?fit=bounds&format=jpg&quality=80&width=320&height=320&dpr=1'></img>
                                                                            </div>
                                                                            <div className={cx("lineitem_detail-container")}>
                                                                                <div className={cx("text_wrapper")}>
                                                                                    <h3><span>Porsche 911 RSR</span></h3>
                                                                                </div>
                                                                                <div className={cx("info_wrapper")}>
                                                                                    <div className={cx("media_query")}>
                                                                                        <div className={cx("product_price")}>
                                                                                            <span>
                                                                                                <span>Price</span>
                                                                                                $179.99
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <p>Qty: 1</p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default CheckoutContent;