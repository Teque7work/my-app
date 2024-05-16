'use client';
import Image from 'next/image'
import Link from 'next/link'
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Insurance() {
    const defaultContent =
    "This is a surprisingly common question. The treatment of pain requires a dedication to the patient that surpasses that in many medical fields, that is because often patients do not get better with one injection or a single medication. At Kansas Pain management we are committed to sticking with you throughout your treatment with us. We believe a balanced approach is the only way to treat pain, and will do our best to help you regardless of the origin of your pain.";

    return(
        <div className="main-content">
            <div className="relative w-full">
                <div className="bg-[url('/Images/hospitalbanner2.jpg')] bg-cover bg-center min-h-96"></div>
                <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: '1', backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.1), #241B19 200%)', height: '100%' }}></div>

                <div className='container max-w-[1280px] mx-auto relative z-10'>
                    <p className='absolute bottom-20 text-white px-8 py-2 text-5xl'>Insurance</p>
                    <p className="absolute bottom-10 text-white px-8 py-2">
                        <Link href="/">Home</Link> &gt; <Link href="/Insurance">Insurance</Link>
                    </p>
                </div>
            </div>
            {/* main grid content */}
            <div className='container max-w-[1280px] mx-auto mt-12 md:mt-20 mb-24'>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mt-5 md:mr-0 mr-4 md:ml-0 ml-4">
                    <div className="box-border rounded-2xl h-auto p-4 border-2 flex justify-center items-center hover:shadow-md transition-all duration-300 relative">
                        <div>
                            <Image
                                src="/Images/insurance1.png"
                                width={350} 
                                height={200} 
                                alt="Insurance Company 1"
                            />
                        </div>
                    </div>
                    <div className="box-border rounded-2xl h-auto p-4 border-2 flex justify-center items-center hover:shadow-md transition-all duration-300 relative">
                        <div>
                            <Image
                                src="/Images/insurance2.png"
                                width={350} 
                                height={200} 
                                alt="Insurance Company 2"
                            />
                        </div>
                    </div>
                    <div className="box-border rounded-2xl h-auto p-4 border-2 flex justify-center items-center hover:shadow-md transition-all duration-300 relative">
                        <div>
                            <Image
                                src="/Images/insurance3.png"
                                width={350} 
                                height={200} 
                                alt="Insurance Company 3"
                            />
                        </div>
                    </div>
                    <div className="box-border rounded-2xl h-auto p-4 border-2 flex justify-center items-center hover:shadow-md transition-all duration-300 relative">
                        <div>
                            <Image
                                src="/Images/insurance4.png"
                                width={350} 
                                height={200} 
                                alt="Insurance Company 4"
                            />
                        </div>
                    </div>
                    <div className="box-border rounded-2xl h-auto p-4 border-2 flex justify-center items-center hover:shadow-md transition-all duration-300 relative">
                        <div>
                            <Image
                                src="/Images/insurance5.png"
                                width={350} 
                                height={200} 
                                alt="Insurance Company 5"
                            />
                        </div>
                    </div>
               
                    <div className="box-border rounded-2xl h-auto w-screen/5 p-4 border-2 flex flex-col justify-center items-center hover:shadow-md transition-all duration-300 relative">
                        <div>
                            <Image
                                src="/Images/insurance6.png"
                                width={350} 
                                height={200} 
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                    <div className="text-xl rounded-2xl box-border h-auto w-screen/5 p-4 border-2 flex flex-col justify-center items-center hover:shadow-md transition-all duration-300 relative">
                        <div>
                            <Image
                                src="/Images/universal sampoo.jpg"
                                width={350} 
                                height={200} 
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                    <div className="box-border rounded-2xl h-auto w-screen/5 p-4 border-2 flex flex-col justify-center items-center hover:shadow-md transition-all duration-300 relative">
                        <div>
                            <Image
                                src="/Images/megma.jpg"
                                width={350} 
                                height={200} 
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                    <div className="box-border rounded-2xl h-auto w-screen/5 p-4 border-2 flex flex-col justify-center items-center hover:shadow-md transition-all duration-300 relative">
                        <div>
                            <Image
                                src="/Images/aditya birla.jpg"
                                width={350} 
                                height={200} 
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                    <div className="box-border rounded-2xl h-auto w-screen/5 p-6 border-2 flex flex-col justify-center items-center hover:shadow-md transition-all duration-300 relative">
                        <div>
                            <Image
                                src="/Images/medi asist.jpg"
                                width={350} 
                                height={200} 
                                alt="Picture of the author"
                            />
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    )
}