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
                    <p className='absolute bottom-20 text-white px-8 py-2 text-5xl'>IVF Speciality</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                    <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>&gt; <Link href="/Treatments">IVF Speciality</Link>
                    </p>
                    
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-8 md:mt-14 mb-14'>
            <p className='md:text-base text-base md:pl-0  pl-6 md:pr-0 pr-6 text-justify text-[#5C5C5C]'>
                Empower your adolescent to thrive with the dedicated support of Adolescent Health Counselling at Spandan Maternity Home. Our 
                experienced counselors provide a safe and confidential space for teenagers to discuss a range of physical, emotional, and social health 
                concerns. From navigating puberty and sexual health to managing stress, peer pressure, and mental well-being, we offer personalized 
                guidance and strategies tailored to each individual&apos;s needs. With a compassionate approach and a focus on empowerment, we help 
                adolescents develop the knowledge, skills, and resilience necessary to navigate the challenges of adolescence and emerge as healthy, 
                confident young adults. Spandan will support your adolescent&apos;s journey towards a happy and fulfilling life.
                </p>
                <div className='flex flex-col flex-row-reverse md:flex-row'>
                <div className='md:w-1/2 w-full mt-12'>
                <div className='container bg-black md:hidden'> 
                        <Image
                         src="/Images/treat9.png"
                         width={640}
                        height={348}
                         alt="Picture of the author"
                 
                        />
                    </div>
                    <h1 className='text-base mb-3 font-bold md:pl-0 pl-4 md:mt-0 mt-8'>Services under Family Planning</h1>
                    <ul className="list-disc text-base md:pl-6 pl-12 text-[#5C5C5C]">
                    <li>Initial consultation and fertility assessment</li>
                    <li>Ovarian stimulation protocols</li>
                    <li>Monitoring of follicular development</li>
                    <li>Egg retrieval procedure</li>
                    <li>Sperm collection and preparation</li>
                    <li>Insemination (conventional or intracytoplasmic sperm injection - ICSI)</li>
                    <li>Embryo culture and monitoring</li>
                    <li>Embryo transfer procedure</li>
                    <li>Cryopreservation of embryos or oocytes (egg freezing)</li>
                    <li>Preimplantation genetic testing (PGT)</li>
                    <li>Counseling on fertility preservation options</li>
                    <li>Support services during the IVF process</li>
                    <li>Follow-up care and monitoring</li>
                    <li>Referrals for additional fertility treatments or support services if needed</li>
                    </ul>
                    </div>

                    <div className='md:w-1/2 w-full mt-12'>
                    <div className='container bg-black hidden md:block'> 
                        <Image
                         src="/Images/treat9.png"
                         width={640}
                        height={348}
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
                            <p className="text-lg mt-4 text-purple-900  font-bold">Preconception Counselling</p></a>
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