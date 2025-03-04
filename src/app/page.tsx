// 'use client';
import Image from 'next/image'
import Header from '@/app/(Components)/Header';
import MySwiper from '@/app/(Components)/MySwiper';
import Testimonials_Slider from '@/app/(Components)/Testimonials-Slider';
import Servies from '@/app/(Components)/Services';
// import { useEffect } from 'react';
import React from 'react';
import '@/style/global.css';

//import React from "react";
import {Tabs, Tab, Card, CardBody} from "@nextui-org/react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLeaf, faStethoscope, faAmbulance, faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

// import React, { useRef, useState } from 'react';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Metadata
// import type { Metadata } from 'next'


// import required modules
import { Pagination } from 'swiper/modules';
import Link from 'next/link';
// import ReactGA from "react-ga4";

// ReactGA.initialize("G-LJWN5XSLM3");

// ReactGA.send({ hitType: "pageview", page: "/my-path", title: "Custom Title" });

// Import metadata
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spandan Maternity Home',
  keywords: 'Dr.Surbhi Vegad, Gynecologist Bhuj, Best Gynec in Bhuj Kutch',
  description: 'As a distinguished gynecologist, IVF expert, and laparoscopic surgeon',
  openGraph:{
    images:"../Images/logo-og-color.png"
  }
}
 
