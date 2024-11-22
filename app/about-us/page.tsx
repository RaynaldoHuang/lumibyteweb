"use client"

import { team } from "@/lib/teams";

import Link from "next/link";
import Image from "next/image";
import Whatsapp from "@/components/whatsapp";

export default function AboutUs() {
    const teams = team

    return (
        <>
            <div className="w-11/12 mx-auto">
                <div className="lg:mt-20 mt-10 lg:mb-10 mb-8">
                    <div className="hidden lg:block">
                        <h1 className="font-medium text-[56px] text-center z-10 mb-4">Collaborate Your Business <br />With Lumibyte</h1>
                    </div>

                    <div className="lg:hidden">
                        <h1 className="font-medium text-2xl text-center z-10 mb-4">Collaborate Your Business <br />With Lumibyte</h1>
                    </div>

                    <div className="hidden lg:block">
                        <p className="text-[#717171] text-center lg:text-lg text-sm">Our company is technology company that builds coversational<br /> infrastructure for brands and entrepreneurs.</p>
                    </div>

                    <div className="lg:hidden">
                        <p className="text-[#717171] text-center lg:text-lg text-sm">Our company is technology company that builds coversational infrastructure.</p>
                    </div>
                </div>

                <div className="flex lg:gap-8 gap-4 justify-center">
                    <Link href={"https://mail.google.com/mail/u/0/?pli=1#inbox?compose=jrjtXLDgQSBkxvtgZbLZFqbVBTPHVVCmTRkSMKdFlvmswLrRntgnpqKPvhHsTnNKVbfjVXNw"} className="lg:text-lg text-sm text-black rounded-full py-2 px-9 bg-[#65C8C1] font-medium">Email</Link>
                    <Link href={"https://wa.me/6285928953264"} className="font-medium lg:text-lg text-sm bg-[#65C8C1] bg-[#65C8C1] rounded-full py-2 px-9 text-black">WhatsApp</Link>
                </div>

                <div className="lg:mt-20 mt-12">
                    <div className="bg-[#171717] rounded-[30px] bg-[url('/element1.svg')] bg-no-repeat bg-cover lg:py-16 py-8">
                        <h1 className="font-medium lg:text-[40px] text-xl flex justify-center text-white lg:mb-16 mb-8">Meet Our Teams</h1>

                        <div className="lg:grid grid-cols-3 lg:gap-6 lg:px-20 px-6">
                            {
                                teams.map((team: any) => (
                                    <div key={team.id} className="flex flex-col h-full">
                                        <div className="bg-[#262626] lg:py-8 lg:px-8 py-4 px-3 lg:rounded-[30px] rounded-[20px] flex-1 mb-4 lg:mb-0">
                                            <Image
                                                src={team.src}
                                                alt={`${team.id}`}
                                                width={0}
                                                height={0}
                                                className="mb-4 rounded-lg"
                                            />
                                            <div className="flex flex-col items-center">
                                                <p className="text-white lg:text-2xl text-lg font-medium lg:mb-2 mb-1">{team.name}</p>
                                                <p className="mb-1 lg:text-lg text- text-[#888888]">{team.division}</p>
                                            </div>
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
    );
}