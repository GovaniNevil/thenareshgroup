import React from 'react';
import Logo from "../image/logo.png"


const Footer = () => {
    return (
        <footer className="border-t border-gray-200">
            <div className="flex flex-wrap xs:inline-block xl:justify-between xl:ml-20 pt-6 md:gap-2 md:justify-normal lg:gap-6 md:ml-6 sm:ml-3 xs:ml-4 ">
                <div className="xl:w-80 3xl:w-[400px] lg:w-[280px] md:w-[200px] xs:mt-3 mt-1">
                    <img src={Logo} alt="Naresh Enterprise Logo" className="xl:max-w-full 3xl:w-[200px] md:w-[127px]" />
                    <p className="mt-4 3xl:text-xl  xl:text-sm md:text-xs text-gray-700 leading-snug">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.
                    </p>
                    <p className="mt-2 3xl:text-xl  xl:text-sm  md:text-xs text-gray-700 leading-snug">
                        Text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
                    </p>
                </div>
                <div className="pt-3 xs:mt-3">
                    <h4 className="xl:text-xl lg:text-lg 3xl:text-3xl  md:text-base xs:text-xl font-bold mb-4">EXPLORE</h4>
                    <div className="flex">
                        <ul className=" space-y-3 3xl:text-2xl xl:text-xl lg:text-base md:text-xs">
                            <li className='3xl:py-2'>Home</li>
                            <li className='3xl:py-2' >Who we are</li>
                            <li className='3xl:py-2'>Our Products</li>
                            <li className='3xl:py-2'>Quality & Technology</li>
                        </ul>
                        <ul className="ml-8 3xl:ml-12  space-y-3 3xl:text-2xl xl:text-xl lg:text-base md:text-xs">
                            <li className='3xl:py-2'>Media</li>
                            <li className='3xl:py-2'>Contact Us</li>
                            <li className='3xl:py-2'>Careers</li>
                            <li className='3xl:py-2'>Blogs</li>
                        </ul>
                    </div>
                </div>
                <div className="pt-3 xs:mt-3">
                    <h4 className="xl:text-lg lg:text-lg font-bold xs:text-xl 3xl:text-3xl  md:text-base mb-4">POLICY</h4>
                    <ul className="space-y-3 3xl:text-2xl xl:text-xl lg:text-base md:text-xs">
                        <li className='3xl:py-2'>Terms & Conditions</li>
                        <li className='3xl:py-2'>Privacy Policy</li>
                    </ul>
                </div>

                <div className="pt-3 xs:mt-3 xl:w-80 lg:w-60 md:w-[200px]">
                    <h4 className="3xl:text-3xl xl:text-lg lg:text-lg font-bold xs:text-xl mb-4">ADDRESS</h4>
                    <p className="3xl:text-xl xl:text-sm md:text-xs text-gray-700 leading-snug">
                        <strong>Office Address:</strong><br />
                        1410, Sanjar One world, SV road,<br />
                        Malad west, Mumbai - 400064
                    </p>
                    <p className="mt-4 3xl:text-xl xl:text-sm md:text-xs text-gray-700 leading-snug">
                        <strong>Plant Address:</strong><br />
                        180/1/2, Sasunavghar,<br />
                        behind Shree Khodiyar kathiyawad hotel,<br />
                        Western express highway, Palghar - 401107
                    </p>
                </div>
            </div>
            <div className="text-center font-medium py-3 bg-[#005477] text-white mt-6">
                <p className="m-0 3xl:text-2xl text-sm">&copy; 2024 Naresh Enterprise. All Rights Reserved.</p>
            </div>
        </footer>

    );
}

export default Footer;
