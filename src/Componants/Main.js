import React from 'react';
import './Main.css'; // Assuming you have a CSS file for styling
import image1 from "../image/image 1.png";
import image2 from "../image/image 2.png";
import image3 from "../image/image 3.png";
import logo1 from "../image/logo1.jpeg";

const image4 = require('../image/Admixture.jpeg');
const image5 = require('../image/ACC BLOCK.png');
const image6 = require('../image/Jointing morter.png');
function Main() {
    return (
        <>
            <section className='d-flex flex-column flex-md-row align-items-center' id="hero">
                <div className="hero-text text-md-left">
                    <div style={{ fontStyle: "italic" }} className='justify-content-center'>
                        <h2 className='d-flex align-items-center'>Ready to <h1 style={{ color: "#005477" }} className=' fw-bold mx-2'>MIX</h1>&</h2>
                        <h2 className='d-flex align-items-center'>Ready to <h1 style={{ color: "#005477" }} className=' fw-bold mx-2'>CONQUER!</h1></h2>
                    </div>
                    <p>Building a foundation for the future while honoring the heritage of those who came before us to build a world that balances progress and harmony.</p>
                    <div className='d-flex justify-content-left'>
                        <a href="#know-more" className="custom-button m-1">KNOW MORE <span>&gt;</span></a>
                        <a href="#download-brochure" className="custom-button m-1">DOWNLOAD BROCHURE<span>&#9662;</span></a>
                    </div>


                </div>
                <div className="hero-image mt-3 mt-md-0">
                    <img src={image1} alt="Cement Truck" />
                </div>
            </section>
            <div className="hero-section d-flex flex-column flex-md-row align-items-center ">
                <div className="text-starthero-content w-100 w-md-50 text-center text-md-left  mb-md-0">
                    <h2 className='text-start'>WE DELIVER QUALITY <br />  <h1 style={{ color: "#005477", fontize: "77px" }} className=' fw-bold'>CONCRETE</h1></h2>
                    <p>
                        Naresh Enterprises is a professionally managed company that produces Ready Mix Concrete for the building industry. Naresh Enterprises is poised to become a prominent player in the sunrise sector by leveraging extensive experience and resources.
                    </p>
                    <div className='d-flex justify-content-left'>
                        <a href="#LEARN-more" className="custom-button m-1">LEARN MORE <span>&gt;</span></a>
                        <a href="#vision & values" className="custom-button m-1">VISION & VALUES<span>&gt;</span></a>
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
                <div className="1image">
                    <img src={image2} alt="Cement Truck" />
                </div>
            </div>
            <section className="why-choose-us d-flex flex-column flex-md-row align-items-center my-5">
                <div className="hero-image w-100 h-100">
                    <img src={image3} alt="Cement Truck" />
                </div>
                <div className="content w-100 w-md-50 text-center text-md-left p-2" style={{ backgroundColor: '#005477', color: '#fff' }}>
                    <h2 className="text-start p-3 mt-2 ">WHY CHOOSE US</h2>
                    <div className="reasons mt-4 ">
                        <div className="reason mb-3 p-3 border-bottom" style={{ backgroundColor: '#005477', border: 'none' }}>
                            <h3>QUALITY UNIFORMITY</h3>
                            <p>At Naresh Enterprises, quality is the highest priority. Achieving customer satisfaction through ensuring the best quality is our goal.</p>
                        </div>
                        <div className="reason mb-3 p-3 border-bottom" style={{ backgroundColor: '#005477', border: 'none' }}>
                            <h3>PRE & POST EVALUATION</h3>
                            <p>We provide the best possible service through pre-evaluation of the work site. Post-evaluation services are also further analyzed through intensive BLET evaluation.</p>
                        </div>
                        <div className="reason mb-3 p-3 border-bottom" style={{ backgroundColor: '#005477', border: 'none' }}>
                            <h3>CUSTOMISED CONCRETE</h3>
                            <p>Considering the various requirements, we provide customised product solutions.</p>
                        </div>
                        <div className="reason p-3 " style={{ backgroundColor: '#005477', border: 'none' }}>
                            <h3>MAXIMUM PRODUCTION CAPACITY</h3>
                            <p>With dedicated equipment and large-scale material fleet, Naresh Enterprises can support any large projects.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="divisions">  <h2 className='text-start'>Our
                <h1 style={{ color: "#005477" }}>DIVISIONS </h1></h2>
                <br />
                <br />
                <div className="  division-list">
                    <div style={{
                        backgroundImage: `url(${image4})`,
                        width: '300px',
                        height: '450px',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }} className="division ">
                        <div className="division-content text-start ps-4">
                            <h3>ADMIXTURE</h3>
                            <button className="learn-more-btn">Learn More</button>
                        </div>
                    </div>
                    <div style={{
                        backgroundImage: `url(${image5})`,
                        width: '300px',
                        height: '450px',
                        backgroundSize: '300px 450px',
                        backgroundPosition: 'center'
                    }} className="division ">
                        <div className="division-content text-start ps-4">
                            <h3>ACC BLOCK</h3>
                            <button className="learn-more-btn">Learn More</button>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${image6})`,
                        width: '300px',
                        height: '450px',
                        backgroundSize: '300px 450px',
                        backgroundPosition: 'center' }} className="division ">
                        <div className="division-content text-start ps-4">
                            <h3>JOINTING MORTAR</h3>
                            <button className="learn-more-btn">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="clients">
                <h2>Our <h1 style={{ color: "#005477" }}> Clients </h1></h2>
                <br />
                <div className="client-list">
                    <div className="client  d-flex justify-content-center">
                        <img src={logo1} alt="Client Logo" />

                    </div>
                </div>
            </section>
        </>
    );
}

export default Main;