export default function Page(){

  
  return (
    
    <div className="full mx-auto pl-4 pr-4 lg:pl-0 lg:pr-0">
      
      {/* Swiper Section */}
      <section className='justify-center pl-0 mx-auto pt-[25%] md:pt-0 md:mt-0 md:h-auto pb-4 mb-8 md:!z-[99999]'>
        <MySwiper />
      </section>
     

      {/* About Section */}
      <div className='text-center md:pt-11  pb-4 w-full'>
        <h1 className='md:text-5xl text-4xl font-bold text-purple-900'>Dr. Surabhi Vegad</h1> 
          <p className='md:mb-6 mb-0 text-sm text-pink-500 pt-2'>Leading Gynecologist in Bhuj, Kutch</p>
            <div className='flex justify-center heading-title'>
              <span>
                <Image className='mx-auto' src="/Images/Group-98.png" alt="" width={40} height={40} loading='lazy'/>

              </span>
            </div>
      </div>
      <div className='md:flex flex-col-reverse container max-w-[1280px] mx-auto pb-8 gap-8 md:flex-row md:gap-20'>
        <div className='w-full md:w-2/5 flex justify-center md:p-0 p-2'>
          <Image
            src="/Images/surbhi vegad.jpg"
            width={700}
            height={600}
            alt="Meet the Team"
            className='rounded-2xl '
            loading='lazy'
          />
        </div>
        <div className='w-full md:w-3/5 flex justify-center items-center'>
          <div className='text-center md:text-justify'>
            <h1 className='md:text-3xl text-2xl md:mt-0 mt-8 md:text-4xl font-bold pb-4 text-purple-900'>Empowering Womens Health</h1> 
            <p className='font-medium pb-4 text-slate-500'>Dr. Surabhi Vegad stands as a premier Obstetrician and Leading Gynecologist in Bhuj, Kutch, specializing in state-of-the-art treatments for a wide range of gynaecological issues. With extensive experience spanning over 20 years, Dr. Vegad is a trailblazer in womens healthcare, consistently advancing research and patient care.</p> 
            <p className='font-medium pb-4 text-slate-500'>As a distinguished gynecologist, IVF expert, and 3D laparoscopic surgeon, Dr. Vegad offers unparalleled services at Spandan Maternity Home, a renowned fertility hospital in Bhuj, Kutch. Committed to international standards, she ensures top-tier infertility treatments combined with compassionate patient care.</p> 
            <p className='pb-4 text-slate-500 '>Beyond her core expertise in Obstetrics and Gynecology, Dr. Vegad has honed her skills in specialized areas, including <span className=' font-bold text-[#009290]'><a href='/SurabhiVegad'>High-risk pregnancy management and 3D Laparoscopic procedures.</a> </span></p>
            <a href="/SurabhiVegad" className="md:w-[20%] w-[40%] md:ml-0 ml-24 justify-center border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-sm ransition-all duration-300 mt-2 pt-2 pb-2 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
              Read More 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
          <div className='bg-purple-50 h-[280px] md:h-[320px] md:block hidden '>
            <div className='md:mb-8 md:mt mt-4 rounded flex flex-col md:flex-row justify-between items-center max-w-[1280px] mx-auto'>
              <div className='md:mr-8 md:w-1/2'>
                <h1 className='text-lg md:text-4xl font-bold text-purple-900 mt-0 mb-8 md:mb-0 md:mt-4 pt-8' dangerouslySetInnerHTML={{__html: 'Tailored care for every <br class="hidden md:block"/>stage of life'}}></h1>
              </div>
              <div className='md:mt-6'>
                <div className='mask h-[100px] md:h-[400px]'>
                  <Image src="/Images/bg3-big.png" width={550} height={550} alt="" />
                </div>
              </div>
            </div>
         </div>

      {/* <section>
        <div className='container max-w-[1280px] mx-auto mt-16 '>
          <iframe
            width="100%"
            height="720px"
            src="https://www.youtube.com/embed/T6002GWH8k4?rel=0&autoplay=1&controls=0&loop=1&modestbranding=1&showinfo=0&muted=1"
            allow="autoplay; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section> */}
        <section>
        <div className='container max-w-[1280px] mx-auto md:mt-16 mt-4'>
          <iframe
            className="w-full h-[200px] md:h-[520px] lg:h-[720px]"
            src="https://www.youtube.com/embed/T6002GWH8k4?autoplay=1&controls=0&loop=1&modestbranding=1&showinfo=0&playlist=T6002GWH8k4&mute=1"
            allow="autoplay; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>


      <div className='container max-w-[1280px] mx-auto md:p-0 p-4'>
        <div className='grid grid-rows-5 md:grid-rows-1 grid-flow-col gap-6 items-center md:pt-8 mt-12 mb-16 md:mb-20'>
          <div className='bg-purple-50 rounded flex flex-col md:p-6 p-6'>
            <Image className='pb-4' src="./SVG/pregnant-icon.svg" alt="Gynaecology" width={50} height={50}/>
            <h3 className='text-purple-900 font-semibold mb-4 text-lg'>Gynaecology</h3>
            <p className='text-purple-900 text-sm mb-4'>Gynecologists diagnose and manage various</p>
            <Link href="/Treatments/Uro"> 
              <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-sm ransition-all duration-300 mt-2 pt-1 pb-1 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
                  Know More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
              </button>
            </Link>

          </div>
           
          <div className='bg-purple-50 rounded flex flex-col  p-6 '>
            <Image className='pb-4' src="./SVG/family-planning-icon.svg" alt="Laparoscopy Surgery" width={50} height={50} />
            <h3 className='text-purple-900 font-semibold mb-4 text-lg'>Family Planning</h3>
            <p className='text-purple-900 text-sm mb-4'>Optimal reproductive and maternal health.</p>
              <Link href="/Treatments/Family-Planning"> 
                <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-sm ransition-all duration-300 mt-2 pt-1 pb-1 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
                    Know More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
              </Link>
          </div>
          <div className='bg-purple-50 rounded flex flex-col  p-6 '>
            <Image className='pb-4' src="./SVG/Maternity-baby-icon.svg" alt="Maternity" width={50} height={50} />
            <h3 className='text-purple-900 font-semibold mb-4 text-lg'>Maternity</h3>
              <p className='text-purple-900 text-sm mb-4'>Healthy pregnancies and safe deliveries.</p>
            <Link href="/Treatments/Antenatal-Care"> 
              <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-sm ransition-all duration-300 mt-2 pt-1 pb-1 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
                  Know More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
              </button>
            </Link>
          </div>
          <div className='bg-purple-50 rounded flex flex-col  p-6 '>
            <Image className='pb-4' src="./SVG/laparoscopy-icon.svg" alt="Laparoscopy Surgery" width={50} height={50} />
            <h3 className='text-purple-900 font-semibold mb-4 text-lg'>3D Laparoscopy Surgery</h3>
            <p className='text-purple-900 text-sm mb-4'>Minimally invasive abdominal procedure.</p>
            <Link href="/Treatments/Laparoscopic"> 
              <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-sm ransition-all duration-300 mt-2 pt-1 pb-1 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
                  Know More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
              </button>
            </Link>
          </div>
          <div className='bg-purple-50 rounded flex flex-col p-6'>
            <Image className='pb-4' src="./SVG/infertility-icon.svg" alt="Women Infertility" width={50} height={50} />
            <h3 className='text-purple-900 font-semibold mb-4 text-lg'>Women Infertility</h3>
            <p className='text-purple-900 text-sm mb-4'>  Journey of hope and perseverance.</p>
            <Link href="/Treatments/Preconception-Counselling"> 
              <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-sm ransition-all duration-300 mt-2 pt-1 pb-1 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
                  Know More <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
              </button>
            </Link>
          </div>
          
        </div>
      </div> 
      {/* Parallex Section */}
      <section className="bg-[url('/Images/parallax-lab-image.jpg')] bg-fixed bg-cover bg-center h-[970px] mb-16 sm:h-[520px] mt-0 sm:mt-0">
        <div className="container max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center">
          <div className="w-full sm:w-1/2 flex flex-col items-center mb-[-20px]">
            <div><Image src="/Images/parant.png" width={500} height={100} alt="" className='mt-[-58px]' /></div>
          </div>
          <div className="w-full sm:w-1/2">
          <div>
      <div className="md:mt-4 mt-8 md:ml-0 ml-2 hidden md:block">
        <Image
          src="/Images/Frame 1746.png"
          layout="intrinsic"
          objectFit="cover"
          width={193}
          height={122}
          alt=""
        />
      </div>
      <div className="md:mt-4 mt-8 md:ml-0 ml-2 block md:hidden">
        <Image
          src="/Images/Frame 1746.png"
          layout="intrinsic"
          objectFit="cover"
          width={113}
          height={122}
          alt=""
        />
      </div>
    </div>
            <h3 className='text-[#27115f] font-bold text-2xl mb-8 mt-8 sd:mt-0 text-center sm:text-left'>
                Introducing Bavishi Fertility Institute (BFI) - Premier IVF & Gynecology Care in Bhuj, Kutch
            </h3>
            <div className='space-y-8'>
            <div className='text-slate-500 sm:mt-0 text-left leading-snug md:p-0 md:text-left p-2 md:p-0 '>

                <p>Located in Bhuj, Kutch, Spandan Maternity Home in collaboration with most reputed Bavishi fertility Institute & <a href="/Ivfcenter" className="font-bold text-[#27115f] underline-offset-1"> <u>IVF Centre</u> </a>
                stands as a beacon of comprehensive womens healthcare. Under the esteemed leadership of Dr. Surbhi Vegad, a top-rated gynaecologist in Bhuj Kutch, our centre offers a diverse range of services, from routine deliveries to complex gynaecological surgeries.</p>
              </div>
              <div className='text-slate-500 mt-16 sd:mt-0  p-2 md:p-0'>
                <p>Specializing in advanced infertility solutions, our <a href="/Ivfcenter" className="font-bold text-[#27115f] underline-offset-1"> <u>IVF Centre</u> </a> in Bhuj excels in treatments like IVF, ICSI, and Donor Oocyte programs. Notably, male infertility treatments such as TESE, TESA, PESA, and Micro TESE are also routinely administered, showcasing our expertise in holistic reproductive care.</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <div className='container max-w-[1280px] gap-7 flex flex-col md:flex-row mx-auto pb-8 mt-24 md:mt-24 items-center'>
        {/* first section */}
       <div className='w-full md:w-2/5 '>
          <div className='text-left'>
            <h1 className='text-4xl md:w-96 w-full pb-6 font-bold text-purple-900 '>See what our patients are saying</h1> 
            <p className='font-medium text-purple-800'>Tailored care for every stage of life with</p> 
            <p className='font-medium pb-6 text-purple-800'> <span className='font-bold '>4.9 rating</span> based on 500+ reviews</p> 
              <a href="https://www.google.com/search?q=spandan+maternity+home&oq=spanda&gs_lcrp=EgZjaHJvbWUqDggBEEUYJxg7GIAEGIoFMgYIABBFGDkyDggBEEUYJxg7GIAEGIoFMgwIAhAjGCcYgAQYigUyDQgDEAAYgwEYsQMYgAQyCggEEAAYsQMYgAQyBggFEEUYPDIGCAYQRRg8MgYIBxBFGD3SAQgyMzgzajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#ip=1&lrd=0x39511e6c1d3e138b:0xf221a21dee952a86,1" target="_blank" className=" w-[50%] md:w-[40%] justify-center border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition-all duration-300 mt-4 pt-2 pb-2 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
              More Testimonials 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 md:w-0 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
              </a>
            <div className='flex justify-end'>
            <Image className='pb-2 hidden md:block' src="/Images/hand-drawn-arrow2.png" alt="Gynaecology" width={200} height={64} />
              <Image className='pb-2 block md:hidden' src="/Images/hand-drawn-arrow1.png" alt="Gynaecology" width={200} height={64} />
            </div>
          </div>
        </div>
        {/* second section */}
        <div className='w-full md:w-3/5'>
          <Testimonials_Slider />
        </div>
      </div>
      <section className='bg-purple-50 md:pt-14 pt-12 md:mt-14 mt-8 md:mb-0 mb-16 md:pb-0 pb-12 md:h-[780px]'>
        <div className="max-w-[1280px] mx-auto">
        <div className="flex justify-between items-center md:flex-row flex-col md:justify-between md:items-center">
          <div className="text-left md:ml-4 md:mt-0 mt-2">
            <h1 className="text-4xl font-bold text-purple-900 text-center md:text-left">Cashless Facility</h1>
            <p className="text-xs pt-4 pb-14 text-purple-800 text-center md:text-left">List of empaneled Insurance Company.</p>
          </div>
          <div className="text-right md:mr-4 md:mt-[-10px] mt-2 mb-4 flex justify-center md:justify-end w-full md:w-auto">
            <a href="/Insurance" className="w-[50%] md:w-auto md:ml-0 md:mr-0 mr-0 ml-0 md:mt-0 mt-[-40px] border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white md:text-sm text-sm transition-all duration-300 pt-2 pb-2 rounded-3xl md:pl-4 md:pr-4 shadow-lg flex items-center justify-center">
              View All
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-0 md:gap-4 md:mb-4">
            <div className="box-border rounded-2xl h-auto md:w-full/5 w-full/2 p-4 flex flex-col justify-center items-center  relative">
              <div>
                <Image src="/Images/insurance1.png" width={300} height={300} alt="cigna" />
              </div>
            </div>
            <div className="box-border rounded-2xl h-auto md:w-full/5 w-full/2 p-4 flex flex-col justify-center items-center relative">
              <div>
                <Image src="/Images/insurance2.png" width={300} height={300} alt="cigna" />
              </div>
            </div>
            <div className="box-border rounded-2xl h-auto md:w-full/5 w-full/2 p-4 flex flex-col justify-center items-center relative">
              <div>
                <Image src="/Images/insurance3.png" width={300} height={300} alt="cigna" />
              </div>
            </div>
            <div className="box-border rounded-2xl h-auto w-full/5 p-4 flex flex-col justify-center items-center relative">
              <div>
                <Image src="/Images/insurance4.png" width={300} height={300} alt="cigna" />
              </div>
            </div>
            <div className="box-border rounded-2xl h-auto w-full/5 p-4 flex flex-col justify-center items-center relative">
              <div>
                <Image src="/Images/insurance5.png" width={300} height={300} alt="cigna" />
              </div>
            </div>
            <div className="box-border rounded-2xl h-auto w-full/5 p-4 flex flex-col justify-center items-center relative">
              <div>
                <Image src="/Images/Care Health Insurance.jpg" width={300} height={300} alt="cigna" />
              </div>
            </div>
            <div className="box-border rounded-2xl h-auto w-full/5 p-4 flex flex-col justify-center items-center relative">
              <div>
                <Image src="/Images/universal sampoo.jpg" width={300} height={300} alt="cigna" />
              </div>
            </div>
            {/* <div className="box-border rounded-2xl h-auto w-full/5 p-4 flex flex-col justify-center items-center relative">
              <div>
                <Image src="/Images/megma.jpg" width={300} height={300} alt="cigna" />
              </div>
            </div> */}
            <div className="box-border rounded-2xl h-auto w-full/5 p-4 flex flex-col justify-center items-center relative">
              <div>
                <Image src="/Images/Reliance General.jpg" width={300} height={300} alt="cigna" />
              </div>
            </div>
            <div className="box-border rounded-2xl h-auto w-full/5 p-4 flex flex-col justify-center items-center relative">
              <div>
                <Image src="/Images/medi asist.jpg" width={300} height={300} alt="cigna" />
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  )
}
