import React from "react";
import { useNavigate } from 'react-router-dom';
import './Landing.css';


const Landing = () => {

    const navigate = useNavigate();
    const handleRegister = () => {
        navigate('/register');
    }
    const handleLogin = () => {
        navigate('/home');
    }


    return (
        <div className="landing-container">
                <div className="slide"></div>
                <div className="slide"></div>
                <div className="slide"></div>
                <div className="slide"></div>
                <div className="slide"></div>
            

            <div className="landing-login-container">

                <div className="login-text">Login to GreenApp</div>

                <div className="login-label">
                    <input className="login-input" type="text" id="login-username" required />
                    <label for="login-username" className="login-label-text">username</label>
                </div>

                <div className="login-label">
                    <input className="login-input" type="password" id="login-password" required />
                    <label for="login-password" className="login-label-text">password</label>
                </div>

                <div className="login-submit">
                    <button className="login-button" onClick={handleLogin}>Login</button>
                </div>

                <div className="login-create-account" onClick={handleRegister}>
                    Don't have an account? Create one <span className="login-register-link">here.</span>
                </div>
            </div>
        </div>
    );
}

export default Landing;
