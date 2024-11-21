"use client"

import logo from "@/public/logo.svg"

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";


export default function Navigationbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <>
            <div className="lg:w-11/12 lg:mx-auto lg:px-0 px-6">
                {/* dektop view */}
                <div className="hidden lg:block">
                    <div className="flex bg-[#171717] py-4 mt-8 rounded-full items-center justify-between bg-[url('/element.svg')]">
                        <Link href={"/"}><Image src={logo} alt="" width={150} className="ms-10"></Image></Link>
                        <div>
                            <Link href={"/"} className="text-white pe-16 text-lg">Home</Link>
                            <Link href={"/projects"} className="text-white pe-16 text-lg">Project</Link>
                            <Link href={"/aboutus"} className="text-white pe-16 text-lg">About Us</Link>
                            <Link href={"#contact"} className="text-white pe-16 text-lg">Contact</Link>
                        </div>
                        {/* <Link href={""} className="text-black bg-[#65C8C1] font-medium text-lg px-8 py-2 rounded-full me-5">Login</Link> */}
                    </div>
                </div>

                {/* mobile view */}
                <div className="lg:hidden">
                    <div className="bg-[#171717] py-2 mt-8 rounded-full relative flex justify-between items-center pe-3 ps-4 bg-[url('/element.svg')]">
                        <Link href={"/"}><Image src={logo} alt="" width={100} className="ms-2" /></Link>

                        {/* Hamburger button */}
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="inline-flex items-center justify-center p-2 text-white bg-[#333333] rounded-full"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen ? "true" : "false"}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile menu */}
                    <div className={`${isOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
                        <div className="space-y-1 px-6 py-5 bg-[#171717] rounded-[30px] overflow-hidden">
                            <Link
                                href="/"
                                className="text-gray-300 hover:bg-[#65C8C1] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Home
                            </Link>
                            <Link
                                href="/projects"
                                className="text-gray-300 hover:bg-[#65C8C1] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Project
                            </Link>
                            <Link
                                href="/aboutus"
                                className="text-gray-300 hover:bg-[#65C8C1] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                About Us
                            </Link>
                            <Link
                                href="#contact"
                                className="text-gray-300 hover:bg-[#65C8C1] hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}