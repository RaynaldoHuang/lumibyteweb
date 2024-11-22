import Link from "next/link";
import Image from "next/image";

import logo from "@/public/svgs/logo.svg"

export default function Footer() {
    return (
        <>
            <div className="w-11/12 mx-auto bg-[#171717] lg:pt-16 pt-8 pb-10 lg:mt-24 mt-10 rounded-[30px] mb-10">
                <div className="flex flex-col items-center">
                    <h1 className="text-white lg:text-[56px] text-xl">Start Collaborating with Us</h1>
                    <div className="hidden lg:block">
                        <p className="text-[#B8B8B8] mt-8 text-center text-lg">
                            Contact us and let's discuss your mobile app and website development needs.<br />We're ready to assist and can start your project right away.
                        </p>
                    </div>

                    <div className="lg:hidden">
                        <p className="text-[#B8B8B8] mt-4 text-center text-xs px-5">
                            Contact us and let's discuss your mobile app and website development needs.
                        </p>
                    </div>

                    <div className="flex lg:mt-10 mt-8 lg:gap-8 gap-4">
                        <div className="flex border-2 rounded-full py-2 px-9 border-[#65C8C1] gap-3">
                            <Link href={"https://mail.google.com/mail/u/0/?pli=1#inbox?compose=jrjtXLDgQSBkxvtgZbLZFqbVBTPHVVCmTRkSMKdFlvmswLrRntgnpqKPvhHsTnNKVbfjVXNw"} className="lg:text-lg text-sm text-[#65C8C1]">Email</Link>
                        </div>
                        <div className="flex border-2 rounded-full py-2 px-9 border-[#65C8C1] items-center gap-3">
                            <Link href={"https://wa.me/6285928953264"} className="lg:text-lg text-sm text-[#65C8C1]">WhatsApp</Link>
                        </div>
                    </div>

                    <div className="w-full lg:px-10 px-8 lg:my-16 my-8">
                        <hr className="border-1 border-white" />
                    </div>
                </div>

                <div id="contact" className="lg:grid lg:grid-cols-2 lg:gap-2 px-10">
                    <div>
                        <div className="hidden lg:block">
                            <Image src={logo} width={180} alt="" />
                        </div>

                        <div className="lg:hidden">
                            <Image src={logo} width={120} alt="" />
                        </div>

                        <p className="text-[#B8B8B8] lg:text-lg text-xs lg:mt-5 mt-3 mb-10 lg:mb-0 lg:w-1/2">Emerald Garden Residential No.B5, <br />JL.Yos Surdarso, Medan Barat, Medan City, North Sumatra 20234</p>
                    </div>

                    <div className="flex lg:grid lg:grid-cols-3 lg:gap-12 gap-8 lg:px-10">
                        <div>
                            <h1 className="text-white font-medium lg:text-2xl text-sm">Menu</h1>
                            <div className="flex flex-col lg:mt-6 mt-3 gap-y-2">
                                <Link href={""} className="text-[#B8B8B8] lg:text-lg text-xs  hover:text-[#65C8C1]">Home</Link>
                                <Link href={"#services"} className="text-[#B8B8B8] lg:text-lg text-xs hover:text-[#65C8C1]">Services</Link>
                                <Link href={"#project"} className="text-[#B8B8B8] lg:text-lg text-xs hover:text-[#65C8C1]">Project</Link>
                                <Link href={""} className="text-[#B8B8B8] lg:text-lg text-xs hover:text-[#65C8C1]">About Us</Link>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-white font-medium lg:text-2xl text-sm">Services</h1>
                            <div className="flex flex-col lg:mt-6 mt-3 gap-y-2">
                                <Link href={"#services"} className="text-[#B8B8B8] lg:text-lg text-xs hover:text-[#65C8C1]">UI / UX Web and Mobile Design</Link>
                                <Link href={"#services"} className="text-[#B8B8B8] lg:text-lg text-xs hover:text-[#65C8C1]">Mobile Development</Link>
                                <Link href={"#services"} className="text-[#B8B8B8] lg:text-lg text-xs hover:text-[#65C8C1]">Landing Page</Link>
                                <Link href={"#services"} className="text-[#B8B8B8] lg:text-lg text-xs hover:text-[#65C8C1]">Website Application</Link>
                                <Link href={"#services"} className="text-[#B8B8B8] lg:text-lg text-xs hover:text-[#65C8C1]">Tech Workshop</Link>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-white font-medium lg:text-2xl text-sm">Social Media</h1>
                            <div className="flex lg:mt-6 mt-3 gap-y-2 items-center gap-x-3">
                                <Link href={"https://www.instagram.com/lumibyte.id/"} className="text-[#B8B8B8] lg:text-lg text-xs hover:text-[#65C8C1]">Instagram</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-white flex justify-center lg:text-base text-xs lg:mt-12 mt-8">Copyright 2024 ©Lumibyte Company</p>
                </div>
            </div>
        </>
    );
}