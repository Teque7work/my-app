import Image from 'next/image'
import Link from 'next/link'
import '@/style/global.css';

export default function About() {
    return(
        <div className="main-content">
            <div className="relative w-full">
                <div className="bg-[url('/Images/hospitalbanner2.jpg')] bg-cover bg-center min-h-96"></div>
                <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: '1', backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), #241B19 200%)', height: '100%' }}></div>



                <div className='container max-w-[1280px] mx-auto relative z-10'>
                    <p className='absolute bottom-20 text-white px-8 py-2 md:text-5xl text-4xl'>Sexually Transmitted Disease</p>
                    <p className="absolute bottom-8 text-white px-8 py-2">
                    <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>&gt; <Link href="/Treatments">Sexually Transmitted Disease</Link>
                </p>
                    
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-8 md:mt-14 mb-14'>
            <p className='md:text-base text-base md:pl-0  pl-6 md:pr-0 pr-6 text-justify text-[#5C5C5C]'>
                At Spandan Maternity Home, we recognize the integral role sexual health plays in your overall well-being. That&apos;s why we offer 
                comprehensive services for Sexually Transmitted Diseases (STDs), providing confidential testing, diagnosis, and treatment by 
                experienced healthcare professionals. Our compassionate approach ensures personalized care and support throughout the process, 
                empowering you to take control of your sexual health confidently. Spandan provides effective and confidential care for STDs, promoting 
                your overall health and wellness.
                </p>
                <div className='flex flex-col flex-row-reverse md:flex-row'>
                <div className='md:w-1/2 w-full mt-12'>
                <div className='container bg-black md:hidden'> 
                        <Image
                        src="/Images/treat6.png"
                        width={640}
                        height={348}
                        objectFit="cover" // This will make the image cover the container
                        objectPosition="center"
                        alt="Picture of the author"
                      
                        />
                    </div>
                    <h1 className='text-base mb-3 font-bold md:pl-0 pl-4 md:mt-0 mt-8'>Services under Sexually Transmitted Disease</h1>
                    <ul className="list-disc text-base md:pl-6 pl-12 text-[#5C5C5C]">
                    <li>Screening tests</li>
                    <li>Diagnostic tests</li>
                    <li>Counseling and education</li>
                    <li>Treatment options</li>
                    <li>Partner notification and counseling</li>
                    <li>Vaccination (for certain STDs like HPV and hepatitis B)</li>
                    <li>Prevention education (safe sex practices)</li>
                    <li>Follow-up care and monitoring</li>
                    <li>Referrals to specialists or support services</li>
                    </ul>
                    </div>
                  
                    <div className='md:w-1/2 w-full mt-12'>
                        <div className='container bg-black hidden md:block'> 
                        <Image
                        src="/Images/treat6.png"
                        width={640}
                        height={348}
                        objectFit="cover" // This will make the image cover the container
                        objectPosition="center"
                        alt="Picture of the author"
                      
                        />
                    </div>
                    </div>
                  
                </div>

                 {/* footer-section */}
                 <div className="flex flex-col md:flex-row gap-10 mt-0 md:mt-24 text-center md:p-0 p-8">
                 <div className="bg-white-700 md:w-1/3 flex flex-col items-center shadow-xl">
                 <div className="flex flex-col items-left pb-8">
                                <a href="/Treatments/Antenatal-Care">
                                <Image
                                    src="/Images/Rectangle1.png"
                                    width={500}
                                    height={200}
                                    alt="Picture of the author"
                                />
                                <p className="text-lg mt-4 text-purple-900  font-bold">Antenatal Care & Postnatal Care</p></a>
                            </div>
                        </div>
                        <div className="bg-white-700 md:w-1/3 flex flex-col items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/Preconception-Counselling">
                                <Image
                                src="/Images/Rectangle2.png"
                                    width={500}
                                    height={200}
                                    alt="Picture of the author"
                                />
                                <p className="text-lg mt-4 text-purple-900 font-bold">Preconception Counselling</p></a>
                            </div>
                        </div>
                        <div className="bg-white-700 md:w-1/3 flex flex-col items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/Cancer-Screening">
                                <Image
                                    src="/Images/Rectangle4.png"
                                    width={500}
                                    height={200}
                                    alt="Picture of the author"
                                
                                />
                                <p className="text-lg mt-4 text-purple-900 font-bold"> Cancer Screening, Preventive Vaccination</p></a>
                            </div>
                        </div>
                    </div>
                    <div>
                    <a href="/Treatments" className="block md:mt-12 mt-0 md:mb-24  text-center w-[200px] h-[50px] rounded-3xl text-white bg-pink-500 flex items-center justify-center mx-auto">
                        View All Treatments
                    </a>

                    </div>
            </div>
        </div>
    )}