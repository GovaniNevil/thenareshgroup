import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Logo from '../image/logo.png';
import "./Header.css"

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);

    useEffect(() => {
        if (isNavActive) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isNavActive]);

    const toggleNavbar = () => {
        setIsNavActive(!isNavActive);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="display justify-content-between">
                    <div className="logo12">
                        <div>
                            <img src={Logo} alt="Naresh Enterprises Logo" />
                        </div>
                        <button
                            id="navbarToggle"
                            className="navbar-toggler"
                            type="button" data-toggle="collapse"
                            data-target="#navbarNav"
                            onClick={toggleNavbar}
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <nav className="navbar navbar-expand-md navbar-light bg-white navbar-margin">
                        <div className={`collapse navbar-collapse ${isNavActive ? 'active' : ''}`} id="navbarNav">
                            <ul className="navbar-nav ml-auto d-flex align-items-center">
                                <li className="nav-item">
                                    <a className="nav-link custom-icon" href="#home">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link custom-icon" href="#about">ABOUT US</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link custom-icon" href="#products">PRODUCTS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link custom-icon" href="#rmc">RMC</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link custom-icon" href="#quality">QUALITY</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link custom-icon contact-us" href="#contact">CONTACT US</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link custom-icon" href="#search"><FaSearch /></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>

    );
};

export default Header;
