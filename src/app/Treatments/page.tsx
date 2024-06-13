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
                    <p className='absolute bottom-20 text-white px-8 py-2 text-5xl'>Treatments</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                        <Link href="/">Home</Link> &gt; <Link href="/Insurance">Treatments</Link>
                    </p>
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-4 md:mt-20 md:mb-28 mb-8 md:p-0 p-4'>
                <div>
                    <p className='md:pl-8 md:pr-8 pl-4 pr-4 md:text-center text-center text-gray-500 text-lg md:mb-0 mb-8 '>
                    Clinical laboratory services are tests provided by a medical lab that aid in diagnosis and treatment of patients. There are many types of clinical laboratory services, including:
                    </p>
                </div>
                {/* first section */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-0 md:mt-16 mt-0 md:p-0 p-4 ">
                    <div className="bg-white-700 flex flex-col justify-center items-center shadow-xl md:mb-0 mb-8">
                        <div className="flex flex-col items-left pb-8 md:h-[440px]">
                            <a href="/Treatments/Antenatal-Care">
                                <Image
                                    src="/Images/Rectangle1.png"
                                    width={500}
                                    height={200}
                                    alt="Antenatal Care & Postnatal Care"
                                />
                                <p className="text-xl mt-4 text-purple-900 md:pl-6 pl-6 font-bold">Antenatal Care & Postnatal Care</p>
                                <div className="w-28 ml-6 border-b-2 border-teal-500 mt-4"></div>
                                <p className="text-md mt-4 text-gray-500 px-6">Antenatal care provides crucial support and medical attention to expectant mothers throughout their pregnancy, ensuring both maternal and fetal health.</p>
                            </a>
                        </div>
                    </div>
                    <div className="bg-white-700 flex flex-col justify-center items-center shadow-xl md:mb-0 mb-8">
                        <div className="flex flex-col items-left pb-8 md:h-[440px]">
                            <a href="/Treatments/Preconception-Counselling">
                                <Image
                                    src="/Images/Rectangle2.png"
                                    width={500}
                                    height={200}
                                    alt="Preconception Counselling"
                                />
                                <p className="text-xl mt-4 text-purple-900 md:pl-6 pl-6 font-bold">Preconception Counselling</p>
                                <div className="w-28 ml-6 border-b-2 border-teal-500 mt-4"></div>
                                <p className="text-md mt-4 text-gray-500 px-6">Preconception counseling offers valuable guidance and support to individuals or couples planning to conceive, addressing factors such as health.</p>
                            </a>
                        </div>
                    </div>
                    <div className="bg-white-700 flex flex-col justify-center items-center shadow-xl md:mb-0 mb-0">
                        <div className="flex flex-col items-left pb-8 md:h-[440px]">
                            <a href="/Treatments/Cancer-Screening">
                                <Image
                                    src="/Images/Rectangle4.png"
                                    width={500}
                                    height={200}
                                    alt="Cancer Screening, Preventive Vaccination"
                                />
                                <p className="text-xl mt-4 text-purple-900 md:pl-6 md:pl-6 pl-4 font-bold">Cancer Screening, Preventive Vaccination</p>
                                <div className="w-28 ml-6 border-b-2 border-teal-500 mt-4"></div>
                                <p className="text-md mt-4 text-gray-500 px-6">Cancer screening aims to detect signs of cancer early, often through tests like mammograms.</p>
                            </a>
                        </div>
                    </div>
                </div>

             {/* second section */}
             <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-0 md:mt-8 mt-0 md:p-0 p-4 ">
                <div className="bg-white-700 flex flex-col justify-center items-center shadow-xl md:mb-0 mb-8">
                    <div className="flex flex-col items-left pb-8 md:h-[440px]">
                        <a href="/Treatments/Sexually-Transmitted-Disease">
                            <Image
                                src="/Images/Rectangle6.png"
                                width={500}
                                height={200}
                                alt="Sexually Transmitted Disease"
                            />
                            <p className="text-xl mt-4 text-purple-900 pl-6 font-bold">Sexually Transmitted Disease</p>
                            <div className="w-28 ml-6 border-b-2 border-teal-500 mt-4"></div>
                            <p className="text-md mt-4 text-gray-500 px-6">Sexually transmitted diseases (STDs) are infections spread through sexual contact. They can be caused by bacteria and may present with symptoms like genital sores. Some STDs.</p>
                        </a>
                    </div>
                </div>
                <div className="bg-white-700 flex flex-col justify-center items-center shadow-xl md:mb-0 mb-8">
                    <div className="flex flex-col items-left pb-8 md:h-[440px]">
                        <a href="/Treatments/Laparoscopic">
                            <Image
                                src="/Images/Rectangle5.jpg"
                                width={500}
                                height={200}
                                alt="Laparoscopic & Hysteroscopic Surgeries"
                            />
                            <p className="text-xl mt-4 text-purple-900 pl-6 font-bold">Laparoscopic & Hysteroscopic Surgeries</p>
                            <div className="w-28 ml-6 border-b-2 border-teal-500 mt-4"></div>
                            <p className="text-md mt-4 text-gray-500 px-6">Laparoscopic and hysteroscopic surgeries are minimally invasive procedures commonly used to diagnose and treat various gynecological conditions.</p>
                        </a>
                    </div>
                </div>
                <div className="bg-white-700 flex flex-col justify-center items-center shadow-xl md:mb-0 mb-0">
                    <div className="flex flex-col items-left pb-8 md:h-[440px]">
                        <a href="/Treatments/Adolescent-Health">
                            <Image
                                src="/Images/Rectangle7.png"
                                width={500}
                                height={200}
                                alt="Adolescent Health Counselling"
                            />
                            <p className="text-xl mt-4 text-purple-900 pl-6 font-bold">Adolescent Health Counselling</p>
                            <div className="w-28 ml-6 border-b-2 border-teal-500 mt-4"></div>
                            <p className="text-md mt-6 text-gray-500 px-6">Adolescent health counseling plays a pivotal and proactive role in promoting the physical, emotional, and social well-being of young individuals during a critical phase.</p>
                        </a>
                    </div>
                </div>
            </div>

                {/* third section */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-0 md:mt-8 mt-0 md:p-0 p-4 ">
                <div className="bg-white-700 flex flex-col justify-center items-center shadow-xl md:mb-0 mb-8">
                    <div className="flex flex-col items-left pb-8">
                        <a href="/Treatments/IVF-Speciality">
                            <Image
                                src="/Images/Rectangle9.png"
                                width={500}
                                height={200}
                                alt="IVF Speciality"
                            />
                            <p className="text-xl mt-4 text-purple-900 pl-6 font-bold">IVF Speciality</p>
                            <div className="w-28 ml-6 border-b-2 border-teal-500 mt-4"></div>
                            <p className="text-md mt-4 text-gray-500 px-6">IVF (In Vitro Fertilization) is a specialized area within reproductive medicine that focuses on assisting individuals or couples who are experiencing infertility or difficulties conceiving a child.</p>
                        </a>
                    </div>
                </div>
                <div className="bg-white-700 flex flex-col justify-center items-center shadow-xl md:mb-0 mb-8">
                    <div className="flex flex-col items-left pb-8">
                        <a href="/Treatments/Menstrual-Issues">
                            <Image
                                src="/Images/Rectangle10.png"
                                width={500}
                                height={200}
                                alt="Menstrual Issues"
                            />
                            <p className="text-xl mt-4 text-purple-900 pl-6 font-bold">Menstrual Issues</p>
                            <div className="w-28 ml-6 border-b-2 border-teal-500 mt-4"></div>
                            <p className="text-md mt-4 text-gray-500 px-6">Menstrual issues encompass a wide range of abnormalities or disturbances in the menstrual cycle, which can affect womens reproductive health and overall well-being. These issues include irregular periods.</p>
                        </a>
                    </div>
                </div>
                <div className="bg-white-700 flex flex-col justify-center items-center shadow-xl md:mb-0 mb-0">
                    <div className="flex flex-col items-left pb-8">
                        <a href="/Treatments/Infertility-Work-up">
                            <Image
                                src="/Images/Rectangle11.png"
                                width={500}
                                height={200}
                                alt="Infertility Work-up"
                            />
                            <p className="text-xl mt-4 text-purple-900 pl-6 font-bold">Infertility Work-up</p>
                            <div className="w-28 ml-6 border-b-2 border-teal-500 mt-4"></div>
                            <p className="text-md mt-6 text-gray-500 px-4">The goal of the infertility work-up is to identify any factors contributing to infertility and develop a personalized treatment plan to address them within a reasonable timeframe.</p>
                        </a>
                    </div>
                </div>
                </div>

                {/* forth section */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 gap-0 md:mt-8 mt-0 md:p-0 p-4 ">
                <div className="bg-white-700 flex flex-col justify-center items-center shadow-xl md:mb-0 mb-8">
                    <div className="flex flex-col items-left pb-8">
                        <a href="/Treatments/Uro">
                            <Image
                                src="/Images/Rectangle3.png"
                                width={500}
                                height={200}
                                alt="Uro - Gynecological Problems"
                            />
                            <p className="text-xl mt-4 text-purple-900 pl-6 font-bold">Uro - Gynecological Problems</p>
                            <div className="w-28 ml-6 border-b-2 border-teal-500 mt-4"></div>
                            <p className="text-md mt-4 text-gray-500 px-6">Uro-gynecological problems may include pelvic organ prolapse, urinary incontinence, recurrent urinary tract infections, and other related issues requiring specialized medical attention.</p>
                        </a>
                    </div>
                </div>
                <div className="bg-white-700 flex flex-col justify-center items-center shadow-xl md:mb-0 mb-8">
                    <div className="flex flex-col items-left pb-8">
                        <a href="/Treatments/Menopausal-Problems">
                            <Image
                                src="/Images/Rectangle8.png"
                                width={500}
                                height={200}
                                alt="Menopausal Problems"
                            />
                            <p className="text-xl mt-4 text-purple-900 pl-6 font-bold">Menopausal Problems</p>
                            <div className="w-28 ml-6 border-b-2 border-teal-500 mt-4"></div>
                            <p className="text-md mt-4 text-gray-500 px-6">Menopausal problems refer to the various physical and psychological symptoms experienced by women as they transition from their reproductive years to menopause.</p>
                        </a>
                    </div>
                </div>
                <div className="bg-white-700 flex flex-col justify-center items-center shadow-xl">
                    <div className="flex flex-col items-left pb-8">
                        <a href="/Treatments/Family-Planning">
                            <Image
                                src="/Images/Rectangle12.png"
                                width={500}
                                height={200}
                                alt="Family Planning"
                            />
                            <p className="text-xl mt-4 text-purple-900 pl-6 font-bold">Family Planning</p>
                            <div className="w-28 ml-6 border-b-2 border-teal-500 mt-4"></div>
                            <p className="text-md mt-4 text-gray-500 px-6">Family planning encompasses a range of services and strategies aimed at helping individuals and couples achieve their desired family size while promoting reproductive health.</p>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
    )
}