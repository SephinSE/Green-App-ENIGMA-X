import React from "react";
import { useNavigate } from 'react-router-dom';
import './Landing.css';
import './Register.css';

const Register = () => {

    const navigate = useNavigate();
    const handleRegister = () => {
        navigate('/home');
    }

    return (
        <div className="landing-container">
                <div className="slide"></div>
                <div className="slide"></div>
                <div className="slide"></div>
                <div className="slide"></div>
                <div className="slide"></div>

            <div className="register-login-container">

                <div className="register-text">Register on GreenApp</div>

                <div className="register-label">
                    <input className="login-input" type="text" id="register-email" required />
                    <label for="login-username" className="login-label-text">email</label>
                </div>

                <div className="register-label">
                    <input className="login-input" type="text" id="register-name" required />
                    <label for="login-username" className="login-label-text">full name</label>
                </div>

                <div className="register-label">
                    <input className="login-input" type="text" id="register-username" required />
                    <label for="login-username" className="login-label-text">username</label>
                </div>

                <div className="register-label">
                    <input className="login-input" type="password" id="register-password" required />
                    <label for="login-username" className="login-label-text">password</label>
                </div>

                <div className="login-submit">
                    <button className="register-button" onClick={handleRegister}>Register</button>
                </div>
            
            </div>
        </div>
    );
}

export default Register;
