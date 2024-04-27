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
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Preconception Counselling</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                    <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>&gt; <Link href="/Treatments">Preconception Counselling</Link>
                </p>
                    
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-14 mb-14'>
                
                <p className='text-base text-justify text-[#5C5C5C]'>
                Embark on your journey to parenthood with confidence through our Preconception Counseling service at Spandan Maternity Home. Our 
                experienced team of healthcare professionals is dedicated to providing comprehensive guidance and support as you prepare for 
                pregnancy. From assessing your health and addressing any potential risks to offering personalized advice on nutrition, lifestyle, and 
                fertility optimization, we are here to empower you with the knowledge and tools needed to enhance your chances of a healthy 
                conception and pregnancy. Trust Spandan to partner with you in realizing your dreams of starting a family, ensuring a smooth and 
                fulfilling transition into parenthood.
                </p>
                <div className='flex'>
                <div className='w-1/2 mt-12'>
                    <h1 className='text-base mb-3 font-bold'>Services under Preconception Counselling</h1>
                    <ul className="list-disc text-base pl-6 text-[#5C5C5C]">
                    <li>Health assessment</li>
                    <li>Genetic counseling</li>
                    <li>Nutritional guidance</li>
                    <li>Lifestyle modifications</li>
                    <li>Immunizations</li>
                    <li>Medication review</li>
                    <li>Folic acid supplementation</li>
                    <li>Screening for infections</li>
                    <li>Reproductive health education</li>
                    <li>Referrals</li>
                    </ul>
                    </div>

                    <div className='w-1/2 mt-12 container max-w-[500px] max-h-[500px]'>   
                        <Image
                        src="/images/treat2.jpg"
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
                        <div className="w-1/3 bg-white-700 flex flex-col items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/Cancer-Screening">
                            <Image
                                 src="/images/Rectangle4.png"
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
                                 src="/images/Rectangle6.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                      
                            />
                            <p className="text-xl mt-4 text-purple-900  pl-6 font-bold">Sexually Transmitted Disease</p></a>
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