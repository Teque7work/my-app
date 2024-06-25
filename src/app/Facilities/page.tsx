// 'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
import { useMediaQuery } from 'react-responsive';
import '@/style/global.css';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLeaf, faStethoscope, faAmbulance, faQuoteLeft, faQuoteRight, faPhoneVolume, faAlignRight, faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Facilities_Slider from '@/app/(Components)/Facilities-Slider';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Facility',
    keywords: 'Dr.Surbhi Vegad, Gynecologist Bhuj, Best Gynec in Bhuj Kutch',
    description: 'As a distinguished gynecologist, IVF expert, and laparoscopic surgeon',
    openGraph:{
        images:"../Images/logo-og-color.png"
       }
}

export default function Facilities() {
// const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
// const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    return (
        <div className="main-content">
            <div className="relative w-full">
                <div className="bg-[url('/Images/hospitalbanner2.jpg')] bg-cover bg-center min-h-96"></div>
                <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: '1', backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), #241B19 200%)', height: '100%' }}></div>

                <div className='container max-w-[1280px] mx-auto relative z-10'>
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Facilities</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                        <Link href="/">Home</Link> &gt; <Link href="/Facilities">Facilities</Link>
                    </p>
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto relative z-10 pt-14 pb-14'>
                <div className='flex justify-center'>
                <p className="text-black text-lg text-center text-[#581C87]">
                    Specializing in Advanced Womens Maternity Solutions <br></br>
                            <span className='text-xl text-[#EC4899]'><a href="/SurabhiVegad" className="text-[#EC4899] underline-offset-1"> <u>with Cutting-Edge Technology.</u></a></span>
                        </p>
                </div>
            </div>
        <div className='pb-20'>
        <div className="flex flex-col items-center justify-center md:flex-row">
    {/* Main Image */}
    <div className="w-full md:w-[70%]">
        <Image
            src="/Images/front image@3x.jpg"
            width={1000}
            height={550}
            alt="Main Image"
            className="w-full h-[300px] md:h-[600px]"
        />
    </div>
    {/* Text Content */}
    <div className="w-full md:w-[30%] mt-8 md:mt-0 ">
        <p className="text-black text-sm text-center text-[#581C87] container mx-auto">
            If You Need Urgent Care,<br /> Simply Contact Our 24 Hour Emergency Hotline.<br />
            <span className="text-xl text-[#EC4899]">Your Health is Our Priority.</span>
        </p>
    </div>
</div>
                {/* <div className="navigation-buttons p-20 " style={{ position: 'absolute', top: '10%', left: '15%', transform: 'translate(-50%, -50%)', zIndex: 999 }}></div> */}

    <div className="md:ml-[120px] md-mt-0 mt-[-100px]" style={{ marginTop: '80px', position: 'relative' }}>
        <div className="navigation-buttons p-20 hidden md:block " style={{ position: 'absolute', top: '10%', left: '15%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
            <div className="swiper-button-prev">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* <path d="M25 5L5 25L25 45" stroke="#581C87"  strokeLinecap="round" strokeLinejoin="round"/> */}
                </svg>
            </div>
            <p className='text-4xl text-[#581C87] ' style={{ display: 'inline-block', margin: '0 20px' }}> View facilities </p>
            <div className="swiper-button-next">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* <path d="M25 45L45 25L25 5" stroke="#581C87"  strokeLinecap="round" strokeLinejoin="round"/> */}
                </svg>
            </div>
        </div>
        <div className='md:pb-36 p-0 relative md:pt-0 pt-36 ' style={{ marginTop: '100px' }}>
            <div className="navigation-buttons p-20 block md:hidden md:mt-0 mt-40 md:ml-0 ml-6" style={{ position: 'absolute', top: '10%', left: '15%', transform: 'translate(-50%, -50%)', zIndex: 999, }}>
                <div className="swiper-button-prev">
                    <svg width="0" height="0" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* <path d="M25 5L5 25L25 45" stroke="#581C87"  strokeLinecap="round" strokeLinejoin="round"/> */}
                    </svg>
                </div>
                {/* <p className='text-4xl text-[#581C87] ' style={{ display: 'inline-block', margin: '0 20px' }}> View facilities </p> */}
                <div className="swiper-button-next md:mr-0 mr-14">
                    <svg width="0" height="0" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* <path d="M25 45L45 25L25 5" stroke="#581C87"  strokeLinecap="round" strokeLinejoin="round"/> */}
                    </svg>
                </div>
            </div>
       

            <div className='md:w-[60%] w-[100%] md:p-0 p-4' style={{ position: 'absolute', overflow: 'hidden', bottom: 0, right: 0 }}>
                <Facilities_Slider />
            </div>

    </div>
