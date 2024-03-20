import styles from '../LoginMain.module.scss'
import classNames from 'classnames/bind';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

const cx = classNames.bind(styles);

function LoginForm() {

    const navigate = useNavigate()
    const success = new URLSearchParams(useLocation().search).get('success')

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    });

    const validForm = (user) => {
        if(user.firstname === '' || user.lastname === '' || user.email === '' || user.password === '') {
            return false;
        }else {
            return true;
        }
    }

    const handleInputChange = (e) => {
        setUserData({
         ...userData,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if(success === 'true') {
            toast.success("Registration successful");
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8080/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (response.status === 200) {
                response.json().then(data => {
                    localStorage.setItem('token', data.token);
                    navigate("/")
                });
            }else {
                navigate("/login?error=true")
                toast.error("Login failed");
            }
        })
        .catch(error => console.error('Error:', error));  
    }

    const [visiblePassword, setVisiblePassword] = useState(false);

    const passwordRef = useRef()
    const spanRef = useRef()

    const handleShowPassword = () => {
        setVisiblePassword(!visiblePassword);
        passwordRef.current.type = visiblePassword ? "password" : "text";
    }

    return (
        <div className={cx("card-container")}>
            <Toaster position="top-right" reverseOrder={false}></Toaster>
            <div className={cx("card-padding")}>
                <div className={cx("textfield-group")}>
                    <label htmlFor="username" className={cx("label-container")}>
                        Username
                    </label>
                    <div className={cx("textfield-input-container")}>
                        <input
                            value={userData.username}
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            className={cx("textfield-input-value")}
                            onChange={(e) => handleInputChange(e)}
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
                </div>
                <div className={cx("textfield-group")}>
                    <label htmlFor="password" className={cx("label-container")}>
                        Password
                    </label>
                    <div className={cx("textfield-input-container")}>
                        <input
                            ref={passwordRef}
                            value={userData.password}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className={cx("textfield-input-value")}
                            onChange={(e) => handleInputChange(e)}
                        />
                        <button type="button" onClick={() => handleShowPassword()} className={`${cx("textfield-icon-wrapper")} ${cx("show-password")}`}>
                        {/* show-password */}
                            <span ref={spanRef} className={`${cx("icon")} ${cx("eye-icon")}`}>
                                {visiblePassword
                                ? <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" ><circle cx="10.5" cy="10.3" r="3.5" fill="currentColor"></circle><path d="M10.5 15.5501C7.2757 15.5501 3.9457 13.8688 1.28963 10.3C3.9457 6.73129 7.2757 5.05 10.5 5.05C13.7243 5.05 17.0543 6.73129 19.7104 10.3C17.0543 13.8688 13.7243 15.5501 10.5 15.5501Z" stroke="currentColor" strokeWidth="2.1"></path></svg>
                                : <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" ><circle cx="16" cy="16" r="5" fill="currentColor"></circle><path d="M16 23.5001C11.3939 23.5001 6.63672 21.0982 2.84233 16C6.63672 10.9018 11.3939 8.5 16 8.5C20.6061 8.5 25.3633 10.9018 29.1577 16C25.3633 21.0982 20.6061 23.5001 16 23.5001Z" stroke="currentColor" strokeWidth="3"></path><line x1="3" y1="28.8787" x2="26.8787" y2="5" stroke="currentColor" strokeWidth="3" strokeLinecap="round"></line></svg>
                                }
                            </span>
                        </button>
                    </div>
                </div>
                <button style={{pointerEvents: !validForm(userData) ? "none" : ""}} onClick={(e) => handleSubmit(e)} type="submit" className={cx("button-base-form")}>
                    <span>Sign in</span>
                </button>
            </div>
        </div>
    );
}

export default LoginForm;
