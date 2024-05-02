'use client';
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";






import { faEnvelope,faMapMarkerAlt ,faPhone } from '../../../node_modules/@fortawesome/free-solid-svg-icons/index'
export default function Contact() {
    return(
        <div className="main-content" >
                <div className="relative w-full">
                <div className="bg-[url('/Images/hospitalbanner2.jpg')] bg-cover bg-center min-h-96"></div>
                <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: '1', backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), #241B19 200%)', height: '100%' }}></div>

                <div className='container max-w-[1280px] mx-auto relative z-10'>
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Contact Us</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                        <Link href="/">Home</Link> &gt; <Link href="/Contact">Contact Us</Link>
                    </p>
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-10 mb-32'>
                <div className="box-border h-auto w-full  flex mt-20 border-2 rounded-2xl">
                    <Image className="rounded-l-2xl" width={600} height={600}  src="/Images/reception.jpg" alt="Dr. Surabhi Vegad"/>
                        <div className='w-30 h-10 p-12'>
                            <p className="text-4xl text-left mb-8 font-bold text-green-500" style={{ color: 'rgb(1, 146, 144)'}}>Contact us</p>
                           
                                <div className='mb-8'>
                                    <p className='text-xl mt-6 text-[rgb(236,80,167)] mb-2'>For Appoinment</p>
                                    <a href="tel:+919979232346">
                                        <p className='text-slate-500'>99792 32346</p>
                                    </a>
                                    <a href="tel:+917228862236">
                                        <p className='text-slate-500'>72288 62236</p>
                                    </a>
                                </div>

                                <div className='mb-8'>
                                    <p className='text-xl mt-6 text-[rgb(236,80,167)] mb-2'>Address</p>
                                    <p className='text-slate-500'>Shivam Nagar, Near Uma Nagar, Highway, Near Kutch Orthopadic Hospital, Mirjapar, Bhuj, Gujarat 370040</p>
                                </div>

                                <div className='mb-8'>
                                    <p className='text-xl mt-6 text-[rgb(236,80,167)] mb-2'>Email</p>
                                    <p className='text-slate-500'><a href="mailto:spandanhospital@gmail.com">spandanhospital@gmail.com</a></p>
                                </div>

                                <div className="flex items-center text-slate-500 mt-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1">
                                        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                    </svg>
                                    <Link href="https://maps.app.goo.gl/fYuXumSpGL1qU6gn8" target="_blank" rel="noopener noreferrer">
                                        View Map
                                    </Link>
                                </div>

                               
                        </div>         
                </div>
                

        
                                                    
            </div>
        </div>
    )
}