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
                    <p className='absolute bottom-20 text-white px-8 py-2 text-6xl'>Menopausal Problems</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                    <Link href="/">Home</Link> &gt; <Link href="/Treatments">Treatments</Link>&gt; <Link href="/Treatments">Menopausal Problems</Link>
                </p>
                    
                </div>
            </div>
            <div className='container max-w-[1280px] mx-auto mt-14 mb-14'>
                
                <p className='text-base text-justify text-[#5C5C5C]'>
                Navigate the changes and challenges of menopause with confidence through the specialized care offered at Spandan Maternity Home. 
                Our experienced healthcare professionals understand the unique needs of women during this life transition and provide comprehensive 
                support and treatment for menopausal symptoms. Whether you're experiencing hot flashes, mood swings, or other issues, we offer 
                personalized solutions tailored to your individual needs. With compassionate expertise and state-of-the-art resources, we empower you 
                to embrace this new phase of life with vitality and comfort. Spandan provides the guidance and care you need to navigate menopause 
                with grace and confidence
                </p>
                <div className='flex'>
                <div className='w-1/2 mt-12'>
                    <h1 className='text-base mb-3 font-bold'>Services under Menopausal Problems</h1>
                    <ul className="list-disc text-base pl-6 text-[#5C5C5C]">
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

                    <div className='w-1/2 mt-12 container max-w-[500px] max-h-[500px]'> 
                        <Image
                        src="/images/treat8.jpg"
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
                            <a href="/Treatments/Menstrual-Issues">
                            <Image
                                 src="/images/Rectangle10.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                                
                            />
                            <p className="text-xl mt-4 text-purple-900  pl-6 font-bold">Menstrual Issues</p></a>
                            </div>
                        </div>
                        <div className="w-1/3 bg-white-700 flex flex-col items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/Infertility-Work-up">
                            <Image
                               src="/images/Rectangle11.png"
                                width={500}
                                height={200}
                                alt="Picture of the author"
                               
                            />
                            <p className="text-xl mt-4 text-purple-900  pl-6 font-bold">Infertility Work-up</p></a>
                            </div>
                        </div>
                        <div className="w-1/3 bg-white-700 flex flex-col  items-center shadow-xl">
                            <div className="flex flex-col items-left pb-8">
                            <a href="/Treatments/Uro">
                                <Image
                                    src="/images/Rectangle3.png"
                                    width={500}
                                    height={200}
                                    alt="Picture of the author"
                                />
                                <p className="text-xl mt-4 text-purple-900  pl-6 font-bold">Uro - Gynecological Problems</p></a>
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