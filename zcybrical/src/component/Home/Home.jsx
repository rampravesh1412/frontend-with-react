import React from 'react'
import "./Home.css"
import logo from "../../assets/logo.png"
import { Sparkle } from 'lucide-react';
import headerImg from "../../assets/headerBoy.png"
import { FaCode } from "react-icons/fa6";
import { MdOutlineSendToMobile } from "react-icons/md";
import { FaGreaterThanEqual } from "react-icons/fa";
import { IoLogoDribbble } from "react-icons/io";
import { FcSupport } from "react-icons/fc";
import { TbDeviceMobileCode } from "react-icons/tb";
import { TbSpeakerphone } from "react-icons/tb";
import { GrUserSettings } from "react-icons/gr";
import { IoChatbubbles } from "react-icons/io5";
import { FcIdea } from "react-icons/fc";
import { TiLightbulb } from "react-icons/ti";
import { FaUsersGear } from "react-icons/fa6";
import { FaSearchDollar } from "react-icons/fa";
import CarouselSlider from "../CarouselSlider/CarouselSlider"
import { SiAmazonecs } from "react-icons/si";
import { AiFillAmazonCircle } from "react-icons/ai";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import aboutUs from "../../assets/Aboutus-img.png"
import { MdBusinessCenter } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { BsPersonFillX } from "react-icons/bs";
import { RiTeamLine } from "react-icons/ri";


