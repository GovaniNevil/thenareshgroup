import React from 'react';
import { FaSearch } from "react-icons/fa";
import "./Header.css";
import Logo from "../image/logo.png";

function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="logo">
                        <img src={Logo} alt="Naresh Enterprises Logo" />
                    </div>
                    <nav className="navbar navbar-expand-md navbar-light bg-white">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto d-flex align-items-center">
                                <li className="nav-item">
                                    <a className="nav-link custom-icon " href="#home">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link custom-icon" href="#about">ABOUT US</a>
                                </li>
                                <li className="nav-item ">
                                    <a className="nav-link custom-icon" href="#products">PRODUCTS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link custom-icon" href="#rmc">RMC</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link custom-icon" href="#quality">QUALITY</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link custom-icon" href="#contact">CONTACT US</a>
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
}

export default Header;
