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
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Uro - Gynecological Problems</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                    <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>&gt; <Link href="/Treatments">Uro - Gynecological Problems</Link>
                </p>
                    
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-14 mb-14'>
                <p className='text-base text-justify text-[#5C5C5C]'>
                At Spandan Maternity Home, we understand the delicate nature of urogynecological problems and offer specialized care with 
                compassion and expertise. Whether youre facing urinary incontinence, pelvic organ prolapse, or other related issues, our dedicated 
                healthcare team is committed to providing comprehensive evaluations and personalized treatment plans tailored to your needs. With a 
                focus on improving quality of life and restoring confidence, we offer advanced diagnostic techniques and minimally invasive treatment 
                options to address urogynecological concerns effectively. Trust to provide the support and care you need to overcome urogynecological 
                challenges and regain control of your health and well-being.
                </p>
                <div className='flex'>
                <div className='w-1/2 mt-12'>
                    <h1 className='text-base mb-3 font-bold'>Services under Uro - Gynecological Problems</h1>
                    <ul className="list-disc text-base pl-6 text-[#5C5C5C]">
                    <li>Medical history assessment</li>
                    <li>Physical examination</li>
                    <li>Urodynamic testing</li>
                    <li>Imaging studies (ultrasound, MRI)</li>
                    <li>Pelvic floor muscle assessment</li>
                    <li>Bladder diary analysis</li>
                    <li>Lifestyle counseling</li>
                    <li>Medication management</li>
                    <li>Pelvic floor physical therapy</li>
                    <li>Surgical interventions (if necessary)</li>
                    <li>Referrals to specialists</li>
                    </ul>
                    </div>

                    <div className='w-1/2 mt-12 container max-w-[500px] max-h-[500px]'> 
                        <Image
                        src="/Images/treat4.jpg"
                        width={900}
                        height={900} // Adjusted height
                        alt="Picture of the author"
                        className='rounded-2xl'
                        />
                    </div>
                </div>

                 {/* footer-section */}
                 <div className="flex gap-10 mt-24  h-[380px]">
                        <div className="w-1/3 bg-white-700 flex flex-col items-center shadow-xl">
                            <div className="flex flex-col items-left">
                            <a href="/Treatments/IVF-Speciality">
                            <Image
                                 src="/Images/Rectangle9.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                      
                            />
                            <p className="text-xl mt-4 text-purple-900  pl-6 font-bold">IVF Speciality</p></a>
                            </div>
                        </div>
                        <div className="w-1/3 bg-white-700 flex flex-col items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/Menstrual-Issues">
                            <Image
                                 src="/Images/Rectangle10.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                                
                            />
                            <p className="text-xl mt-4 text-purple-900  pl-6 font-bold">Menstrual Issues</p></a>
                            </div>
                        </div>
                        <div className="w-1/3 bg-white-700 flex flex-col  items-center shadow-xl">
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
                    </div>
                    <div>
                    <a href="/Treatments" className="block mt-20 pt-2 pb-2 text-center w-[200px] h-[50px] rounded-3xl text-white bg-pink-500 flex items-center justify-center mx-auto">
                        View All Treatments 
                    </a>

                    </div>
            </div>
        </div>
    )}