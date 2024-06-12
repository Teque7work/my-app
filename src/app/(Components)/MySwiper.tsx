'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@nextui-org/react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css/navigation";
// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import '@/style/swiper.css';

const MySwiper: React.FC = () => {
    return(

      <Swiper
      pagination={{
        dynamicBullets: true,
        clickable: true,
        bulletClass: 'my-pagination-bullet',
        bulletActiveClass: 'my-pagination-bullet-active',
      }}
      autoplay={{
        delay: 6000,
        disableOnInteraction: false, 
      }}
      loop={true}
      modules={[Autoplay, Navigation, Pagination]}
      navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
      className="mySwiper h-[250px] md:!h-screen !z-[1]"
    >

      <SwiperSlide className="flex md:w-full w-full justify-center items-center bg-[url('/Images/banner2.jpg')] md:bg-top bg-right bg-cover bg-no-repeat mt-8">
        <div className='md:max-w-[1280px] mx-auto w-full h-full h-[50%] px-4 flex flex-row items-center'>
          <div className='w-full md:w-1/2 animate-fade-in'>
                  <h1 className='md:w-[600px] w-full md:text-6xl text-lg font-bold pb-4 text-pink-600 md:pt-44 md:block hidden'>
                    <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', lineHeight: '1.5' }}>Making1</span> <br />
                    <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', lineHeight: '1.5' }}>Womanhood</span><br />
                    <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', lineHeight: '1.5' }}>Wonderful.....</span>
                  </h1>
                    {/* <p className='font-medium text-pink-500'>Promoting good health together.</p>  */}
                    {/* <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white ransition-all duration-300 mt-3 pt-2 pb-2 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
                      Button <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>

                    </button> */}
                    <div className="navigation-buttons p-20 md:block hidden">
                          <div className="swiper-button-prev">
                              <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M25 5L5 25L25 45" stroke="#581C87" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                          </div>
                          <div className="swiper-button-next">
                            <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 45L45 25L25 5" stroke="#581C87" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                    </div>
                  <div className='flex items-center gap-4 absolute'>
                      <div className='md:block hidden'>
                        <Image src="/Images/Safety.png" width={110} height={110} alt="Safety" />
                      </div>
                    
                      <div className='md:w-96 w-full text-slate-600 md:block hidden'>
                        <p>National Accreditation Board for  <br></br> Hospitals& Healthcare Providers (NABH)</p>
                      </div>
                  </div>

                </div>
                {/* <div className='w-1/2'></div> */}
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex w-full justify-center items-center bg-[url('/Images/Main-Banner-Website-Banner.jpg')] md:bg-top bg-center bg-cover bg-no-repeat"> 
            <div className='max-w-[1280px] mx-auto w-full h-full px-4 flex flex-row items-center'>
            <div className='w-full md:w-1/2 animate-fade-in'>
            <h1 className='md:w-[600px] w-full md:text-6xl text-2xl font-bold pb-4 text-slate-600 md:pt-44 md:block hidden'>
              <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', lineHeight: '1.5' }}>We are committed </span><br />
              <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', lineHeight: '1.5' }}> to  your health</span> <br />
              <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', lineHeight: '1.5' }}>and well-being</span>
            </h1>
            <h1 className='md:w-[600px] w-full md:text-6xl text-xl font-bold pb-4 text-pink-600 md:pt-44 md:hidden block'>
                    <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)', lineHeight: '1.5' }}>Making</span> <br />
                    <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)', lineHeight: '1.5' }}>Womanhood</span><br />
                    <span style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)', lineHeight: '1.5' }}>Wonderful.....</span>
                  </h1>

 
                  {/* <p className='font-medium w-96 text-pink-500'>We are dedicated to providing comprehensive healthcare services tailored specifically to address the unique needs of women.</p>  */}
                  <div className="navigation-buttons p-20 md:block hidden">
                          <div className="swiper-button-prev">
                              <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M25 5L5 25L25 45" stroke="#581C87" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                          </div>
                          <div className="swiper-button-next">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 45L45 25L25 5" stroke="#581C87" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                    </div>
                </div>
                <div className='w-1/2'></div>
            </div>
          </SwiperSlide>
              
        
      </Swiper>

    )
}

export default MySwiper;