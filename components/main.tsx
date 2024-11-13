import Link from "next/link";
import Image from "next/image";

import { service } from "@/lib/service";
import { process } from "@/lib/process";
import { project } from "@/lib/project";

import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";

import img1 from "@/public/img-1.svg"
import like from "@/public/like.svg"
import medal from "@/public/medal.svg"
import star from "@/public/star.svg"
import arrowlong from "@/public/arrowlong.svg"
import { testimonial } from "@/lib/testimoni";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

export default function Content() {
    const services = service
    const processes = process
    const projects = project
    const testimonials = testimonial

    return (
        <>
            <div className="w-11/12 mx-auto">
                <BackgroundBeamsWithCollision className="flex-col justify-items-center relative z-0 py-20 ">
                    <h1 className="font-medium text-[56px] text-center z-10">Elevate Your Business's Identity with<br />Our Branding Solutions.</h1>
                    <p className="text-[#717171] mt-8 text-center text-lg mb-10 z-10">We are an agency committed to developing your big idea into an outstanding digital product.<br />Look at us, meet us, and collaborate with us now. </p>
                    <Link href={""} className="text-black bg-[#65C8C1] font-medium text-lg px-8 py-3 rounded-full z-50 relative">Contact Us</Link>
                </BackgroundBeamsWithCollision>

                {/* <div className="w-full h-[500px] bg-[url('/img.png')] mb-16 rounded-[30px] bg-no-repeat bg-cover relative z-0">
                </div> */}
            </div>



            <div className="px-10">
                <div className="bg-[#171717] mb-24 rounded-[30px] bg-[url('/element1.svg')] bg-no-repeat bg-cover">
                    <div className="py-14 px-12">
                        <h1 className="text-white text-4xl flex justify-center font-medium mb-20">Take a Look at Our Best Service</h1>
                        <div className="flex gap-x-20 items-center">
                            <div className="w-1/2">
                                <Image src={img1} width={1000} alt=""></Image>
                            </div>
                            <div className="w-1/2">
                                {
                                    services.map((service: any) => (
                                        <div key={service.id} className="flex mb-12">
                                            <p className="text-[#65C8C1] text-2xl font-medium me-6">{service.number}</p>
                                            <div>
                                                <h1 className="text-white text-3xl font-medium mb-6">{service.title}</h1>
                                                <p className="text-white text-lg">
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

            <div className="w-11/12 mx-auto mb-24">
                <h1 className="font-medium text-[40px] flex justify-center mb-12">Why They Choose Us</h1>
                <div className="grid grid-cols-3 gap-6">
                    <div className="bg-[#F6F7F9] rounded-[30px] flex-col flex items-center py-10 px-20">
                        <Image src={medal} width={70} alt="" className="bg-black rounded-full py-5 px-5 mb-8"></Image>
                        <h1 className="text-3xl font-medium mb-5">Give the best</h1>
                        <p className="text-[#717171] text-center text-lg">Every single creation we offer is meticulously customized to flawlessly align with your brand, target audience, and objectives—without a single exception.</p>
                    </div>

                    <div className="bg-[#F6F7F9] rounded-[30px] flex-col flex items-center py-10 px-20">
                        <Image src={like} width={70} alt="" className="bg-black rounded-full py-5 px-5 mb-8"></Image>
                        <h1 className="text-3xl font-medium mb-5">Commitment</h1>
                        <p className="text-[#717171] text-center text-lg">Our unwavering commitment to crafting solutions that resonate with your unique identity, engage your specific audience, and drive your distinct goals.</p>
                    </div>

                    <div className="bg-[#F6F7F9] rounded-[30px] flex-col flex items-center py-10 px-20">
                        <Image src={star} width={70} alt="" className="bg-black rounded-full py-5 px-5 mb-8"></Image>
                        <h1 className="text-3xl font-medium mb-5">Innovation</h1>
                        <p className="text-[#717171] text-center text-lg">We stay abreast of the latest industry trends and technologies, allowing us to integrate cutting-edge features and functionalities into your website.</p>
                    </div>
                </div>
            </div>

            <div className="w-11/12 mx-auto">
                <div className="flex flex-col items-center mb-16">
                    <h1 className="font-medium text-[40px] flex justify-center mb-8">How We Process Your Big Idea</h1>
                    <p className="text-[#717171] text-center text-lg">Our team will always be willing to hear the big ideas of clients and make it happen with <br />extraordinary solutions according to our clients' wishes.</p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    {
                        processes.map((process: any) => (
                            <div key={process.id} className="flex flex-col h-full">
                                <div className="bg-black py-10 px-14 rounded-[30px] flex-1 hover:bg-[#65C8C1] group">
                                    <p className="text-white text-[40px] font-medium mb-2 group-hover:text-black">{process.number}</p>
                                    <h1 className="font-medium text-2xl text-white mb-6 group-hover:text-black">{process.title}</h1>
                                    <p className="text-white text-lg group-hover:text-black">{process.desc}</p>
                                </div>

                            </div>
                        ))
                    }
                    <div className="col-span-2 bg-[url('/img.png')] bg-no-repeat bg-cover rounded-[30px]">
                    </div>
                </div>
            </div>

            <div className="px-10 mt-24">
                <div className="bg-[#171717] mb-24 rounded-[30px] bg-[url('/element1.svg')] bg-no-repeat bg-cover">
                    <div className="py-14 px-20">
                        <h1 className="text-white text-4xl flex justify-center font-medium mb-20">See Our Professional Project</h1>
                        <div className="grid grid-cols-3 gap-6">
                            {
                                projects.map((project: any) => (
                                    <div key={project.id} className="flex flex-col h-full">
                                        <div className="bg-[#262626] py-8 px-8 rounded-[30px] flex-1">
                                            <Image
                                                src={project.src}
                                                alt={`job ${project.id}`}
                                                width={0}
                                                height={0}
                                                className="mb-4 rounded-lg"
                                            />
                                            <p className="text-white text-2xl font-medium mb-2">{project.title}</p>
                                            <p className="mb-1 text-md text-[#888888]">{project.country}</p>
                                            <Link href={""} className="text-[#65C8C1] text-lg">Visit site</Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="flex justify-center mt-12">
                            <div className="flex items-center border-2 rounded-full py-2 px-6 border-[#65C8C1]">
                                <Link href={""} className="text-lg text-[#65C8C1] flex">See More <Image src={arrowlong} alt="" className="ms-3" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-11/12 mx-auto">
                <div className="flex flex-col items-center mb-16">
                    <h1 className="font-medium text-[40px] flex justify-center mb-8">What Our Customers Say About Us</h1>
                    <p className="text-[#717171] text-center text-lg">The following are testimonials and direct reviews from clients who have collaborated with <br /> us. Come collaborate with us now.</p>
                </div>
                <AnimatedTestimonials testimonials={testimonials} />
            </div>
        </>
    );
}