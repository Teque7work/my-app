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
      className="mySwiper !h-screen !z-[1]"
    >

      <SwiperSlide className="flex w-full justify-center items-center bg-[url('/Images/banner2.jpg')] bg-cover bg-no-repeat md:bg-auto">
        <div className='max-w-[1280px] mx-auto w-full h-full px-4 flex flex-row items-center'>
          <div className='w-full md:w-1/2 animate-fade-in'>

                  <div className=''>

                    <h1 className='w-100 text-6xl font-bold text-pink-500 pt-40 '>Making <br></br>Womanhood<br></br> Wonderful.....</h1> 
                    {/* <p className='font-medium text-pink-500'>Promoting good health together.</p>  */}
                    {/* <button className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white ransition-all duration-300 mt-3 pt-2 pb-2 rounded-3xl pl-4 pr-4 shadow-lg flex items-center">
                      Button <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>

                    </button> */}
                    <div className="navigation-buttons p-20">
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
                  </div>
                  
                  <div className='flex items-center gap-4 absolute mt-28'>
                      <div>
                        <Image src="/Images/Safety.png" width={110} height={110} alt="Safety" />
                      </div>
                      <div className='w-96 text-slate-500'>
                        <p>National Accreditation Board for Hospitals & Healthcare Providers (NABH)</p>
                      </div>
                  </div>

                </div>
                <div className='w-1/2'></div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex w-full justify-center items-center bg-[url('/Images/Main-Banner-Website-Banner.jpg')] bg-cover bg-no-repeat"> 
            <div className='max-w-[1280px] mx-auto w-full h-full px-4 flex flex-row items-center'>
            <div className='w-full md:w-1/2 animate-fade-in'>
                  <h1 className='w-[600px] text-5xl font-bold pb-4 text-slate-600 pt-44 mr-4'>We are committed to your health and well-being</h1> 
                  <p className='font-medium w-96 text-pink-500'>We are dedicated to providing comprehensive healthcare services tailored specifically to address the unique needs of women.</p> 
                  <div className="navigation-buttons p-20 ">
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