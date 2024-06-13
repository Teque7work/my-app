'use client';

import Link from "next/link";
import Image from "next/image";

import { Fragment, useState, useEffect  } from 'react';
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import About from "../About/page";


const AboutDropdown: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const closeMenu = () => {
    setIsHovered(false);
    // Add any additional close logic if needed
  };

  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button
            className="focus:outline-none cursor-pointer flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/About" className="text-purple-900" onClick={closeMenu}><span>About</span></Link>
            <ChevronDownIcon className="md:w-4 md:ml-1 w-16 h-5 ml-[-10px] " onClick={closeMenu}/>
          </Popover.Button>

          <Transition
            show={open || isHovered}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel static
              className="absolute mt-[35px] space-y-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="overflow-hidden rounded-lg rounded-t-none border-t-4 border-pink-500 shadow-lg ring-1 ring-black ring-opacity-5">
                {/* Popover Content */}
                <div className="p-4 bg-white text-black ">
                  <ul className="space-y-4 text-base">
                  <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/About" className="text-purple-900" onClick={closeMenu}>
                        Dr. Surabhi Vegad
                      </Link>
                    </li>
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300 ">
                      <Link href="/MeetTeam" className="text-purple-900" onClick={closeMenu}>
                        Meet Our Team
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};


const TreatmentDropdown: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const closeMenu = () => {
    setIsHovered(false);
    // Add any additional close logic if needed
  };

  return (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button
            className="focus:outline-none cursor-pointer flex items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/Treatments" className="text-purple-900" onClick={closeMenu}><span>Treatments</span></Link>
            <ChevronDownIcon className="md:w-4 md:ml-1 w-16 h-5 ml-[-10px] " onClick={closeMenu}/>
          </Popover.Button>

          <Transition
            show={open || isHovered}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel static
              className="absolute mt-[35px] space-y-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="overflow-hidden rounded-lg rounded-t-none border-t-4 border-pink-500 shadow-lg ring-1 md:mr-0 mr-4 ring-black ring-opacity-5">
                {/* Popover Content */}
                <div className="flex px-2 py-3 bg-white text-black">
                {/* First part */}
                <div className="w-1/2">
                  <ul className="space-y-2 text-base">
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/Antenatal-Care" className="text-purple-900" onClick={closeMenu}>
                      Antenatal Care & Postnatal Care
                      </Link>
                    </li>
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/Preconception-Counselling" className="text-purple-900" onClick={closeMenu}>
                      Preconception Counselling
                      </Link>
                    </li>
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/Cancer-Screening" className="text-purple-900" onClick={closeMenu}>
                      Cancer Screening
                      </Link>
                    </li>
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/Menstrual-Issues" className="text-purple-900" onClick={closeMenu}>
                      Menstrual Issues
                      </Link>
                    </li>
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/Uro" className="text-purple-900" onClick={closeMenu}>
                      Uro - Gynecological Problems
                      </Link>
                    </li>
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/Sexually-Transmitted-Disease" className="text-purple-900" onClick={closeMenu}>
                      Sexually Transmitted Disease
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* Second part */}
                <div className="w-1/2">
                  <ul className="space-y-2 text-base">
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/Infertility-Work-up" className="text-purple-900" onClick={closeMenu}>
                      Infertility Work-up
                      </Link>
                    </li>
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/Family-Planning" className="text-purple-900" onClick={closeMenu}>
                      Family Planning
                      </Link>
                    </li>
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/Laparoscopic" className="text-purple-900" onClick={closeMenu}>
                      Laparoscopic & Hysteroscopic Surgeries
                      </Link>
                    </li>
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/Menopausal-Problems" className="text-purple-900" onClick={closeMenu}>
                      Menopausal Problems
                      </Link>
                    </li>
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/Adolescent-Health" className="text-purple-900" onClick={closeMenu}>
                      Adolescent Health Counselling
                      </Link>
                    </li>
                    <li className="hover:text-pink-600 hover:bg-gray-100 hover:font-semibold rounded-full px-3 py-2 hover:transition hover:duration-300">
                      <Link href="/Treatments/IVF-Speciality" className="text-purple-900" onClick={closeMenu}>
                      IVF Speciality
                      </Link>
                    </li>

                  </ul>
                </div>
              </div>

              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed w-full md:top-4 md:z-50 z-50 transition duration-300 ease-in-out">
    <nav className="md:p-0 top-0">
      <div className="max-w-[1280px] mx-auto px-5 py-3 md:rounded-2xl shadow-2xl bg-white">
        <div className="flex justify-between items-center">
          <div className="text-pink-500 z-10">
            <Link href="/">
                <Image src="/SVG/Spandan-Logo-Text-Side.svg" alt="Spandan Maternity123" className="md:block hidden" width={250} height={64} />
              </Link>
              <Link href="/">
                <Image src="/SVG/Spandan-Logo-Text-Side.svg" alt="Spandan Maternity123" className="md:hidden block" width={200} height={64} />
              </Link>
            </div>
            <div className="flex text-black z-10">
              <div className="md:hidden text-pink-500 cursor-pointer" onClick={toggleMenu}>
              <Image src="/Images/Spandan Button.svg" alt="" width={25} height={25} />
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 9h16.5m-16.5 6.75h16.5"}
                  />
                </svg> */}
              </div>
              <ul className={`fixed md:items-center md:pt-4 pt-16 w-full p-0 m-0 list-none top-0 bottom-0 left-0 w-full bg-[#E2F6F4] md:pl-0 pl-0 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'} md:p-4 p-0 md:space-y-0 text-left sm:flex sm:justify-center sm:space-y-0 sm:space-x-10 sm:relative sm:bg-transparent sm:transform-none sm:flex-row`}>
                <li className="sm:hidden absolute top-4 right-4">
                  <div className="text-pink-500 cursor-pointer" onClick={closeMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </li>
                <li className="border-2 md:border-none md:p-0 p-4 block md:hidden border-y-0 md:mt-0 mt-8 border-b-2">
                  <Link href="/" className="text-purple-900 text-xl" onClick={closeMenu}>
                  <p>Home</p>
                  </Link>
                </li>
                <li className="text-purple-900 text-xl border-1 border-b-2 md:border-none md:p-0 p-4" onClick={closeMenu}>
                <AboutDropdown/>
              </li>
                <li className="text-purple-900 text-xl border-1 md:border-none md:p-0 p-4" onClick={closeMenu}>
                <TreatmentDropdown />
              </li>
                 <li className="border-2 md:border-none md:p-0 p-4 ">
                  <Link href="/Facilities" className="text-purple-900 text-xl"  onClick={closeMenu}>
                    Facilities
                  </Link>
                </li>
                <li className="border-2 md:border-none md:p-0 p-4 border-y-0">
                  <Link href="/Insurance" className="text-purple-900 text-xl" onClick={closeMenu}>
                    Insurance
                  </Link>
                </li>
                <li className="border-2 md:border-none md:p-0 p-4">
                  <Link href="/Contact" className="text-purple-900 text-xl" onClick={closeMenu}>
                    Contact
                  </Link>
                </li>
                 <li className="border-2 md:border-none md:p-0 p-4 border-y-0 border-b-2">
                  <Link href="/Ivfcenter" className="text-purple-900" onClick={closeMenu}>
                    <button className="mt-0 md:pt-2 md:pb-2 md:pl-4 pl-0 pr-4 rounded-3xl md:text-white md:bg-pink-500 text-purple-900 flex items-center md:text-lg text-xl">
                      IVF Center
                    </button>
                  </Link>
                </li>
                <li className="md:hidden block">
                <div className=" md:hidden block flex justify-center md:mt-0 mt-20">
                  <Image src="/Images/headet-img.svg" width={120} height={120} alt="Description of SVG" />
                
                </div>
                </li>
              </ul>
              
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
