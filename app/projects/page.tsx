"use client"

import Image from "next/image";
import Link from "next/link";

import { project } from "@/lib/project";
import Whatsapp from "@/components/whatsapp";

export default function Projects() {
    const projects = project

    return (
        <>
            <div className="lg:px-10 lg:mt-4">
                <div className="lg:mb-24 rounded-[30px]">
                    <div className="lg:py-14 lg:px-28 px-4 py-8">
                        <h1 className="text-[#171717] lg:text-4xl text-lg flex justify-center font-medium mb-2">See Our Professional Project</h1>
                        <p className="text-[#717171] text-center lg:text-lg lg:mb-16 mb-10">
                            Dive into the making of these individual products.
                        </p>
                        <div className="lg:grid lg:grid-cols-3 lg:gap-6 grid grid-cols-2 gap-2">
                            {
                                projects.map((project: any) => (
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
                                            <Link href={""} className="text-[#65C8C1] lg:text-lg text-sm">Visit site</Link>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <Whatsapp />
            </div>
        </>
    )
}