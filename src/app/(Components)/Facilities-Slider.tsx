'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react';

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useMediaQuery } from 'react-responsive';
import '@/style/global.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf, faStethoscope, faAmbulance, faQuoteLeft, faQuoteRight, faPhoneVolume, faAlignRight, faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Facilities_Slider: React.FC = () => {
    return(
        <Swiper
                autoplay={true}
                loop={true}
                modules={[Autoplay, Navigation]}
                slidesPerView={1.5}
                spaceBetween={20} // Default spaceBetween for mobile
                navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
                breakpoints={{
                    1024: { 
                    slidesPerView: 3,
                    spaceBetween: 30, 
                    },
                }}
                >
                <SwiperSlide>
                    <div className='relative md:w-[100%] md:h-[350px] h-[200px]  rounded-2xl overflow-hidden flex justify-between md:ml-0'>
                    <Image
                        src="/Images/facilities3.jpg"
                        layout="fill"
                        objectFit="cover"
                        alt="First Image"
                    />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='relative md:w-[100%] md:h-[350px] h-[200px]  rounded-2xl overflow-hidden flex justify-between md:ml-0'>
                    <Image
                        src="/Images/facilities5.jpg"
                        layout="fill"
                        objectFit="cover"
                        alt="Second Image"
                    />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='relative md:w-[100%] md:h-[350px] h-[200px]  rounded-2xl overflow-hidden flex justify-between md:ml-0'>
                    <Image
                    src="/Images/facilities4.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="First Image"
                    />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='relative md:w-[100%] md:h-[350px] h-[200px]  rounded-2xl overflow-hidden flex justify-between md:ml-0'>
                    <Image
                    src="/Images/facilities8.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="First Image"
                    />
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='relative md:w-[100%] md:h-[350px] h-[200px] rounded-2xl overflow-hidden flex justify-between md:ml-0 '>
                    <Image
                    src="/Images/facilities9.jpg"
                    layout="fill"
                    objectFit="cover"
                    alt="First Image"
                    />
                </div>
                </SwiperSlide>
               
            </Swiper>
    )
}

export default Facilities_Slider;