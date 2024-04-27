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
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Cancer Screening, Diagnosis & Preventive Vaccination</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                    <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>&gt; <Link href="/Treatments">Cancer Screening, Diagnosis & Preventive Vaccination</Link>
                </p>
                    
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-14 mb-14'>
               
                <p className='text-base text-justify text-[#5C5C5C]'>
                Discover complete Cancer Screening, Diagnosis, & Preventive Vaccination services at Spandan Maternity Home. Our committed 
                healthcare team emphasizes early detection and prevention, providing customized screening tests and advanced diagnostics. From 
                regular screenings to personalized preventive vaccination programs, we offer proactive care to protect your well-being. Rely on 
                Spandan to support you in achieving lasting health and vitality.
                </p>
                <div className='flex'>
                <div className='w-1/2 mt-12'>
                    <h1 className='text-base mb-3 font-bold'>Services under Cancer Screening, Diagnosis & <br></br> Preventive Vaccination</h1>
                    <ul className="list-disc text-base pl-6 text-[#5C5C5C]">
                    <li>Regular screenings</li>
                    <li>Diagnostic imaging</li>
                    <li>Pathology tests</li>
                    <li>Genetic testing</li>
                    <li>Multidisciplinary consultation</li>
                    <li>HPV vaccine</li>
                    <li>Hepatitis B vaccine</li>
                    <li>Hepatitis C screening</li>
                    <li>Tobacco cessation counseling</li>
                    <li>Sun protection education</li>
                    <li>Lifestyle counseling</li>
                    </ul>
                    </div>

                    <div className='w-1/2 mt-12 container max-w-[500px] max-h-[500px]'>  
                        <Image
                        src="/images/treat3.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                        className='rounded-2xl'
                        />
                    </div>
                </div>

                 {/* footer-section */}
                 <div className="flex gap-10 mt-24  h-[380px]">
                        <div className="w-1/3 bg-white-700 flex flex-col items-center shadow-xl">
                            <div className="flex flex-col items-left">
                            <a href="/Treatments/Sexually-Transmitted-Disease">
                            <Image
                                 src="/images/Rectangle6.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                      
                            />
                            <p className="text-xl mt-4 text-purple-900  pl-6 font-bold">Sexually Transmitted Disease</p></a>
                            </div>
                        </div>
                        <div className="w-1/3 bg-white-700 flex flex-col items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/Laparoscopic">
                            <Image
                               src="/images/Rectangle5.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                                
                            />
                            <p className="text-xl mt-4 text-purple-900  pl-6 font-bold">Laparoscopic & Hysteroscopic Surgeries</p></a>
                            </div>
                        </div>
                        <div className="w-1/3 bg-white-700 flex flex-col  items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/Adolescent-Health">
                            <Image
                                src="/images/Rectangle7.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                               
                            />
                            <p className="text-xl mt-4 text-purple-900  pl-6 font-bold">Adolescent Health Counselling</p></a>
                            </div>
                        </div>
                    </div>
                    <div>
                    <a href="/Treatments" className="block mt-20 pt-2 pb-2 text-center w-[200px] h-[50px] rounded-3xl text-white bg-pink-500 flex items-center justify-center mx-auto">
                        View All Treatments
                    </a>

                    </div>
            </div>
        </div>
    )}