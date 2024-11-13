import logo from "@/public/logo.svg"
import Image from "next/image";
import Link from "next/link";

export default function Navigationbar() {
    return (
        <>
            <div className="flex w-11/12 mx-auto bg-[#171717] py-4 mt-8 rounded-full items-center justify-between bg-[url('/element.svg')]">
                <Image src={logo} alt="" width={150} className="ms-10"></Image>
                <div>
                    <Link href={""} className="text-white pe-16 text-lg">Home</Link>
                    <Link href={""} className="text-white pe-16 text-lg">About</Link>
                    <Link href={""} className="text-white pe-16 text-lg">Project</Link>
                    <Link href={""} className="text-white text-lg">Product</Link>
                </div>
                <Link href={""} className="text-black bg-[#65C8C1] font-medium text-lg px-8 py-2 rounded-full me-5">Login</Link>
            </div>
        </>
    );
}