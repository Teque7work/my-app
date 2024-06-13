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
                    <p className='absolute bottom-20 text-white px-8 py-2 text-5xl'>Contact Us</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                        <Link href="/">Home</Link> &gt; <Link href="/Contact">Contact Us</Link>
                    </p>
                </div>
            </div>
            <div className='container md:max-w-[1280px] w-full mx-auto'>
    <div className="md:box-border h-auto w-full flex flex-col md:flex-row md:mt-16 mt-8 border-2 rounded-2xl md:p-0 p-4 border-none">
        <Image className="md:rounded-l-2xl md:rounded-t-2xl md:rounded-l-none md:rounded-none rounded-2xl" width={600} height={600} src="/Images/reception.jpg" alt="Dr. Surabhi Vegad"/>
        <div className='p-4 md:p-8'>
            <p className="text-4xl text-left mb-8 font-bold text-green-500" style={{ color: 'rgb(1, 146, 144)'}}>Contact us</p>
            <div className='mb-8'>
                <p className='text-xl mt-6 text-[rgb(236,80,167)] mb-2'>For Appointment</p>
                <a href="tel:+919979232346" className="text-slate-500 block text-xl">
                    99792 32346
                </a>
                <a href="tel:+917228862236" className="text-slate-500 block mt-2 text-xl">
                    72288 62236
                </a>
            </div>
            <div className='mb-8'>
                <p className='text-xl mt-6 text-[rgb(236,80,167)] mb-2'>Address</p>
                <p className='text-slate-500'>Shivam Nagar, Near Uma Nagar, Highway, Near Kutch Orthopedic Hospital, Mirjapar, Bhuj, Gujarat 370040</p>
            </div>
            <div className='mb-8'>
                <p className='text-xl mt-6 text-[rgb(236,80,167)] mb-2'>Email</p>
                <p className='text-slate-500'>
                    <a href="mailto:spandanhospital@gmail.com">spandanhospital@gmail.com</a>
                </p>
            </div>
            <div className="flex items-center text-purple-800 mt-8">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1">
        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
      </svg>
      <Link href="https://maps.app.goo.gl/fYuXumSpGL1qU6gn8" target="_blank" rel="noopener noreferrer">
        <p className="text-purple-800">View Map</p>
      </Link>
    </div> 
        </div>         
    </div>                                    
</div>

<section className='bg-purple-50 pt-14 pb-20'>
  <div className="max-w-[1280px] mx-auto px-4">
    <div className='text-center '>
      <h1 className='text-4xl md:text-5xl font-bold text-purple-900'>Cashless Facility</h1> 
      <p className='text-sm md:text-base pt-4 pb-8 md:pb-14 text-purple-800'>List of empaneled Insurance Companies.</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-5 md:gap-4 gap-0">
      <div className="box-border rounded-2xl h-auto p-4 flex justify-center items-center hover:shadow-md transition-all duration-300 relative">
        <div>
          <Image src="/Images/insurance1.png" width={300} height={300} alt="cigna" />
        </div>
      </div>
      <div className="box-border rounded-2xl h-auto p-4 flex justify-center items-center hover:shadow-md transition-all duration-300 relative">
        <div>
          <Image src="/Images/insurance2.png" width={300} height={300} alt="cigna" />
        </div>
      </div>
      <div className="box-border rounded-2xl h-auto p-4 flex justify-center items-center hover:shadow-md transition-all duration-300 relative">
        <div>
          <Image src="/Images/insurance3.png" width={300} height={300} alt="cigna" />
        </div>
      </div>
      <div className="box-border rounded-2xl h-auto p-4 flex justify-center items-center hover:shadow-md transition-all duration-300 relative">
        <div>
          <Image src="/Images/insurance4.png" width={300} height={300} alt="cigna" />
        </div>
      </div>
      <div className="box-border rounded-2xl h-auto p-4 flex justify-center items-center hover:shadow-md transition-all duration-300 relative">
        <div>
          <Image src="/Images/insurance5.png" width={300} height={300} alt="cigna" />
        </div>
      </div>
      <div className="box-border rounded-2xl h-auto p-4 flex justify-center items-center hover:shadow-md transition-all duration-300 relative">
        <div>
          <Image src="/Images/insurance6.png" width={300} height={300} alt="cigna" />
        </div>
      </div>
      <div className="box-border rounded-2xl h-auto p-4 flex justify-center items-center hover:shadow-md transition-all duration-300 relative">
        <div>
          <Image src="/Images/universal sampoo.jpg" width={300} height={300} alt="cigna" />
        </div>
      </div>
      <div className="box-border rounded-2xl h-auto p-4 flex justify-center items-center hover:shadow-md transition-all duration-300 relative">
        <div>
          <Image src="/Images/megma.jpg" width={300} height={300} alt="cigna" />
        </div>
      </div>
      <div className="box-border rounded-2xl h-auto p-4 flex justify-center items-center hover:shadow-md transition-all duration-300 relative">
        <div>
          <Image src="/Images/aditya birla.jpg" width={300} height={300} alt="cigna" />
        </div>
      </div>
      <div className="box-border rounded-2xl h-auto p-4 flex justify-center items-center hover:shadow-md transition-all duration-300 relative">
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