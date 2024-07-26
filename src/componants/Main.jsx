import React from 'react';

import { FaArrowRight, FaDownload } from 'react-icons/fa';
import './Main.css';
import image1 from "../image/image 1.png";
import image2 from "../image/image 2.png";
import image3 from "../image/image 3.png";
import logo2 from "../image/logo2.png";
import img1 from "../image/asianpaints.jpg";
import img2 from "../image/hdfc Life.jpg";
import img3 from "../image/tata wiron.jpg";
import img4 from "../image/ultraTech.jpg";
import img5 from "../image/marico.jpg";
import img6 from "../image/glenmark.jpg"
import image4 from '../image/Admixture.jpeg';
import image5 from '../image/ACC BLOCK.jpeg';
import image6 from '../image/Jointing morter.jpeg';

const MainPages = () => {
    return (
        <>
            <section className="d-flex flex-column flex-md-row align-items-center" id="hero">
                <div className="hero-text text-md-left">
                    <div style={{ fontStyle: "italic" }} className="justify-content-center">
                        <h2 className="d-flex align-items-center">Ready to <h1 style={{ color: "#005477" }} className="fw-bold mx-2">MIX</h1>&</h2>
                        <h2 className="d-flex align-items-center">Ready to <h1 style={{ color: "#005477" }} className="fw-bold mx-2">CONQUER!</h1></h2>
                    </div>
                    <p>Building a foundation for the future while honoring the values of today. Our vision is to build a world that balances progress and heritage.</p>
                    <div style={{ gap: "10px" }} className="d-flex justify-content-left">
                        <div className="d-flex">
                            <a href="#know-more" className="custom-button button1 m-1">KNOW MORE</a>
                            <span className='spancustom'>&gt;</span>
                        </div>
                        <div className="d-flex">
                            <a href="#download-brochure" className="custom-button button2 m-1">DOWNLOAD BROCHURE</a>
                            <span className='spancustom'>&#9660;</span>
                        </div>
                    </div>
                </div>
                <div className="hero-image mt-3 mt-md-0">
                    <img src={image1} alt="Cement Truck" />
                </div>
            </section>
            <div className="hero-section d-flex flex-column flex-md-row align-items-center">
                <div className="text-starthero-content w-100 w-md-50 text-center text-md-left mb-md-0 order">
                    <h2 className="text-start">WE DELIVER QUALITY <br /> <h1 className="fw-bold">CONCRETE</h1></h2>
                    <p>Naresh Enterprises is a professionally managed company that produces Ready Mix Concrete for the building industry. Naresh Enterprises is poised to become a prominent player in the sunrise sector by leveraging extensive experience and resources.</p>
                    <div style={{ fontSize: "22px", gap: "20px" }} className="d-flex justify-content-left">
                        <div className="d-flex">
                            <a href="#learn-more" className="custom-button button3 m-1">LEARN MORE</a>
                             <span className='span12'>&gt;</span>
                        </div>
                        <div className="d-flex">
                            <a href="#vision-values" className="custom-button button4 m-1">VISION & VALUES</a>
                             <span className='span12'>&gt;</span>
                        </div>
                    </div>
                    <div className="stats d-flex justify-content-start mt-3">
                        <div className="stat-item text-center">
                            <span>500</span>
                            <p>Clients</p>
                        </div>
                        <div className="stat-item text-center">
                            <span>10</span>
                            <p>Vehicles</p>
                        </div>
                        <div className="stat-item text-center">
                            <span>60</span>
                            <p>M³/Hr</p>
                        </div>
                    </div>
                </div>
                <div className="image2">
                    <img className="img12" src={image2} alt="Cement Truck" />
                </div>
            </div>
            <section className="why-choose-us d-flex flex-column flex-md-row align-items-center my-5">
                <div className="h-100">
                    <img className="img12" src={image3} alt="Cement Truck" />
                </div>
                <div className="content w-md-50 text-center text-md-left" style={{ backgroundColor: '#005477', color: '#fff' }}>
                    <h2 className="text-start p-3 mt-2">WHY CHOOSE US</h2>
                    <div className="reasons">
                        <div className="reason mb-3 border-bottom" style={{ backgroundColor: '#005477', border: 'none' }}>
                            <h3>QUALITY UNIFORMITY</h3>
                            <p>At Naresh Enterprises, quality is the highest priority. Achieving customer satisfaction through ensuring the best quality is our goal.</p>
                        </div>
                        <div className="reason mb-3 border-bottom" style={{ backgroundColor: '#005477', border: 'none' }}>
                            <h3>PRE & POST EVALUATION</h3>
                            <p>We provide the best possible service through pre-evaluation of the work site. Post-evaluation services are also further analyzed through intensive BLET evaluation.</p>
                        </div>
                        <div className="reason mb-3 border-bottom" style={{ backgroundColor: '#005477', border: 'none' }}>
                            <h3>CUSTOMIZED CONCRETE</h3>
                            <p>Considering the various requirements, we provide customized product solutions.</p>
                        </div>
                        <div className="reason" style={{ backgroundColor: '#005477', border: 'none' }}>
                            <h3>MAXIMUM PRODUCTION CAPACITY</h3>
                            <p>With dedicated equipment and large-scale material fleet, Naresh Enterprises can support any large projects.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="divisions">
                <h2 className="text-start">
                    OUR
                    <br />
                    <h1 style={{ color: "#005477", display: 'inline' }}> DIVISIONS </h1>
                </h2>
                <br />
                <br />
                <div className="slider">
                    <input type="radio" name="slider" id="slide1" checked />
                    <input type="radio" name="slider" id="slide2" />

                    <div className="slides">
                        <div className="slide">
                            <div className="division-list">
                                <div className="division" style={{ backgroundImage: `url(${image4})` }}>
                                    <div className="division-content text-start">
                                        <h3>ADMIXTURE</h3>
                                        <div className="d-flex span1">
                                            <a className="learn-more-btn" href="#">Learn More</a>
                                            <span>&gt;</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="division" style={{ backgroundImage: `url(${image5})` }}>
                                    <div className="division-content text-start">
                                        <h3>AAC BLOCKS</h3>
                                        <div className="d-flex span1">
                                            <a className="learn-more-btn" href="#">Learn More</a>
                                            <span>&gt;</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="division" style={{ backgroundImage: `url(${image6})` }}>
                                    <div className="division-content text-start">
                                        <h3>JOINTING MORTAR</h3>
                                        <div className="d-flex span1">
                                            <a className="learn-more-btn" href="#">Learn More</a>
                                            <span>&gt;</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slide">
                            <div className="division-list">
                                <div className="division" style={{ backgroundImage: `url(${image4})` }}>
                                    <div className="division-content text-start">
                                        <h3>ADMIXTURE</h3>
                                        <div className="d-flex span1">
                                            <a className="learn-more-btn" href="#">Learn More</a>
                                            <FaArrowRight className="ml-2" />
                                        </div>
                                    </div>
                                </div>
                                <div className="division" style={{ backgroundImage: `url(${image5})` }}>
                                    <div className="division-content text-start">
                                        <h3>AAC BLOCKS</h3>
                                        <div className="d-flex span1">
                                            <a className="learn-more-btn" href="#">Learn More</a>
                                            <FaArrowRight className="ml-2" />
                                        </div>
                                    </div>
                                </div>
                                <div className="division" style={{ backgroundImage: `url(${image6})` }}>
                                    <div className="division-content text-start">
                                        <h3>JOINTING MORTAR</h3>
                                        <div className="d-flex span1">
                                            <a className="learn-more-btn" href="#">Learn More</a>
                                            <FaArrowRight className="ml-2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pagination">
                        <label htmlFor="slide1" className="pagination-dot"></label>
                        <label htmlFor="slide2" className="pagination-dot"></label>
                    </div>
                </div>
            </section>
            <section className="clients">
                <h2>Our <h1 style={{ color: "#005477" }}> Clients </h1></h2>
                <br />
                <div className="container mt-5">
                    <div className="slider1">
                        <div className="slider-track">
                            <div className="slide1">
                                <img className="img1" src={img1} alt="Client Logo 1" />
                            </div>
                            <div className="slide1">
                                <img className="img1" src={img2} alt="Client Logo 2" />
                            </div>
                            <div className="slide1">
                                <img className="img1" src={img3} alt="Client Logo 3" />
                            </div>
                            <div className="slide1">
                                <img className="img1" src={img4} alt="Client Logo 4" />
                            </div>
                            <div className="slide1">
                                <img className="img1" src={img5} alt="Client Logo 5" />
                            </div>
                            <div className="slide1">
                                <img className="img1" src={img6} alt="Client Logo 6" />
                            </div>
                            <div className="slide1">
                                <img className="img1" src={img1} alt="Client Logo 1" />
                            </div>
                            <div className="slide1">
                                <img className="img1" src={img2} alt="Client Logo 2" />
                            </div>
                            <div className="slide1">
                                <img className="img1" src={img3} alt="Client Logo 3" />
                            </div>
                            <div className="slide1">
                                <img className="img1" src={img4} alt="Client Logo 4" />
                            </div>
                            <div className="slide1">
                                <img className="img1" src={img5} alt="Client Logo 5" />
                            </div>
                            <div className="slide1">
                                <img className="img1" src={img6} alt="Client Logo 6" />
                            </div>
                        </div>
                    </div>
                </div>

                <img className="img2" src={logo2} alt="shadow" />
            </section>
        </>
    );
};

export default MainPages;