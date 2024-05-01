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
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Antenatal Care & Postnatal Care</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                        <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>&gt; <Link href="/Treatments">Antenatal Care & Postnatal Care</Link>
                    </p>
                    
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-14 mb-14'>
                
                <p className='text-base text-justify text-[#5C5C5C]'>
                Experience comprehensive antenatal and postnatal care at Spandan Maternity Home, where we prioritize the health and well-being of 
                both mother and child. From the early stages of pregnancy to the joyful arrival of your newborn and beyond, our dedicated team of 
                healthcare professionals is committed to providing personalized support and guidance every step of the way. With state-of-the-art 
                facilities and compassionate expertise, we ensure that you receive the highest standard of care, empowering you to embrace the 
                journey of parenthood with confidence and peace of mind. Trust Spandan to nurture your family&apos;s future with the care it deserves.
                </p>
                <div className='flex'>
                <div className='w-1/2 mt-12'>
                    <h1 className='text-base mb-3 font-bold'>Services under Antenatal Care & Postnatal Care</h1>
                    <ul className="list-disc text-base pl-6 text-[#5C5C5C]">
                        <li>Confidential medical history review</li>
                        <li>Physical examination</li>
                        <li>Growth and development assessment</li>
                        <li>Immunization review and administration</li>
                        <li>Sexual health education and counseling</li>
                        <li>Substance use screening and counseling</li>
                        <li>Mental health assessment and support</li>
                        <li>Nutrition and exercise counseling</li>
                        <li>Injury prevention education</li>
                        <li>Reproductive health counseling (contraception, STI prevention)</li>
                        <li>Healthy relationship education</li>
                        <li>Academic and career counseling</li>
                        <li>Referrals to specialists or support services as needed</li>
                    </ul>
                    </div>

                    <div className='w-1/2 mt-12 container max-w-[500px] max-h-[500px]'>   
                        <Image
                        src="/Images/treat1.jpg"
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
                            <a href="/Treatments/Preconception-Counselling">
                            <Image
                               src="/Images/Rectangle2.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                               
                            />
                            <p className="text-xl mt-4 text-purple-900  pl-6 font-bold">Preconception Counselling</p></a>
                            </div>
                        </div>
                        <div className="w-1/3 bg-white-700 flex flex-col items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/Cancer-Screening">
                            <Image
                                 src="/Images/Rectangle4.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                              
                            />
                            <p className="text-xl mt-4 text-purple-900  pl-6 font-bold"> Cancer Screening, Preventive Vaccination</p></a>
                            </div>
                        </div>
                        <div className="w-1/3 bg-white-700 flex flex-col  items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/Sexually-Transmitted-Disease">
                            <Image
                                 src="/Images/Rectangle6.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                      
                            />
                            <p className="text-xl mt-4 text-purple-900 pl-6 font-bold">Sexually Transmitted Disease</p></a>
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