const Home = () => {
  return (
    <>
      <div className='flex justify-around items-center font-serif home-container'>
        <div className='top-header'>
          <p className='text-6xl font-semibold'>Creating </p><br />
          <p className='text-6xl font-semibold'> Top-Quality </p> <br />
          <p className='text-6xl font-semibold'> Digital <span className='text-green-700'>Solutions</span> </p> <br />
          <button className='btn-start-project rounded'>Start a project</button>


        </div>


        <div className='header-img-container'>
          <div className='second-box'>
            <p className='font-bold'>Upload Your CV</p>
            <p>It only takes a few seconds</p>
          </div>

          <div className='third-box'>
            <p className='font-bold'>11k+ Candicates</p>
          </div>

          <div className='first-box'>
            <p className='font-bold'>IT Specialist</p>
            <p>Find Work Order</p>
          </div>

          <div className='header-img'>
            <img src={headerImg} alt="" />
          </div>

          <div className='four-box'>
            <p className='font-bold'>Client</p>
            <p>Post ar Job</p>
          </div>
          <div className='five-box'>
            <img src={logo} alt="" />
          </div>

        </div>

      </div>

      {/* container  */}

      <div className='dev-skills'>
        <ul className='flex justify-evenly devloper-skills'>
          <li className='font-bold text-xl'> <span><Sparkle className="inline text-green-600" /> </span>Design</li>
          <li className='font-bold text-xl'> <span><Sparkle className="inline text-green-600" /> </span>Devlop</li>
          <li className='font-bold text-xl'> <span><Sparkle className="inline text-green-600" /> </span>Design</li>
          <li className='font-bold text-xl'> <span><Sparkle className="inline text-green-600" /> </span>Discover</li>
          <li className='font-bold text-xl'> <span><Sparkle className="inline text-green-600" /> </span>Design</li>
          <li className='font-bold text-xl'> <span><Sparkle className="inline text-green-600" /> </span>devloper</li>
          <li className='font-bold text-xl'> <span><Sparkle className="inline text-green-600" /> </span>Design</li>
        </ul>
      </div>

      {/* our service container */}
      <div className='our-service'>
        <div className=" flex justify-around flex-wrap">
          <div>
            <p className='text-green-600 font-bold text-xl' >Our Service</p>
            <h1 className='text-3xl font-serif font-bold'>Perfect Blend of Instuitive</h1>
            <h1 className='text-3xl font-serif font-bold'>Design <span className='text-green-600'>And Latest Technologu</span></h1>
          </div>
          <div>
            <p>Lorem Ipsum is simply dummy text of the printing</p><br />
            <button className='bg-green-600 rounded px-6 py-3 text-white font-bold'>Browser All Service</button>
          </div>
        </div>
        <br /><br /><br /><br />
        <div className='component-container flex justify-evenly flex-wrap'>
          <div className=''>
            <div className='webdevelopment'>
              <FaCode className='text-5xl' />
              <h2 className='font-bold text-xl'>Web Development</h2>
              <p>Our team of highly trained <br /> professionals will help take your <br /> business to the web and help it reach <br /> online audiences effectively work with <br /> us to get all the insights and expertise.</p>
              <button className='font-mono'>Read More.. <span><FaGreaterThanEqual className='inline text-green-600' /></span></button>
            </div>
            <br /><br />
            <div className='mobiledevelopment'>
              <MdOutlineSendToMobile className='text-5xl' />
              <h2 className='font-bold text-xl'>Mobile app development</h2>
              <p>Our mobile app development is done <br /> with creativity and precision, so your <br /> business can seamlessly transition <br /> from website to app Build your brand <br /> engagement.</p>
              <button className='font-mono'>Read More.. <span><FaGreaterThanEqual className='inline text-green-600' /></span></button>
            </div>
          </div>
          <div className=''>
            <div className='webdevelopment'>
              <IoLogoDribbble className='text-5xl' />
              <h2 className='font-bold text-xl'>Interface Design</h2>
              <p>Our team of highly trained <br /> professionals will help take your <br /> business to the web and help it reach <br /> online audiences effectively work with <br /> us to get all the insights and expertise.</p>
              <button className='font-mono'>Read More.. <span><FaGreaterThanEqual className='inline text-green-600' /></span></button>
            </div>
            <br /><br />
            <div className='mobiledevelopment'>
              <FcSupport className='text-5xl' />
              <h2 className='font-bold text-xl'>Mobile app development</h2>
              <p>Our mobile app development is done <br /> with creativity and precision, so your <br /> business can seamlessly transition <br /> from website to app Build your brand <br /> engagement.</p>
              <button className='font-mono'>Read More.. <span><FaGreaterThanEqual className='inline text-green-600' /></span></button>
            </div>
          </div>
          <div className=''>
            <div className='webdevelopment'>
              <TbDeviceMobileCode className='text-5xl' />
              <h2 className='font-bold text-xl'>Application Development</h2>
              <p>Our team of highly trained <br /> professionals will help take your <br /> business to the web and help it reach <br /> online audiences effectively work with <br /> us to get all the insights and expertise.</p>
              <button className='font-mono'>Read More.. <span><FaGreaterThanEqual className='inline text-green-600' /></span></button>
            </div>
            <br /><br />
            <div className='mobiledevelopment'>
              <TbSpeakerphone className='text-5xl' />
              <h2 className='font-bold text-xl'>Digital Marketing</h2>
              <p>Our mobile app development is done <br /> with creativity and precision, so your <br /> business can seamlessly transition <br /> from website to app Build your brand <br /> engagement.</p>
              <button className='font-mono'>Read More.. <span><FaGreaterThanEqual className='inline text-green-600' /></span></button>
            </div>
          </div>
        </div>
      </div>

      {/* Web and Mobile App development */}

      <div className='container-web-mobile-app text-white pt-10'>
        <div className='flex justify-around flex-wrap'>
          <div>
            <p className=' font-bold text-green-700'>Web and mobile app development</p>
            <h1 className='text-2xl font-bold font-sans'>Customer Loyality and Satisfication <br /> With Our <span className='text-green-600'>
              Best-in-Class Services.</span></h1>
          </div>
          <div><p>
            Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the <br /> industry standard dummy text ever since the 1500s, <br /> when an unknown printer took a galley.
          </p></div>
        </div>

        {/* card  section */} <br /><br /><br />

        <div className='flex justify-evenly flex-wrap card-section'>
          <div>
            <div className='bg-green-600 rounded p-6'>
              <br />
              <GrUserSettings className='text-4xl' /> <br />
              <h2 className='text-xl font-bold'>Commited to quality</h2>
              <p>
                We are at the forefront of website <br /> development and provide high-quality web <br /> and mobile app-based solutions for clients.<br /> Delivering a high-quality service is the <br /> cornerstone of our policy. We at Avyatech <br /> listen to clients and find the best website development <br /> solutions that achieve their <br /> business goals.
              </p>
            </div>

            <div className='p-6'>
              <br />
              <IoChatbubbles className='text-4xl' /> <br />
              <h2 className='text-xl font-bold'>Guaranted quick response</h2>
              <p>
                Our clients operate 24/7 in industries that <br /> require quick solutions to service <br /> disruptions. We are focused on providing <br /> timely service to customers. Avyatech <br /> offers quick and responsive support <br /> through top technical professionals
              </p>
            </div>
          </div>


          <div>
            <div className='p-6'>
              <br />
              <FcIdea className='text-4xl' /> <br />
              <h2 className='text-xl font-bold'>Solve Your Business Problem</h2>
              <p>
                We are at the forefront of website <br /> development and provide high-quality web <br /> and mobile app-based solutions for clients.<br /> Delivering a high-quality service is the <br /> cornerstone of our policy. We at Avyatech <br /> listen to clients and find the best website development <br /> solutions that achieve their <br /> business goals.
              </p>
            </div>

            <div className='p-6'>
              <br />
              <TiLightbulb className='text-4xl' /> <br />
              <h2 className='text-xl font-bold'>A Wide Spectum of skills & expertise</h2>
              <p>
                Our clients operate 24/7 in industries that <br /> require quick solutions to service <br /> disruptions. We are focused on providing <br /> timely service to customers. Avyatech <br /> offers quick and responsive support <br /> through top technical professionals
              </p>
            </div>
          </div>




          <div>
            <div className='p-6'>
              <br />
              <FaUsersGear className='text-4xl' /> <br />
              <h2 className='text-xl font-bold'>Dedicated Teams</h2>
              <p>
                We are at the forefront of website <br /> development and provide high-quality web <br /> and mobile app-based solutions for clients.<br /> Delivering a high-quality service is the <br /> cornerstone of our policy. We at Avyatech <br /> listen to clients and find the best website development <br /> solutions that achieve their <br /> business goals.
              </p>
            </div>

            <div className='p-6'>
              <br />
              <FaSearchDollar className='text-4xl' /> <br />
              <h2 className='text-xl font-bold'>Compitive Pricing </h2>
              <p>
                Our clients operate 24/7 in industries that <br /> require quick solutions to service <br /> disruptions. We are focused on providing <br /> timely service to customers. Avyatech <br /> offers quick and responsive support <br /> through top technical professionals
              </p>
            </div>
          </div>

        </div>

      </div>
      <div className='bg-green-600 p-1.5 rotate-green'></div>
      {/* our portfolio */}

      <div className='p-6'>
        <h1 className='text-center text-2xl text-green-600 font-bold font-sans'>OUR PORTFOLIO</h1>
        <h1 className='text-center text-3xl  font-bold font-sans'>The Best Projects That We</h1>
        <h1 className='text-center text-3xl text-green-600 font-bold font-sans'>Have Delivered</h1>
        <p className='text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum <br /> has been the industry standard dummy.</p>

      </div>

      <div  className='overflow-hidden'>
        <CarouselSlider />
      </div>

      {/* Customer loyality statisfication */}

      <div>
         <div className="flex justify-between flex-wrap">
          <div>
            <p className='text-green-600'>WEB AND MOBILE APP DEVELOPMENT</p>
            <h1 className='text-3xl font-bold font-sans'>Customer Loyality and Stasfication <br /> With Our <span className='text-green-600'>Best-in-Class Services.</span></h1>
          </div>
          <div>
            <p>Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the <br /> industry standard dummy text ever since the 1500s, <br /> when an unknown printer took a galley.</p>
          </div>

        </div> 
        <br /><br />

         <div>
          <ul className='flex justify-evenly font-bold flex-wrap'>
            <li className='active  '>
              <button className="px-6 py-4 bg-green-600">DATABASE</button>
            </li>
            <li>
              <button className="px-6 py-4">MOBILE</button>
            </li>
            <li>
              <button className="px-6 py-4">FRONTEND</button>
            </li>
            <li>
              <button className="px-6 py-4">
                SERVER
              </button>
            </li>
            <li>
              <button className="px-6 py-4">
                DEVOPS
              </button>
            </li>
            <li>
              <button className="px-6 py-4">
                BACKEND
              </button>
            </li>
            <li>
              <button className="px-6 py-4">
                CMS
              </button>
            </li>
          </ul>
          <br/>
        </div> 

        {/* container of aws , amazon  mongodb and my sql */}
         <div className='container-aws-amazon rounded-md'>
          <ul className='flex h-56 justify-around items-center flex-wrap' >
            <li>
              <SiAmazonecs className='text-4xl bg-blue-900 rounded-full text-center ml-7' />
              <br />
              <h2 className='text-base font-sans font-bold text-white'>Amazon Aurora </h2>
            </li>
            <li>
              <AiFillAmazonCircle className='text-4xl bg-yellow-600 rounded-full text-center ml-4' />
              <br />
              <h2 className='text-base font-sans font-bold text-white'>AWS RDS</h2>
            </li>

            <li>
              <SiMongodb className='text-4xl bg-green-600 rounded-full text-center ml-4' />
              <br />
              <h2 className='text-base font-sans font-bold text-white'>Mongodb</h2>
            </li>

            <li>
              <SiMysql className='text-4xl bg-orange-600 rounded-full text-center ml-1' />
              <br />
              <h2 className='text-base font-sans font-bold text-white'>MySQL</h2>

            </li>

          </ul>

        </div> 
        <br/><br/>
      </div>

      {/* About us */}

      <div className='about-container flex justify-around items-center flex-wrap'>
        <div>
          <h3 className='text-green-600 text-sm font-medium'>ABOUT US</h3> <br/>
          <h1 className='text-3xl font-sans font-bold'>Customer Loyalty and <br/> Stasfication With Our <span className='text-green-600'>
            Best- <br/>in-Class Services</span></h1>
            <br/>
            <p className='text-sm'>Lorem Ipsum is simply dummy text of the printing and typesetting <br/> industry. Lorem Ipsum has been the industry standard dummy text ever <br/> since the 1500s, when an unknown printer.</p>
            <br/>
            <button className='bg-green-600 text-white px-6 py-3 rounded-md font-medium' >start a project</button>
            <br/><br/>

        </div>

        <div className=''>
          <img src={aboutUs} alt="" className='rounded-lg'/>
        </div>

      </div> <br/><br/>

      {/* container of trusted  clients and partners */}

      <div className='container-trusted-clients  py-10 rounded-sm'>
        <ul className='flex justify-evenly flex-wrap text-white'>
          <li>
            <MdBusinessCenter className='inline text-4xl'/>  
            <span className='text-2xl font-bold'> {"\t"}10+</span>
            <p className='container-trusted-paragraph'>Years in Business</p>
            
          </li>
          <li>
            <GoProjectSymlink className='inline text-4xl'/>
            <span className='text-2xl font-bold'>{"\t"}200+</span>
            <p className='container-trusted-paragraph'>Projects Delivered</p>
          </li>
          <li>
            <BsPersonFillX className='inline text-4xl' />  
            <span className='text-2xl font-bold'>{"\t"}200+</span>
            <p className='container-trusted-paragraph'>Happy Clients</p>
          </li>
          <li>
            <RiTeamLine className='inline text-4xl'/>
            <span className='text-2xl font-bold'>{"\t"}500+</span>
            <p className='container-trusted-paragraph'>Team of Expert</p>
          </li>
        </ul>
      </div>




    </>
  )
}

export default Home
