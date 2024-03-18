import React from 'react'
import logo from "../../assets/logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSkype } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import footer1 from "../../assets/footer1.jpeg"
import footer2 from "../../assets/footer2.png"
import footer3 from "../../assets/footer3.png"
import flag from "../../assets/indiaFlag.png"
import "./Footer.css"

const Footer = () => {
    return (
        <div className='text-white footer-container rounded p-10'>
            <div className='flex flex-wrap justify-between items-end'>
                <div>
                    <h1 className='text-4xl font-bold font-sans'>Let create something beautiful <br /> <span className='text-green-600'>Innovative together! call now!</span> </h1> <br />

                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br /> Ipsum has been the industry standard dummy text ever since.
                    </p>
                </div>
                <br />
                <div>
                    <button className='px-6 py-3 bg-green-600 rounded mr-4'>start a project</button>

                </div>

            </div>
            <br /><br />

            <div className='container-footer flex justify-between flex-wrap'>
                <div>
                    <div>
                        <h1>
                            <img src={logo} alt="" className='h-14' />
                        </h1>
                        <p>
                            Lorem Ipsum is simply  text of the <br /> printing and typesetting industry. <br />Ipsum has been the industry <br /> standard dummy.
                        </p>
                    </div>

                    <div >
                        <button><FaFacebook className='inline m-2 text-xl' /></button>
                        <button><FaTwitter className='inline m-2 text-xl' /></button>
                        <button><FaYoutube className='inline m-2 text-xl' /></button>
                        <button><FaLinkedin className='inline m-2 text-xl' /></button>
                        <button><FaSkype className='inline m-2 text-xl' /></button>
                        <button><FaWhatsappSquare className='inline m-2 text-xl' /></button>
                    </div>

                    <br /><br />
                    <div className='footer-img-container'>
                        <div className='p-4 ml-14 mt-5'>
                            <img src={footer1} alt="" className='h-14 rounded-full' />
                        </div>
                        <div className='p-4'>
                            <img src={footer2} alt="" className='h-14 inline rounded-full' /> {"\n"}
                            <img src={footer3} alt="" className='h-14 inline rounded-full' />
                        </div>

                    </div>
                    <br />
                    <br />
                    <div>
                        <p>© 2024 Cybrical All rights reserved.</p>
                    </div>

                </div>

                <div>
                    <h1 className="text-xl font-semibold">Services</h1>
                    <hr className='bg-green-600 w-24'/>
                    <br/>
                    <ul>
                        <li className='list-disc'>Web Application Development</li>
                        <li className='list-disc'>Mobile Application Development</li>
                        <li className='list-disc'>Digital Marketing Solution</li>
                        <li className='list-disc'>Technology Audit & Consultancy</li>
                        <li className='list-disc'>Website Support & Maintenance</li>
                        <li className='list-disc'>Quality Assurance As a Service</li>
                        <li className='list-disc'>Agile Development teams</li>
                        <li className='list-disc'>Cloud Adoption & Engineering</li>
                        <li className='list-disc'>Resilient Software Architecture</li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <h1 className="text-xl font-semibold">Office Address</h1><br/>
                    <h2>
                        <img src={flag} alt="" className='inline h-6 rounded'/> <span>{"\n"}India Office</span><br/>
                        <p>G-31, First Floor , Sector -3 , Noida (201301)</p>
                    </h2>
                </div>

                <div>
                    <h1 className="text-xl font-semibold">Technologies</h1>
                    <hr/>
                    <br/>
                    <ul>
                        <li className='list-disc'>Laravel</li>
                        <li className='list-disc'>Vue.js</li>
                        <li className='list-disc'>Node.js</li>
                        <li className='list-disc'>Woocommerce</li>
                        <li className='list-disc'>Angular JS</li>
                        <li className='list-disc'>Magento</li>
                        <li className='list-disc'>React</li>
                        <li className='list-disc'>Cloud & DevOps</li>
                        <li className='list-disc'>WordPress</li>
                    </ul>
                    <br/><br/><br/><br/><br/>
                    <div>
                        <h2>
                            <img src={flag} alt="" className='inline h-6 rounded' /> <span>Phone</span>
                            <p>+91 6203528288</p>
                        </h2>
                    </div>
                </div>

                <div>
                    <h2>Compnay</h2>
                    <hr/>
                    <br/>
                    <ul>
                        <li className='list-disc'>Services</li>
                        <li className='list-disc'>Careers</li>
                        <li className='list-disc'>Blog</li>
                        <li className='list-disc'>About Us</li>
                        <li className='list-disc'>Faq</li>
                        <li className='list-disc'>Our Team</li>
                        <li className='list-disc'>Rss feed</li>
                        <li className='list-disc'>Our Work</li>
                        <li className='list-disc'>Contact Us</li>
                        <li className='list-disc'>Hire Developer</li>
                    </ul>
                </div>

                <div>
                    <h2>Compnay</h2>
                    <hr/>
                    <br/>
                    <ul>
                        <li className='list-disc'>Services</li>
                        <li className='list-disc'>Careers</li>
                        <li className='list-disc'>Blog</li>
                        <li className='list-disc'>About Us</li>
                        <li className='list-disc'>Faq</li>
                        <li className='list-disc'>Our Team</li>
                        <li className='list-disc'>Rss feed</li>
                        <li className='list-disc'>Our Work</li>
                        <li className='list-disc'>Contact Us</li>
                        <li className='list-disc'>Hire Developer</li>
                    </ul>
                </div>

            </div>



        </div>
    )
}

export default Footer
