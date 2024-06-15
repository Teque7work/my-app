import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { faPaintBrush } from '../../../node_modules/@fortawesome/free-solid-svg-icons/index'
import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Meet Team',
    keywords: 'Gynecology services Bhuj, Infertility treatment Bhuj, IVF Kutch',
    description: 'As a distinguished gynecologist, IVF expert, and laparoscopic surgeon',
    openGraph:{
      images:"https://www.spandanhospital.net/Images/headet-img.svg"
    }
  }
export default function Contact() {
    return(
        <div className="main-content">
           <div className="relative w-full">
                <div className="bg-[url('/Images/hospitalbanner2.jpg')] bg-cover bg-center min-h-96"></div>
                <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: '1', backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), #241B19 200%)', height: '100%' }}></div>
                <div className='container max-w-[1280px] mx-auto relative z-10'>
                    <p className='absolute bottom-20 text-white px-8 py-2 md:text-6xl text-5xl'>Meet Team</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                        <Link href="/">Home</Link> &gt; <Link href="/MeetTeam">Meet Team</Link>
                    </p>
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto md:mt-20 mt-0 md:p-0 p-4'>
                <div className='flex flex-wrap'>
                    <div className='w-full lg:w-1/2 mb-8 gap-4 md:mt-16 mt-8'>
                    <h1 className='text-4xl font-bold text-purple-900'>Our Team</h1>
                        <div className='text-gray-500 font-medium md:mr-8 text-justify mt-6 '>
                            <p className='font-medium  pb-6 text-slate-500'>At Spandan Maternity Home, our team of dedicated doctors and staff are committed to providing exceptional care to expecting mothers and their babies. With a wealth of experience and expertise in obstetrics and gynecology, our doctors bring compassion and skill to every patient interaction. From prenatal care to delivery and postpartum support, we prioritize the health and well-being of both mother and child.</p>
                            <p className='font-medium  pb-6 text-slate-500'>Our staff members are not just professionals; they are caregivers who understand the importance of personalized attention during this special time in your life. Whether it is answering questions, easing concerns, or providing guidance, we are here for you every step of the way. At Spandan, we strive to create a supportive and nurturing environment where families can feel comfortable and confident in their journey to parenthood.</p> 
             
                        </div>
                       
                       
                    </div>
                    <div className='w-full lg:w-1/2'>
                        {/* Replace the image with your actual image */}
                        <Image src="/Images/Spandan image.jpg" width={500} height={500}alt="Image" className="w-full md:h-[500px] rounded" />
                    </div>
                </div>
                <h1 className='text-left mt-16 text-4xl font-bold text-purple-900'>Our Team Of Doctors</h1>
                <div className="flex flex-col items-center md:mt-16 mt-4 md:flex-row md:justify-center md:space-x-8 md:mb-32 mb-8">
                <div className="flex flex-col md:flex-row items-center mt-8 md:mt-0 md:w-1/3 p-4">
                    <Image src="/Images/member1.png" width={150} height={150} alt="Image" />
                    <div className="flex flex-col justify-center gap-2 mt-4 md:mt-0 md:ml-4">
                        <span className="font-medium text-gray-600 font-bold text-center md:text-left">Dr. Maliha Khatri</span>
                        <span className="font-medium text-gray-600 text-center md:text-left">BHMS (Medical Officer)</span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center mt-8 md:mt-0 md:w-1/3 p-4">
                    <Image src="/Images/member2.png" width={150} height={150} alt="Image" />
                    <div className="flex flex-col justify-center gap-2 mt-4 md:mt-0 md:ml-4">
                        <span className="font-medium text-gray-600 font-bold text-center md:text-left">Dr. Pratiksha Mavani</span>
                        <span className="font-medium text-gray-600 text-center md:text-left">BHMS (Medical Officer)</span>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center mt-8 md:mt-0 md:w-1/3 p-4">
                    <Image src="/Images/member3.png" width={150} height={150} alt="Image" />
                    <div className="flex flex-col justify-center gap-2 mt-4 md:mt-0 md:ml-4">
                        <span className="font-medium text-gray-600 font-bold text-center md:text-left">Dr. Devanshi Gor</span>
                        <span className="font-medium text-gray-600 text-center md:text-left">BHMS (Medical Officer)</span>
                    </div>
                </div>
            </div>

            </div>  
            <div className="md:w-full w-[100%] md:mb-28 mb-16 md:pr-0 md:block hidden">
                <div className="relative w-full h-[300px] md:h-[600px]">
                    <Image
                        src="/Images/steam.JPG"
                        layout="fill"
                        objectFit="cover"
                        alt="Image"
                       className="w-full md:h-[500px] rounded"
                    />
                </div>
            </div>
            <div className="md:w-full w-[100%] md:mb-28 mb-16 md:pr-0 md:hidden block">
                <div className="relative w-full h-[300px] md:h-[600px]">
                    <Image
                        src="/Images/steam.JPG"
                        layout="fill"
                        
                        alt="Image"
                       className="w-full md:h-[500px] rounded"
                    />
                </div>
            </div>

        </div>
    )
}