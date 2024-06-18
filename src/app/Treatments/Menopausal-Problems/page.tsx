import Image from 'next/image'
import Link from 'next/link'
import '@/style/global.css';
import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Menopausal Problems',
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
                    <p className='absolute bottom-20 text-white px-8 py-2 md:text-5xl text-4xl'>Menopausal Problems</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                    <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>&gt; <Link href="/Treatments">Menopausal Problems</Link>
                </p>
                    
                </div>
            </div>
             <div className='container max-w-[1280px] mx-auto mt-8 md:mt-14 mb-14'>
            <p className='md:text-base text-base md:pl-0  pl-6 md:pr-0 pr-6 text-justify text-[#5C5C5C]'>
                Navigate the changes and challenges of menopause with confidence through the specialized care offered at Spandan Maternity Home. 
                Our experienced healthcare professionals understand the unique needs of women during this life transition and provide comprehensive 
                support and treatment for menopausal symptoms. Whether you are experiencing hot flashes, mood swings, or other issues, we offer 
                personalized solutions tailored to your individual needs. With compassionate expertise and state-of-the-art resources, we empower you 
                to embrace this new phase of life with vitality and comfort. Spandan provides the guidance and care you need to navigate menopause 
                with grace and confidence
                </p>
                <div className='flex flex-col flex-row-reverse md:flex-row'>
                <div className='md:w-1/2 w-full mt-12'>
                <div className='container bg-black md:hidden'> 
                        <Image
                        src="/Images/treat8.png"
                        width={640}
                        height={348}
                        alt="Picture of the author"
                    
                        />
                    </div>
                    <h1 className='text-base mb-3 font-bold md:pl-0 pl-4 md:mt-0 mt-8'>Services under Menopausal Problems</h1>
                    <ul className="list-disc text-base md:pl-6 pl-12 text-[#5C5C5C]">
                    <li>Symptom assessment</li>
                    <li>Hormonal testing</li>
                    <li>Bone density screening</li>
                    <li>Counseling on menopause management options</li>
                    <li>Hormone replacement therapy (HRT) consultation and management</li>
                    <li>Non-hormonal treatment options (e.g., lifestyle changes, herbal remedies)</li>
                    <li>Management of menopausal symptoms (hot flashes, vaginal dryness, etc.)</li>
                    <li>Screening and management of related health concerns (osteoporosis, cardiovascular risk)</li>
                    <li>Emotional support and counseling</li>
                    <li>Referrals to specialists if needed</li>
                    </ul>
                    </div>

                    <div className='w-1/2 mt-12 container bg-black'> 
                    <div className='container bg-black hidden md:block'>  
                        <Image
                        src="/Images/treat8.png"
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
                            <a href="/Treatments/Menstrual-Issues">
                            <Image
                                 src="/Images/Rectangle10.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                                
                            />
                            <p className="text-lg mt-4 text-purple-900  font-bold">Menstrual Issues</p></a>
                            </div>
                        </div>
                        <div className="bg-white-700 md:w-1/3 flex flex-col items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/Infertility-Work-up">
                            <Image
                               src="/Images/Rectangle11.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                               
                            />
                            <p className="text-lg mt-4 text-purple-900  font-bold">Infertility Work-up</p></a>
                            </div>
                        </div>
                        <div className="bg-white-700 md:w-1/3 flex flex-col items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/Uro">
                                <Image
                                    src="/Images/Rectangle3.png"
                                    width={500}
                                    height={200}
                                    alt="Picture of the author"
                                />
                                <p className="text-lg mt-4 text-purple-900  font-bold">Uro - Gynecological Problems</p></a>
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