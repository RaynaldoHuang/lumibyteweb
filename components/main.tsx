"use client"

import Link from "next/link";
import Image from "next/image";

import { service } from "@/lib/services";
import { process } from "@/lib/processes";
import { project } from "@/lib/projects";
import { brand } from "@/lib/brands";
import { testimonial } from "@/lib/testimony";

import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

import img1 from "@/public/svgs/img-1.svg"
import like from "@/public/svgs/like.svg"
import medal from "@/public/svgs/medal.svg"
import star from "@/public/svgs/star.svg"
import arrowlong from "@/public/svgs/arrowlong.svg"
import Whatsapp from "./whatsapp";

export default function Content() {
    const services = service
    const processes = process
    const projects = project
    const testimonials = testimonial
    const brands = brand

    return (
        <>
            <div className="w-11/12 mx-auto">
                <BackgroundBeamsWithCollision className="flex-col justify-items-center relative z-0 lg:py-20 py-10">
                    <div className="hidden lg:block">
                        <h1 className="font-medium text-[56px] text-center z-10">Elevate Your Business's Identity with<br />Our Branding Solutions.</h1>
                    </div>
                    <div className="lg:hidden">
                        <h1 className="font-medium text-2xl text-center z-10">Elevate Your Business's Identity with Our Branding Solutions.</h1>
                    </div>

                    <div className="hidden lg:block">
                        <p className="text-[#717171] mt-8 text-center text-lg mb-10 z-10">We are an agency committed to developing your big idea into an outstanding digital product.<br />Look at us, meet us, and collaborate with us now. </p>
                    </div>

                    <div className="lg:hidden">
                        <p className="text-[#717171] mt-4 text-center text-xs lg:mb-10 mb-6 z-10">We are an agency committed to developing your <br /> big idea into an outstanding digital product.</p>
                    </div>

                    <Link href={"https://wa.me/6285928953264"} className="text-black bg-[#65C8C1] font-medium lg:text-lg lg:px-8 px-6 lg:py-2 py-2 rounded-full z-50 relative">Contact Us</Link>
                </BackgroundBeamsWithCollision>
            </div>

            <div id="services" className="lg:px-10 px-4">
                <div className="bg-[#171717] lg:mb-24 mb-14 rounded-[30px] bg-[url('/element1.svg')] bg-no-repeat bg-cover">
                    <div className="lg:py-14 py-8 lg:px-12 px-5">
                        <h1 className="text-white lg:text-4xl text-lg flex justify-center font-medium lg:mb-20 mb-8">Take a Look at Our Best Service</h1>
                        <div className="lg:flex gap-x-20 items-center">
                            <div className="lg:w-1/2 mb-10 lg:mb-0">
                                <Image src={img1} width={1000} alt=""></Image>
                            </div>
                            <div className="lg:w-1/2">
                                {
                                    services.map((service: any) => (
                                        <div key={service.id} className="flex lg:mb-12 mb-4">
                                            <p className="text-[#65C8C1] lg:text-2xl text-base font-medium lg:me-6 me-4">{service.number}</p>
                                            <div>
                                                <h1 className="text-white lg:text-3xl text-lg font-medium lg:mb-6 me-4 mb-3">{service.title}</h1>
                                                <p className="text-white lg:text-lg text-sm">
                                                    {service.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:w-11/12 lg:mx-auto lg:px-0 px-6 lg:mb-24 mb-16">
                <h1 className="font-medium lg:text-[40px] text-xl flex justify-center lg:mb-12 mb-8">Why They Choose Us</h1>
                <div className="lg:grid lg:grid-cols-3 lg:gap-6">
                    <div className="bg-[#F6F7F9] rounded-[30px] flex-col flex items-center py-10 lg:px-20 px-6 mb-4">
                        <Image src={medal} width={70} alt="" className="bg-black rounded-full py-5 px-5 mb-8"></Image>
                        <h1 className="lg:text-3xl text-2xl font-medium mb-5">Give the best</h1>
                        <p className="text-[#717171] text-center lg:text-lg text-sm">Every single creation we offer is meticulously customized to flawlessly align with your brand, target audience, and objectives without a single exception.</p>
                    </div>

                    <div className="bg-[#F6F7F9] rounded-[30px] flex-col flex items-center py-10 lg:px-20 px-6 mb-4">
                        <Image src={like} width={70} alt="" className="bg-black rounded-full py-5 px-5 mb-8"></Image>
                        <h1 className="lg:text-3xl text-2xl font-medium mb-5">Commitment</h1>
                        <p className="text-[#717171] text-center lg:text-lg text-sm">Our unwavering commitment to crafting solutions that resonate with your unique identity, engage your specific audience, and drive your distinct goals.</p>
                    </div>

                    <div className="bg-[#F6F7F9] rounded-[30px] flex-col flex items-center py-10 lg:px-20 px-6">
                        <Image src={star} width={70} alt="" className="bg-black rounded-full py-5 px-5 mb-8"></Image>
                        <h1 className="lg:text-3xl text-2xl font-medium mb-5">Innovation</h1>
                        <p className="text-[#717171] text-center lg:text-lg text-sm">We stay abreast of the latest industry trends and technologies, allowing us to integrate cutting-edge features and functionalities into your website.</p>
                    </div>
                </div>
            </div>

            <div className="lg:w-11/12 lg:mx-auto lg:px-0 px-6 lg:mb-24 mb-16">
                <div className="flex flex-col items-center lg:mb-16 mb-8">
                    <h1 className="font-medium lg:text-[40px] text-xl flex justify-center mb-4">How We Process Your Big Idea</h1>
                    <div className="hidden lg:block">
                        <p className="text-[#717171] text-center text-lg">Our team will always be willing to hear the big ideas of clients and make it happen with <br />extraordinary solutions according to our clients' wishes.</p>
                    </div>

                    <div className="lg:hidden px-4">
                        <p className="text-[#717171] text-center text-xs">Our team will always be willing to hear the big ideas of clients and make it happen with extraordinary solutions.</p>
                    </div>
                </div>

                <div className="lg:grid grid-cols-3 gap-6">
                    {
                        processes.map((process: any) => (
                            <div key={process.id} className="flex flex-col h-full mb-2 lg:mb-0">
                                <div className="bg-[#171717] lg:py-10 lg:px-14 py-8 px-8 rounded-[30px] flex-1 hover:bg-[#65C8C1] group hover:cursor-pointer">
                                    <p className="text-white lg:text-[40px] text-base font-medium lg:mb-6 mb-2 group-hover:text-black">{process.number}</p>
                                    <h1 className="font-medium lg:text-2xl text-base text-white lg:mb-6 mb-4 group-hover:text-black text">{process.title}</h1>
                                    <p className="text-white lg:text-lg text-xs group-hover:text-black text">{process.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                    <div className="hidden lg:block col-span-2 bg-[url('/img.png')] bg-no-repeat bg-cover rounded-[30px]">
                    </div>
                </div>
            </div>

            <div id="project" className="lg:px-10 px-4 lg:mt-24">
                <div className="bg-[#171717] lg:mb-24 mb-14 rounded-[30px] bg-[url('/element1.svg')] bg-no-repeat bg-cover">
                    <div className="lg:py-14 lg:px-28 px-4 py-8">
                        <h1 className="text-white lg:text-4xl text-lg flex justify-center font-medium lg:mb-20 mb-8">See Our Professional Project</h1>
                        <div className="lg:grid lg:grid-cols-3 lg:gap-6 grid grid-cols-2 gap-4">
                            {
                                projects.slice(0,6).map((project: any) => (
                                    <div key={project.id} className="flex flex-col h-full">
                                        <div className="bg-[#262626] lg:py-8 lg:px-8 py-4 px-3 lg:rounded-[30px] rounded-[20px] flex-1">
                                            <Image
                                                src={project.src}
                                                alt={`job ${project.id}`}
                                                width={0}
                                                height={0}
                                                className="mb-4 rounded-lg"
                                            />
                                            <p className="text-white lg:text-2xl text-sm font-medium mb-2">{project.title}</p>
                                            <p className="mb-1 lg:text-lg text-xs text-[#888888]">{project.country}</p>
                                            <Link href={project.link} className="text-[#65C8C1] lg:text-lg text-sm">Visit site</Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex justify-center lg:mt-12 mt-10">
                            <div className="flex items-center border-2 rounded-full py-2 px-6 border-[#65C8C1]">
                                <Link href={"/projects"} className="lg:text-lg text-sm text-[#65C8C1] flex">See More <Image src={arrowlong} alt="" className="ms-3" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-11/12 mx-auto">
                <div className="flex flex-col items-center lg:mb-16 mb-10">
                    <h1 className="font-medium lg:text-[40px] text-xl flex justify-center mb-4">What Our Customers Say About Us</h1>
                    <div className="hidden lg:block">
                        <p className="text-[#717171] text-center text-lg">The following are testimonials and direct reviews from clients who have collaborated with <br /> us. Come collaborate with us now.</p>
                    </div>
                    <div className="lg:hidden px-4">
                        <p className="text-[#717171] text-center text-xs">The following are testimonials and direct reviews from clients who have collaborated with us.</p>
                    </div>
                </div>
                <AnimatedTestimonials testimonials={testimonials} />
            </div>

            <div className="w-11/12 mx-auto lg:mt-20">
                <h1 className="font-medium lg:text-xl text-lg flex justify-center">Trusted by</h1>

                <div className="overflow-hidden flex items-center lg:mt-10 mt-4">
                    <div
                        className="flex lg:space-x-20 space-x-16 items-center lg:py-4 py-2 animate-scroll scroll-wrapper"
                        style={{
                            display: 'flex',
                            whiteSpace: 'nowrap',
                            width: 'calc(100% * 3)'
                        }}
                    >
                        {[...brands, ...brands, ...brands].map((logo, index) => (
                            <div key={index} className="flex-shrink-0 hover:scale-105 transition-transform duration-300">
                                <Image
                                    src={logo.src}
                                    alt={`Logo ${logo.id}`}
                                    height={0}
                                    className="grayscale hover:grayscale-0 transition-all duration-300 lg:w-[150px] w-[80px]"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Whatsapp />

            <style jsx>
                {`
                    @keyframes scroll {
                        0% {
                            transform: translateX(0);
                        }
                        100% {
                            transform: translateX(-100%);
                        }
                    }

                    .animate-scroll {
                            animation: scroll 30s linear infinite;
                    }              
               `}
            </style>
        </>
    );
}