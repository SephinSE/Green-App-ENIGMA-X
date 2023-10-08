import React from "react";
import './Home.css';
import logo from '../assets/logo.png'
import user from '../assets/user.png'

const Home = () => {

    return (
        <div className="home-container">
            <div className="navbar">
                <div className="nav-logo">
                    <div className="nav-logo-text">GreenApp</div>
                    <img draggable="false" className="nav-logo-img" src={logo} alt="logo" />
                </div>

                <div className="nav-user">
                    <div className="nav-user-bar">
                        Hi, Vaishnav!
                    </div>
                    <img src={user} draggable="false" className="nav-user-img" alt="profile" />
                </div>
            </div>

        </div>
    );
}

export default Home;