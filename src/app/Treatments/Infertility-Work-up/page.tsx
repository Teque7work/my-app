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
                    <p className='absolute bottom-20 text-white px-8 py-2 text-2xl md:text-5xl'>Infertility Work-up</p>
                    <p className="absolute bottom-10 text-white px-8 py-2 text-sm md:text-base">
                    <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>&gt; <Link href="/Treatments">Infertility Work-up</Link>
                </p>
                    
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-8 md:mt-14 mb-14'>
                
            <p className='md:text-base text-sm md:pl-0 pl-4 md:pr-0 pr-4 text-justify text-[#5C5C5C]'>
                Embark on your journey towards parenthood with confidence through the Infertility Work-up services at Spandan Maternity Home. We 
                understand the emotional challenges of infertility and offer comprehensive evaluations and diagnostic tests tailored to your unique 
                circumstances. Our experienced healthcare professionals guide you through every step of the process with compassion and expertise, 
                identifying underlying causes and developing personalized treatment plans. Trust Spandan to provide the support and understanding 
                you need as you pursue your dream of starting a family.
                </p>
                <div className='flex flex-col flex-row-reverse md:flex-row'>
                <div className='md:w-1/2 w-full mt-12'>
                <div className='container bg-black md:hidden'> 
                        <Image
                        src="/Images/treat11.png"
                        width={640}
                        height={348}
                        alt="Picture of the author"
                  
                        />
                    </div>
                    <h1 className='text-base mb-3 font-bold md:pl-0 pl-4 md:mt-0 mt-8'>Services under Infertility Work-up</h1>
                    <ul className="list-disc text-base md:pl-6 pl-12 text-[#5C5C5C]">
                    <li>Medical history assessment</li>
                    <li>Physical examination</li>
                    <li>Hormonal testing</li>
                    <li>Semen analysis (for male partners)</li>
                    <li>Ovulation tracking</li>
                    <li>Tubal patency testing (for female partners)</li>
                    <li>Imaging studies (ultrasound, hysterosalpingogram)</li>
                    <li>Genetic testing</li>
                    <li>Lifestyle counseling</li>
                    <li>Medication management</li>
                    <li>Assisted reproductive technology (ART) consultation</li>
                    <li>Referrals to fertility specialists or support services</li>
                    </ul>
                    </div>

                    <div className='md:w-1/2 w-full mt-12'>
                        <div className='container bg-black hidden md:block'> 
                        <Image
                        src="/Images/treat11.png"
                        width={640}
                        height={348}
                        alt="Picture of the author"
                  
                        />
                    </div>
                    </div>
                </div>

                 {/* footer-section */}
                 <div className="flex flex-col md:flex-row gap-10 mt-8 md:mt-24 text-center">
                 <div className="bg-white-700 md:w-1/3 flex flex-col items-center shadow-xl">
                            <div className="flex flex-col items-left">
                            <a href="/Treatments/Uro">
                                <Image
                                    src="/Images/Rectangle3.png"
                                    width={500}
                                    height={200}
                                    alt="Picture of the author"
                                />
                                <p className="text-lg mt-4 text-purple-900  pl-6 font-bold">Uro - Gynecological Problems</p></a>
                            </div>
                        </div>
                        <div className="bg-white-700 md:w-1/3 flex flex-col items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/Menopausal-Problems">
                                <Image
                                    src="/Images/Rectangle8.png"
                                    width={500}
                                    height={200}
                                    alt="Picture of the author"
                                />
                                <p className="text-lg mt-4 text-purple-900  pl-6 font-bold">Menopausal Problems</p></a>
                            </div>
                        </div>
                        <div className="bg-white-700 md:w-1/3 flex flex-col items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/Family-Planning">
                                <Image
                                    src="/Images/Rectangle12.png"
                                    width={500}
                                    height={200}
                                    alt="Picture of the author"
                                />
                                <p className="text-lg mt-4 text-purple-900  pl-6 font-bold">Family Planning</p></a>
                            </div>
                        </div>
                    </div>
                    <div>
                    <a href="/Treatments" className="block mt-16 mb-8 md:mb-28 pt-2 pb-2 text-center w-[200px] h-[50px] rounded-3xl text-white bg-pink-500 flex items-center justify-center mx-auto">
                        View All Treatments
                    </a>
                </div>
            </div>
        </div>
    )}