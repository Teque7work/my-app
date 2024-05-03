import Link from "next/link";
import Image from "next/image";

const Footer = () =>{
    return(
        <div className="bg-[#27115f]">

            <div className="container mx-auto max-w-[1280px] flex justify-between items-center space-x-10 text-white  mb-16">
                <div className="w-1/2">
                    <Image className="ml-[-5px] mt-12" src="/Images/Asset 5.png" width={300} height={300} alt="Spandan Maternity Home" />
                    {/* <p className="w-52">Empowering Her Health. Every Step of the Way</p> */}
                </div>
                <div className="flex w-1/2 space-x-9 mt-[-120px]">
                    <div className="flex w-full items-center justify-center bg-pink-600 p-4 rounded ">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bg-pink-700 p-2 rounded-full w-12 h-12 mr-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                            </svg>
                        </span>
                        <div className="pl-4 pr-4">
                            <p className="text-sm">Give us a call</p>
                            <a href="tel:+919979232346">
                                <p>99792 32346</p>
                            </a>
                            <a href="tel:+917228862236">
                                <p>72288 62236</p>
                            </a>
                           
                        </div>
                    </div>

                    <div className="flex w-full items-center justify-center bg-pink-600  p-4 rounded">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="bg-pink-700 p-2 rounded-full w-12 h-12 mr-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>

                        </span>
                        <div>
                            <p className="text-sm">Send message</p>
                            <p><a href="mailto:spandanhospital@gmail.com">spandanhospital@gmail.com</a></p>
                            
                        </div>
                    </div>

                </div>
            </div>

           <div className="container mx-auto max-w-[1280px] flex justify-between space-x-10 mb-16 text-white">
                <div className="w-1/3">
                    <h3 className="text-[#ffffff80] text-xl font-bold mb-6">Treatments</h3>
                    <ul className="text-sm space-y-4">
                        <li><a href="/Treatments/Antenatal-Care">Antenatal Care & Postnatal Care</a></li>
                        <li><a href="/Treatments/Preconception-Counselling">Preconception Counselling</a></li>
                        <li><a href="/Treatments/Cancer-Screening">Cancer Screening, Diagnosis & Preventive Vaccination</a></li>
                        <li><a href="/Treatments/Menstrual-Issues">Menstrual Issues</a></li>
                        <li><a href="/Treatments/Uro">Uro - Gynecological Problems</a></li>
                        <li><a href="/Treatments/Sexually-Transmitted-Disease">Sexually Transmitted Disease</a></li>
                    </ul>
                </div>
                <div className="w-1/3">
                    <ul className="text-sm mt-12 space-y-4">
                        <li><a href="/Treatments/Infertility-Work-up">Infertility Work-up</a></li>
                        <li><a href="/Treatments/Family-Planning">Family Planning</a></li>
                        <li><a href="/Treatments/Laparoscopic">Laparoscopic & Hysteroscopic Surgeries</a></li>
                        <li><a href="/Treatments/Menopausal-Problems">Menopausal Problems</a></li>
                        <li><a href="/Treatments/Adolescent-Health">Adolescent Health Counselling</a></li>
                        <li><a href="/Treatments/IVF-Speciality">IVF Speciality</a></li>
                    </ul>
                </div>
                <div className="w-1/3">
                    <h3 className="text-[#ffffff80] text-xl font-bold mb-6">Our Location</h3>
                    {/* <h2 className="text-xl text-bold mb-4">Bhuj</h2> */}
                    <p className="leading-6 mt-[-5px] text-sm w-96">Shivam Nagar, Near Uma Nagar, Highway, Near Kutch Orthopadic Hospital, Mirjapar, Bhuj, Gujarat 370040</p>
                    <div className="flex mt-6 items-center">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-1">
                            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="text-base"> <Link href="https://maps.app.goo.gl/fYuXumSpGL1qU6gn8" target="_blank"> View Map </Link> </div>
                    </div>
                    <h3 className="text-[#ffffff80] text-xl font-bold mt-6 mb-[-20px]">Follow Us </h3>
                    <div className="flex mt-8 items-center space-x-6">
                   
                    <Link href="https://www.instagram.com/spandanmaternityhome">
                        <span>
                            <Image src="/SVG/facebook-app-symbol.svg" alt="Instagram" width={15} height={15} />
                        </span>
                    </Link>
                    <Link href="https://www.instagram.com/spandanmaternityhome/">
                    <span>
                            <Image src="/SVG/instagram-icon.svg" alt="Instagram" width={15} height={15} />
                    </span>
                    </Link>
                    <Link href="https://wa.me/7228862236">
                    <span> 
                        <Image src="/SVG/whatsapp-x-icon.svg" alt="Instagram" width={15} height={15} /> 
                        </span>
                    </Link>
                    </div>
                </div>
                
            </div>

            
            <div className="max-w-[1280px] mx-auto">
            <div className="border-t border-white"></div>
            </div>
            <div className="max-w-[1280px] mx-auto flex justify-between text-white pb-2 pt-2">
                <div>2024 © Spandan Maternity Home. All rights reserved. </div>
                <div className="flex items-center text-white">
                    <p className="mr-2">Proudly Powered By:</p>
                    <Link href="https://teque7.com/" passHref>
                        <Image src="/Images/T7 - White.png" width={70} height={70} alt="Teque7" />
                    
                    </Link>
                    </div>
            </div>
            
        </div>
    )
}

export default Footer;