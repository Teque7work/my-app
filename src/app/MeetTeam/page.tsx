import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { faPaintBrush } from '../../../node_modules/@fortawesome/free-solid-svg-icons/index'
export default function Contact() {
    return(
        <div className="main-content">
           <div className="relative w-full">
                <div className="bg-[url('/Images/hospitalbanner2.jpg')] bg-cover bg-center min-h-96"></div>
                <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: '1', backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), #241B19 200%)', height: '100%' }}></div>
                <div className='container max-w-[1280px] mx-auto relative z-10'>
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Meet Team</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                        <Link href="/">Home</Link> &gt; <Link href="/MeetTeam">Meet Team</Link>
                    </p>
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-16 mb-36'>
                <div className='flex flex-wrap'>
                    <div className='w-full lg:w-1/2 mb-8 gap-4 mt-4'>
                    <h1 className='text-4xl font-bold text-purple-900'>Our Team</h1>
                        <div className='text-gray-500 text-lg  mr-8 text-justify mt-6 leading-8'>
                            <h1>At Spandan Maternity Home, our team of dedicated doctors and staff are committed to providing exceptional care to expecting mothers and their babies. With a wealth of experience and expertise in obstetrics and gynecology, our doctors bring compassion and skill to every patient interaction. From prenatal care to delivery and postpartum support, we prioritize the health and well-being of both mother and child.<br></br>
                                Our staff members are not just professionals; they are caregivers who understand the importance of personalized attention during this special time in your life. Whether it is answering questions, easing concerns, or providing guidance, we are here for you every step of the way. At Spandan, we strive to create a supportive and nurturing environment where families can feel comfortable and confident in their journey to parenthood.
                            </h1>
                        </div>
                       
                       
                    </div>
                    <div className='w-full lg:w-1/2'>
                        {/* Replace the image with your actual image */}
                        <Image src="/Images/Spandan image.jpg" width={500} height={500}alt="Image" className="w-full h-[500px] rounded" />
                    </div>
                </div>
                <h1 className='text-left mt-16 text-4xl font-bold text-purple-900'>Our Team Of Doctors</h1>
                <div className="flex justify-center mt-16">
                    <Image src="/Images/member3.jpg" width={150} height={150}alt="Image"/>
                    <div className="w-1/2 flex flex-col justify-center gap-2">
                        <span className="text-lg text-gray-600 font-bold">Member1</span>
                        <span className="text-lg text-gray-600">Obstetrician-Gynecologist</span>
                        <span className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                      
                    </div>
                    <Image src="/Images/member3.jpg" width={150} height={150}alt="Image"  />
                    <div className="w-1/2 flex flex-col justify-center gap-2">
                        <span className="text-lg text-gray-600 font-bold">Member2</span>
                        <span className="text-lg text-gray-600">Obstetrician-Gynecologist</span>
                        <span className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                     
                    </div>   
                </div>
                <div className='flex justify-between'>
                <div className="w-[26%]  ml-36 border-b-2 border-gray-400 mt-12"></div>
                <div className="w-[26%] mr-40  border-b-2 border-gray-400 mt-4"></div>    
                </div>
                <div className="flex justify-center mt-14">
                    <Image src="/Images/member3.jpg" width={150} height={150}alt="Image" />
                    <div className="w-1/2 flex flex-col justify-center gap-2">
                        <span className="text-lg text-gray-600 font-bold">Member3</span>
                        <span className="text-lg text-gray-600">Obstetrician-Gynecologist</span>
                        <span className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                       
                    </div>
                    <Image src="/Images/member3.jpg" width={150} height={150}alt="Image" />
                    <div className="w-1/2 flex flex-col justify-center gap-2">
                        <span className="text-lg text-gray-600 font-bold">Member4</span>
                        <span className="text-lg text-gray-600">Obstetrician-Gynecologist</span>
                        <span className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                      
                    </div>
                </div>
                <div className='flex justify-between'>
                <div className="w-[26%]  ml-36 border-b-2 border-gray-400 mt-12"></div>
                <div className="w-[26%] mr-40  border-b-2 border-gray-400 mt-4"></div>    
                </div>
                
                <div className="flex justify-center mt-14">
                    <Image src="/Images/member3.jpg" width={150} height={150}alt="Image"/>
                        <div className="w-1/2 flex flex-col justify-center gap-2">
                            <span className="text-lg text-gray-600 font-bold">Member5</span>
                            <span className="text-lg text-gray-600">Obstetrician-Gynecologist</span>
                            <span className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                           
                        </div>
                    <Image src="/Images/member3.jpg" width={150} height={150}alt="Image"  />
                    <div className="w-1/2 flex flex-col justify-center gap-2">
                        <span className="text-lg text-gray-600 font-bold">Member6</span>
                        <span className="text-lg text-gray-600">Obstetrician-Gynecologist</span>
                        <span className="text-sm text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                     
                    </div>     
                </div>
         
        
            {/*<div className="flex justify-center">
                <div className="grid grid-cols-3 mx-0 mt-6 gap-4" >
                    <div >
                        <Image
                            src="/Images/surabhi-Bg.png"
                            width={400}
                            height={300}
                            alt="Picture of the author"
                            className='rounded-2xl'
                        />
                        <h1 className="title text-2xl flex justify-center mt-5 text-purple-900" >Dr. Surabjhi Vegad</h1>
                        <h2 className="title flex justify-center mt-3 text-pink-500">Laparoscopic Surgeon</h2>
                        <h2 className="title text-center mt-5 ml-2 mr-2 leading-loose" style={{color:'rgb(120,120,120)'}} > Dr. Surabhi Vegad has been in practice for almost 20 years graduating BDS from the University of Manchester, UK in 1997</h2>
                      
                        <div className="flex justify-center ">
                            <FontAwesomeIcon icon={faPhone} className="relative w-3 h-3 500 mt-6"style={{color:'rgb(51,104,198)'}} />
                            <span className="ml-2 text-xl mt-3 text-[#009290]">+91-9989693645</span>
                       
                        </div>
                        
                    </div>
                    <div>
                        <Image
                            src="/Images/surabhi-Bg.png"
                            width={400}
                            height={300}
                            alt="Picture of the author"
                            className='rounded-2xl'
                        />
                         <h1 className="title text-2xl flex justify-center mt-5 text-purple-900" >Dr. Surabjhi Vegad</h1>
                        <h2 className="title flex justify-center mt-3 text-pink-500" >Laparoscopic Surgeon</h2>
                        <h2 className="title text-center mt-5 ml-2 mr-2 leading-loose" style={{color:'rgb(120,120,120)'}} > Dr. Surabhi Vegad has been in practice for almost 20 years graduating BDS from the University of Manchester, UK in 1997</h2>
                      
                        <div className="flex justify-center ">
                            <FontAwesomeIcon icon={faPhone} className="relative w-3 h-3 500 mt-6"style={{color:'rgb(51,104,198)'}} />
                            <span className="ml-2 text-xl mt-3 text-[#009290]">+91-9989693645</span>
                       
                        </div>
                    </div>
                    <div className='mr-0'>
                        <Image
                            src="/Images/surabhi-Bg.png"
                            width={400}
                            height={300}
                            alt="Picture of the author"
                            className='rounded-2xl'
                        />
                         <h1 className="title text-2xl flex justify-center mt-5 text-purple-900" >Dr. Surabjhi Vegad</h1>
                        <h2 className="title flex justify-center mt-3 text-pink-500">Laparoscopic Surgeon</h2>
                        <h2 className="title text-center mt-5 ml-2 mr-2 leading-loose" style={{color:'rgb(120,120,120)'}} > Dr. Surabhi Vegad has been in practice for almost 20 years graduating BDS from the University of Manchester, UK in 1997</h2>
                      
                        <div className="flex justify-center ">
                            <FontAwesomeIcon icon={faPhone} className="relative w-3 h-3 500 mt-6"style={{color:'rgb(51,104,198)'}} />
                            <span className="ml-2 text-xl mt-3 text-[#009290]">+91-9989693645</span>
                       
                        </div>
                    </div></div>
                </div>*/}
            </div>  
        </div>
    )
}