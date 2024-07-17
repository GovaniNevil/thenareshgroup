import React from 'react';
import Logo from "../image/logo.png"
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container text-start">
                <div className="footer-section logo">
                    <img src={Logo} alt="Naresh Enterprise Logo" />
                    <p className='text-start'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                </div>
                <div className="footer-section explore  ">
                    <h4>EXPLORE</h4>
                    <div className='d-flex' style={{gap:"26px"}}>
                    <ul>
                        <li>Home</li>
                        <li>Who we are</li>
                        <li>Our Products</li>
                        <li>Quality & Technology</li>
                    </ul>
                    <ul> <li>Media</li>
                        <li>Contact Us</li>
                        <li>Careers</li>
                        <li>Blogs</li>
                    </ul>
                    </div>
                </div>
                <div className="footer-section policy  text-start">
                    <h4>POLICY</h4>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-section address  text-start">
                    <h4>ADDRESS</h4>
                    <p>
                        <strong>Office Address:</strong><br />
                        1410, Sanjar One world, SV road,<br />
                        Malad west, Mumbai - 400064
                    </p>
                    <p>
                        <strong>Plant Address:</strong><br />
                        180/1/2, Sasunavghar, behind<br />
                        Shree Khodiyar kathiyawad hotel,<br />
                        Western express highway, Palghar - 401107
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Naresh Enterprise. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
