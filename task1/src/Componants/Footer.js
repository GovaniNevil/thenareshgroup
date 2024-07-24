import React from 'react';
import Logo from "../image/logo.png"
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container  ">
                <div className="footer-section logo text-start footer-section1 ">
                    <img src={Logo} alt="Naresh Enterprise Logo1" />
                    <p className='text-start'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                    </p>
                    <p className='text-start pt-2'>
                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries

                    </p>
                </div>
                <div className="footer-section explore text-start pt-3 ">
                    <h4>EXPLORE</h4>
                    <div className='d-flex'>
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
                <div className="pt-3  footer-section policy  text-center">
                    <h4 className='header1'>POLICY</h4>
                    <ul className='text-start'>
                        <li className='footermargin1'>Terms & Conditions</li>
                        <li className='footermargin2'>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-section address pt-3 text-start text-start">
                    <h4>ADDRESS</h4>
                    <p className='footersectionp' >
                        <strong style={{ paddingBottom: "5px" }}>Office Address:</strong><br />
                        <p className='pt-1'>
                            1410, Sanjar One world, SV road,<br />
                            Malad west, Mumbai - 400064
                        </p>
                    </p>
                    <p className='footersectionp' >
                        <strong>Plant Address:</strong><br />
                        <p className='pt-1'>  180/1/2, Sasunavghar, behind<br />
                            Shree Khodiyar kathiyawad hotel,<br />
                            Western express highway, Palghar - 401107
                        </p>
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2024 Naresh Enterprise. All Rights Reserved.</p>
            </div>
        </footer >
    );
}

export default Footer;
