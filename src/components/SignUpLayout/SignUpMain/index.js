import styles from '../SignUpLayout.module.scss';
import classNames from 'classnames/bind';
import { useNavigate} from 'react-router-dom';
import { useRef, useState, useEffect} from 'react';
import { isValidEmail } from '../signUpService';
import { validForm } from '../signUpService';
import { Toaster } from "react-hot-toast";
import toast from 'react-hot-toast';

const cx = classNames.bind(styles);

function SignUpMain() {

    const navigate = useNavigate()
    const [visiblePassword, setVisiblePassword] = useState(false);
    const passwordRef = useRef()
    const spanRef = useRef()
    const [errors, setErrors] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })
    const [userData, setUserData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        let newErrors = { ...errors };

        if (!value.trim()) {
            if(name === "email") {
                newErrors[name] = "Email is required"
            }else if(name === "password") {
                newErrors[name] = "Password is required"
            } else {
                newErrors[name] = "Required"
            }    
        } else {
            if(name == "email" && !isValidEmail(value)) {
                newErrors[name] = "Enter a valid email"
            } else if(name == "password" && value.trim().length < 10) {
                newErrors[name] = "The password must be at least 10 characters long"
            } else {
                newErrors[name] = ""
            }
        }

        setErrors(newErrors)
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        })
        
    }

    const handleShowPassword = () => {
        setVisiblePassword(!visiblePassword);
        passwordRef.current.type = visiblePassword ? "password" : "text";
    }

    const handleSignIn = () => {
        navigate('/login')
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (response.status === 200) {
                navigate("/login?success=true")
            }else {
                setUserData({
                    firstname: "",
                    lastname: "",
                    email: "",
                    password: ""
                });
                navigate("/signup?error=true")
                toast.error("Email already exists")
            }
        })
        .catch(error => console.error('Error:', error));
    }

    return (
            <main className={cx("page-body")}>
                <Toaster position="top-right" reverseOrder={false}></Toaster>
                <h1 className={cx("h1-text-base")}>Create your adult LEGO® account</h1>
                <h6 className={cx("h6-textbase")}>Already have an account?</h6>
                <div className={cx("box")}>
                    <button onClick={() => handleSignIn()} className={cx("link-to-login")}>
                        <span>Sign in</span>
                    </button>
                </div>
                <div className={cx("card-container")}>
                    <div className={cx("card-padding")}>
                        <div className={cx("box-magin")}>
                            <form className={cx("register-form")}>
                                <div className={cx("textfield-group")}>
                                    <label htmlFor="firstname" className={cx("label-container")}>
                                        First name
                                    </label>
                                    <div style={{borderColor: errors.firstname ? '#dd1a22' : ''}} className={cx("textfield-input-container")}>
                                        <input 
                                            value={userData.firstname}
                                            type="text" id="firstname" name="firstname" placeholder="Write your first name" className={cx("textfield-input-value")}
                                            onChange={(e) => handleInputChange(e)}
                                            onBlur={(e) => handleInputChange(e)}
                                        />
                                        <div className={cx("textfield-icon-wrapper")}>
                                            <span className={cx("icon")}>
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 19.72H1C1.15833 16.9016 3.28 11.265 10.5 11.265C17.72 11.265 20 16.9016 20 19.72Z" stroke="currentColor" strokeWidth="1.43"></path>
                                                    <path d="M14.535 5.80251C14.535 7.99799 12.7353 9.79001 10.5 9.79001C8.26477 9.79001 6.46503 7.99799 6.46503 5.80251C6.46503 3.60704 8.26477 1.81501 10.5 1.81501C12.7353 1.81501 14.535 3.60704 14.535 5.80251Z" stroke="currentColor" strokeWidth="1.43"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    {errors.firstname && <div className={cx("error-field")}>{errors.firstname}</div>}
                                </div>
                                <div className={cx("textfield-group")}>
                                    <label htmlFor="lastname" className={cx("label-container")}>
                                        Last name
                                    </label>
                                    <div style={{borderColor: errors.lastname ? '#dd1a22' : ''}} className={cx("textfield-input-container")}>
                                        <input 
                                            type="text" id="lastname" name="lastname" placeholder="Write your last name" className={cx("textfield-input-value")}
                                            value={userData.lastname}
                                            onChange={(e) => handleInputChange(e)}
                                            onBlur={(e) => handleInputChange(e)}
                                        />
                                        <div className={cx("textfield-icon-wrapper")}>
                                            <span className={cx("icon")}>
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M20 19.72H1C1.15833 16.9016 3.28 11.265 10.5 11.265C17.72 11.265 20 16.9016 20 19.72Z" stroke="currentColor" strokeWidth="1.43"></path>
                                                    <path d="M14.535 5.80251C14.535 7.99799 12.7353 9.79001 10.5 9.79001C8.26477 9.79001 6.46503 7.99799 6.46503 5.80251C6.46503 3.60704 8.26477 1.81501 10.5 1.81501C12.7353 1.81501 14.535 3.60704 14.535 5.80251Z" stroke="currentColor" strokeWidth="1.43"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    {errors.lastname && <div className={cx("error-field")}>{errors.lastname}</div>}
                                </div>
                                <div className={cx("textfield-group")}>
                                    <label htmlFor="email" className={cx("label-container")}>
                                        Email
                                    </label>
                                    <div style={{borderColor: errors.email ? '#dd1a22' : ''}} className={cx("textfield-input-container")}>
                                        <input 
                                            type="text" id="email" name="email" placeholder="Write your email" className={cx("textfield-input-value")}
                                            value={userData.email}
                                            onChange={(e) => handleInputChange(e)}
                                            onBlur={(e) => handleInputChange(e)}
                                        />
                                        <div className={cx("textfield-icon-wrapper")}>
                                            <span className={cx("icon")}>
                                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.25 3H1.75C1.28587 3 0.840752 3.16932 0.512563 3.47072C0.184375 3.77212 0 4.1809 0 4.60714V16.3929C0 16.8191 0.184375 17.2279 0.512563 17.5293C0.840752 17.8307 1.28587 18 1.75 18H19.25C19.7141 18 20.1592 17.8307 20.4874 17.5293C20.8156 17.2279 21 16.8191 21 16.3929V4.60714C21 4.1809 20.8156 3.77212 20.4874 3.47072C20.1592 3.16932 19.7141 3 19.25 3ZM17.8267 4.60714L11.6649 9.0224C10.9685 9.52145 10.0315 9.52145 9.33508 9.0224L3.17333 4.60714H17.8267ZM1.75 16.3929V5.625L9.33467 11.0627C10.0313 11.5622 10.9687 11.5622 11.6653 11.0627L19.25 5.625V16.3929H1.75Z" fill="currentColor"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    {errors.email && <div className={cx("error-field")}>{errors.email}</div>}
                                </div>
                                <div className={cx("textfield-group")}>
                                    <label htmlFor="password" className={cx("label-container")}>
                                        Password
                                    </label>
                                    <div style={{borderColor: errors.password ? '#dd1a22' : ''}} className={cx("textfield-input-container")}>
                                        <input 
                                            type="password" id="password" name="password" placeholder="Password" className={cx("textfield-input-value")}
                                            ref={passwordRef}
                                            value={userData.password}
                                            onChange={(e) => handleInputChange(e)}
                                            onBlur={(e) => handleInputChange(e)}
                                        />
                                        <button type="button" onClick={() => handleShowPassword()} className={`${cx("textfield-icon-wrapper")} ${cx("password-field")}`}>
                                            <span ref={spanRef} className={`${cx("icon")} ${cx("eye-icon")}`}>
                                                {visiblePassword
                                                ? <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" ><circle cx="10.5" cy="10.3" r="3.5" fill="currentColor"></circle><path d="M10.5 15.5501C7.2757 15.5501 3.9457 13.8688 1.28963 10.3C3.9457 6.73129 7.2757 5.05 10.5 5.05C13.7243 5.05 17.0543 6.73129 19.7104 10.3C17.0543 13.8688 13.7243 15.5501 10.5 15.5501Z" stroke="currentColor" strokeWidth="2.1"></path></svg>
                                                : <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" ><circle cx="16" cy="16" r="5" fill="currentColor"></circle><path d="M16 23.5001C11.3939 23.5001 6.63672 21.0982 2.84233 16C6.63672 10.9018 11.3939 8.5 16 8.5C20.6061 8.5 25.3633 10.9018 29.1577 16C25.3633 21.0982 20.6061 23.5001 16 23.5001Z" stroke="currentColor" strokeWidth="3"></path><line x1="3" y1="28.8787" x2="26.8787" y2="5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"></line></svg>
                                                }
                                            </span>
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <div className={cx("error-field")}>{errors.password}</div>
                                    )}
                                </div>
                                <div className={cx("buttons")}>
                                    <button 
                                    onClick={(e) => handleSubmitForm(e)} 
                                    className={cx("button-base-form")}
                                    style={{pointerEvents: !validForm(userData) ? "none" : "auto"}}
                                    >
                                        <span>Yes, create account!</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
    );
}

export default SignUpMain;