</div>

        </div>
        {/* Second faciliti */}
        <div className='pb-4 md:pb-20 md:mt-0 mt-4'>
            {/* <div className="flex flex-col items-center justify-center md:flex-row">
                <Image
                    src="/Images/front image@3x.jpg"
                    width={1000}
                    height={550}
                    alt="Main Image"
                    className="w-full h-[300px] md:w-[70%] md:h-[600px]"
                />
                <div className="w-full md:w-[30%] md:mt-0 mt-8">
                <p className="text-black text-lg text-center text-[#581C87]">
                             Specializing in advanced infertility solutions, <br></br>
                            <span className='text-xl text-[#EC4899]'><a href="/SurabhiVegad" className="text-[#EC4899] underline-offset-1"> <u>our Maternity Home in Bhuj.</u></a></span>
                        </p>
                </div>
            </div> */}
                    <div className='container max-w-[1280px] mx-auto relative z-10 md:pt-4 pt-8 md:mb-14 mb-8'>
                        <div className='flex justify-center'>
                            <p className='text-4xl text-[#581C87] font-bold'>IVF Center</p>
                        </div>
                        <div className="grid md:grid-cols-5 grid-cols-1 gap-8 md:mt-16 mt-8">
                            <div className="md:h-auto rounded-2xl  md:w-screen/5 flex flex-col md:pl-0 pl-8 md:pr-0 pr-8 md:pb-0">
                                <div>
                                    <Image
                                    src="/Images/ivfcenter1.jpg"
                                        width={400} 
                                        height={200} 
                                        alt="Picture of the author"
                                        className='rounded-2xl'
                                    />
                                </div>
                                
                            </div>
                        
                            <div className="md:h-auto rounded-2xl  md:w-screen/5 flex flex-col md:pl-0 pl-8 md:pr-0 pr-8">
                                <div>
                                    <Image
                                        src="/Images/ivfcenter6.jpg"
                                        width={450} 
                                        height={200} 
                                        alt="Picture of the author"
                                        className='rounded-2xl'
                                    />
                                </div>
                                
                                
                            </div>
                            <div className="md:h-auto rounded-2xl  md:w-screen/5 flex flex-col md:pl-0 pl-8 md:pr-0 pr-8">
                                <div>
                                    <Image
                                    src="/Images/ivfcenter3.jpg"
                                        width={450} 
                                        height={200} 
                                        alt="Picture of the author"
                                        className='rounded-2xl'
                                    />
                                </div>
                               
                                
                            </div>
                            <div className="md:h-auto rounded-2xl  md:w-screen/5 flex flex-col md:pl-0 pl-8 md:pr-0 pr-8 md:pb-0 pb-8">
                                <div>
                                    <Image
                                    src="/Images/ivfcenter5.jpg"
                                        width={450} 
                                        height={200} 
                                        alt="Picture of the author"
                                        className='rounded-2xl'
                                    />
                                </div>
                               
                                
                            </div>
                            <div className="md:h-auto rounded-2xl  md:w-screen/5 flex flex-col md:pl-0 pl-8 md:pr-0 pr-8 md:pb-0 pb-8">
                                <div>
                                    <Image
                                    src="/Images/ivfcenter7.JPG"
                                        width={450} 
                                        height={200} 
                                        alt="Picture of the author"
                                        className='rounded-2xl'
                                    />
                                </div> 
                            </div>
                    </div>
                    </div>
                    </div>

          

        </div>
    );
}