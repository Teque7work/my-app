import Image from 'next/image'
import Link from 'next/link'
import '@/style/global.css';
import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Laparoscopic & Hysteroscopic Surgeries',
    keywords: 'Gynecologist Bhuj, Dr Vegad, IVF in Kutch',
    description: 'As a distinguished gynecologist, IVF expert, and laparoscopic surgeon',
    openGraph:{
      images:"../Images/logo-og-color.png"
    }
  }
export default function About() {
    return(
        <div className="main-content">
            <div className="relative w-full">
                <div className="bg-[url('/Images/hospitalbanner2.jpg')] bg-cover bg-center min-h-96"></div>
                <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: '1', backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), #241B19 200%)', height: '100%' }}></div>



                <div className='container max-w-[1280px] mx-auto relative z-10'>
                    <p className='absolute bottom-20 text-white px-8 py-2 md:text-5xl text-4xl'>Laparoscopic & Hysteroscopic Surgeries</p>
                    <p className=" absolute bottom-8 text-white px-8 py-2">
                    <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>&gt; <Link href="/Treatments">Laparoscopic & Hysteroscopic Surgeries</Link>
                </p>
                    
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-8 md:mt-14 mb-14'>
            <p className='md:text-base text-base md:pl-0  pl-6 md:pr-0 pr-6 text-justify text-[#5C5C5C]'>
                Benefit from advanced surgical precision and minimal invasiveness with Laparoscopic & Hysteroscopic Surgeries at Spandan Maternity 
                Home. Our skilled surgical team utilizes cutting-edge techniques to perform a variety of procedures, resulting in faster recovery and 
                reduced post-operative discomfort. Whether you need diagnostic or therapeutic interventions for gynecological conditions like fibroids, 
                endometriosis, or infertility-related issues, our personalized care ensures your specific needs are addressed. Trust Spandan for expert 
                surgical care, providing optimal outcomes and reassurance during your path to improved health.
                </p>
                <div className='flex flex-col flex-row-reverse md:flex-row'>
                <div className='md:w-1/2 w-full mt-12'>
                <div className='container bg-black md:hidden'> 
                        <Image
                        src="/Images/treat5.jpg"
                        width={640}
                        height={348}
                        alt="Picture of the author"
                        
                        />
                    </div>
                    <h1 className='text-base mb-3 font-bold md:pl-0 pl-4 md:mt-0 mt-8'>Services under Laparoscopic & Hysteroscopic Surgeries</h1>
                    <ul className="list-disc text-base md:pl-6 pl-12 text-[#5C5C5C]">
                    <li>Preoperative evaluation</li>
                    <li>Surgical consultation</li>
                    <li>Laparoscopic procedures (e.g., tubal ligation, ovarian cystectomy)</li>
                    <li>Hysteroscopic procedures (e.g., endometrial ablation, polypectomy)</li>
                    <li>Anesthesia administration</li>
                    <li>Postoperative care and monitoring</li>
                    <li>Pain management</li>
                    <li>Complication management</li>
                    <li>Follow-up appointments</li>
                    <li>Referrals to specialists if needed</li>
                    </ul>
                    </div>

                    <div className='md:w-1/2 w-full mt-12'>
                        <div className='container bg-black hidden md:block'> 
                        <Image
                        src="/Images/treat5.jpg"
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
                            <a href="/Treatments/Sexually-Transmitted-Disease">
                            <Image
                                 src="/Images/Rectangle6.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                      
                            />
                            <p className="text-lg mt-4 text-purple-900  font-bold">Sexually Transmitted Disease</p></a>
                            </div>
                        </div>
                        <div className="bg-white-700 md:w-1/3 flex flex-col items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/Adolescent-Health">
                            <Image
                                src="/Images/Rectangle7.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                               
                            />
                            <p className="text-lg mt-4 text-purple-900  font-bold">Adolescent Health Counselling</p></a>
                            </div>
                        </div>
                        <div className="bg-white-700 md:w-1/3 flex flex-col items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/IVF-Speciality">
                            <Image
                                 src="/Images/Rectangle9.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                      
                            />
                            <p className="text-lg mt-4 text-purple-900 font-bold">IVF Speciality</p></a>
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