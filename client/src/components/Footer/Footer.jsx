import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaPaperPlane, FaAngleRight } from 'react-icons/fa';
import { BsScissors } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-[#191919] text-white-50 pt-20 pb-10" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-14">

                    {/* Left Column */}
                    <div className="lg:w-1/2 lg:px-18 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <Link to="/" className="inline-block mb-6">
                            <h1 className="text-4xl text-[#c79a5b] font-serif font-bold flex justify-center lg:justify-start items-center gap-2">
                                <BsScissors /> SK Salon
                            </h1>
                        </Link>
                        <p className="mb-6 leading-relaxed">
                            Aliquyam sed elitr elitr erat sed diam ipsum eirmod eos lorem nonumy. Tempor sea ipsum diam sed clita dolore eos dolores magna erat dolore sed stet justo et dolor.
                        </p>
                        <p className="mb-3 flex items-center justify-center lg:justify-start gap-3 w-full"><FaMapMarkerAlt className="text-white" /> 123 Street, New York, USA</p>
                        <p className="mb-3 flex items-center justify-center lg:justify-start gap-3 w-full"><FaPhoneAlt className="text-white" /> +012 345 67890</p>
                        <p className="mb-6 flex items-center justify-center lg:justify-start gap-3 w-full"><FaEnvelope className="text-white" /> info@example.com</p>

                        <div className="flex justify-center lg:justify-start gap-4">
                            <div className="footer-icon-wrapper">
                                <a href="https://twitter.com/" className="footer-social-icon">
                                    <FaTwitter />
                                </a>
                            </div>
                            <div className="footer-icon-wrapper">
                                <a href="https://www.facebook.com/" className="footer-social-icon">
                                    <FaFacebookF />
                                </a>
                            </div>
                            <div className="footer-icon-wrapper">
                                <a href="https://www.linkedin.com/" className="footer-social-icon">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                            <div className="footer-icon-wrapper">
                                <a href="https://www.instagram.com/" className="footer-social-icon">
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Vertical Divider (Desktop) */}
                    <div className="hidden lg:block w-px bg-gray-700"></div>

                    {/* Right Column */}
                    <div className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex flex-col items-center lg:items-start">
                                <h5 className="text-[#c79a5b] text-xl font-bold mb-6 font-serif">Quick Links</h5>
                                <div className="flex flex-col gap-3 items-center lg:items-start">
                                    {['About Us', 'Contact Us', 'Our Services', 'Terms & Condition'].map((item) => (
                                        <Link key={item} to="" className="hover:text-[#c79a5b] transition-colors flex items-center justify-center lg:justify-start gap-2">
                                            <FaAngleRight /> {item}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <h5 className="text-[#c79a5b] text-xl font-bold mb-6 font-serif">Popular Links</h5>
                                <div className="flex flex-col gap-3 items-center lg:items-start">
                                    {['About Us', 'Contact Us', 'Our Services', 'Terms & Condition'].map((item) => (
                                        <Link key={item} to="" className="hover:text-[#c79a5b] transition-colors flex items-center justify-center lg:justify-start gap-2">
                                            <FaAngleRight /> {item}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col items-center lg:items-start">
                            <h5 className="text-[#c79a5b] text-xl font-bold mb-6 font-serif">Newsletter</h5>
                            <div className="relative w-full max-w-md mx-auto lg:mx-0">
                                <input
                                    type="text"
                                    placeholder="Enter Your Email"
                                    className="w-full h-14 bg-[#514949] border border-gray-600 px-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#c79a5b]"
                                />
                                <button className="absolute top-2 right-2 h-10 w-10 text-[#c79a5b] flex items-center justify-center hover:text-white transition-colors">
                                    <FaPaperPlane className="text-xl" />
                                </button>
                            </div>
                            <p className="mt-3 text-sm">Diam sed sed dolor stet amet eirmod</p>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-16 pt-8 border-t border-gray-800 flex justify-center items-center text-sm text-center">
                    <p>
                        &copy;
                        <a href="#" className="border-b border-white text-[#c79a5b] hover:text-white">
                            SK Salon
                        </a>, All Right Reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
