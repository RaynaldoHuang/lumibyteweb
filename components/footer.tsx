import Link from "next/link";
import Image from "next/image";

import logo from "@/public/logo.svg"

export default function Footer() {
    return (
        <>
            <div className="w-11/12 mx-auto bg-[#171717] pt-16 pb-10 mt-36 rounded-[30px] mb-10">
                <div className="flex flex-col items-center">
                    <h1 className="text-white text-[56px]">Start Collaborating with Us</h1>
                    <p className="text-[#B8B8B8] mt-4 text-center text-lg">
                        Contact us and let's discuss your mobile app and website development needs.<br />We're ready to assist and can start your project right away.
                    </p>

                    <div className="flex mt-10 gap-8">
                        <div className="flex border-2 rounded-full py-2 px-9 border-[#65C8C1] items-center gap-3">
                            <svg
                                viewBox="0 0 18 18"
                                fill="#65C8C1"
                                height="1.5em"
                                width="1.5em"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"
                                />
                            </svg>
                            <Link href={""} className="text-lg text-[#65C8C1]">Email</Link>
                        </div>
                        <div className="flex border-2 rounded-full py-2 px-9 border-[#65C8C1] items-center gap-3">
                            <svg
                                fill="#65C8C1"
                                viewBox="0 0 18 18"
                                height="1.5em"
                                width="1.5em"
                            >
                                <path d="M13.601 2.326A7.854 7.854 0 007.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 003.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0013.6 2.326zM7.994 14.521a6.573 6.573 0 01-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 01-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 014.66 1.931 6.557 6.557 0 011.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 00-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                            </svg>
                            <Link href={""} className="text-lg text-[#65C8C1]">WhatsApp</Link>
                        </div>
                    </div>

                    <div className="w-full px-10 my-16">
                        <hr className="border-1 border-white" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 px-10">
                    <div>
                        <Image src={logo} width={180} alt="" />
                        <p className="text-[#B8B8B8] text-lg mt-5">Massachusetts, Cambridge, MA 01268, United States <br/>of America.</p>
                    </div>
                    <div className="grid grid-cols-3 gap-12 px-10">
                        <div>
                            <h1 className="text-white font-medium text-2xl">Menu</h1>
                            <div className="flex flex-col mt-6 gap-y-2">
                                <Link href={""} className="text-[#B8B8B8] text-lg">Home</Link>
                                <Link href={""} className="text-[#B8B8B8] text-lg">About Us</Link>
                                <Link href={""} className="text-[#B8B8B8] text-lg">Project</Link>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-white font-medium text-2xl">Services</h1>
                            <div className="flex flex-col mt-6 gap-y-2">
                                <Link href={""} className="text-[#B8B8B8] text-lg">UI / UX Web and Mobile Design</Link>
                                <Link href={""} className="text-[#B8B8B8] text-lg">Mobile Development</Link>
                                <Link href={""} className="text-[#B8B8B8] text-lg">Landing Page</Link>
                                <Link href={""} className="text-[#B8B8B8] text-lg">Website Application</Link>
                                <Link href={""} className="text-[#B8B8B8] text-lg">Tech Workshop</Link>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-white font-medium text-2xl">Social Media</h1>
                            <div className="flex mt-6 gap-y-2 items-center gap-x-3">
                                <svg
                                    fill="#B8B8B8"
                                    viewBox="0 0 18 18"
                                    height="1.5em"
                                    width="1.5em"
                                >
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 00-1.417.923A3.927 3.927 0 00.42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 001.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 00-.923-1.417A3.911 3.911 0 0013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 01-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 01-.92-.598 2.48 2.48 0 01-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 100 1.92.96.96 0 000-1.92zm-4.27 1.122a4.109 4.109 0 100 8.217 4.109 4.109 0 000-8.217zm0 1.441a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334z" />
                                </svg>
                                <Link href={""} className="text-[#B8B8B8] text-lg">Instagram</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="text-white flex justify-center text-md mt-12">Copyright 2024 ©Lumibyte Company</p>
                </div>
            </div>
        </>
    );
}