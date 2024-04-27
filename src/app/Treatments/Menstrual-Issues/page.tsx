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
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Menstrual Issues</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                    <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>&gt; <Link href="/Treatments">Menstrual Issues</Link>
                </p>
                    
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-14 mb-14'>
                
                <p className='text-base text-justify text-[#5C5C5C]'>
                Address menstrual issues with confidence at Spandan Maternity Home. Our compassionate healthcare team understands the 
                importance of menstrual health and is dedicated to providing personalized care and support. Whether you're experiencing irregular 
                periods, painful cramps, heavy bleeding, or any other menstrual concerns, we offer comprehensive evaluations and tailored treatment 
                plans to help you find relief and regain control over your menstrual health. With state-of-the-art facilities and a patient-centered 
                approach, we strive to empower women to live their lives fully, free from the limitations of menstrual issues. Trust Spandan to partner 
                with you in achieving optimal menstrual wellness.
                </p>
                <div className='flex'>
                <div className='w-1/2 mt-12'>
                    <h1 className='text-base mb-3 font-bold'>Services under Menstrual Issues</h1>
                    <ul className="list-disc text-base pl-6 text-[#5C5C5C]">
                        <li>Contraceptive counseling</li>
                        <li>Birth control options education</li>
                        <li>Prescription and provision of contraceptives</li>
                        <li>Long-acting reversible contraception (LARC) insertion (such as IUDs or implants)</li>
                        <li>Barrier methods distribution (condoms, diaphragms)</li>
                        <li>Natural family planning education</li>
                        <li>Preconception counseling</li>
                        <li>Fertility awareness methods training</li>
                        <li>Counseling on emergency contraception</li>
                        <li>Sterilization counseling and procedures (if desired)</li>
                    </ul>
                    </div>

                    <div className='w-1/2 mt-12 container max-w-[500px] max-h-[500px]'> 
                        <Image
                        src="/images/treat110.jpg"
                        width={500}
                        height={500} // Adjusted height
                        alt="Picture of the author"
                        className='rounded-2xl'
                        />
                    </div>
                </div>

                 {/* footer-section */}
                 <div className="flex gap-10 mt-24  h-[380px]">
                        <div className="w-1/3 bg-white-700 flex flex-col items-center shadow-xl">
                            <div className="flex flex-col items-left">
                            <a href="/Treatments/Menopausal-Problems">
                                <Image
                                    src="/images/Rectangle8.png"
                                    width={500}
                                    height={200}
                                    alt="Picture of the author"
                                />
                                <p className="text-xl mt-4 text-purple-900  pl-6 font-bold">Menopausal Problems</p></a>
                            </div>
                        </div>
                        <div className="w-1/3 bg-white-700 flex flex-col items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/Family-Planning">
                                <Image
                                    src="/images/Rectangle12.png"
                                    width={500}
                                    height={200}
                                    alt="Picture of the author"
                                />
                                <p className="text-xl mt-4 text-purple-900  pl-6 font-bold">Family Planning</p></a>
                            </div>
                        </div>
                        <div className="w-1/3 bg-white-700 flex flex-col  items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/Antenatal-Care">
                            <Image
                                src="/images/Rectangle1.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                                
                            />
                            <p className="text-xl mt-4 text-purple-900  pl-6 font-bold">Antenatal Care & Postnatal Care</p></a>
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