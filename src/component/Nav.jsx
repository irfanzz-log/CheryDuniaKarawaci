'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import {tipeMobil} from "@/lib/dataMobil";

export default function () {
    const getPathName = usePathname();
    const pathName = getPathName.split("/").pop();
    const [isNavClick, setIsNavClick] = useState(false);
    const [isTypeOpen, setIsTypeOpen] = useState(false);

    const path = [
        { name: "Home", path: "/" },
        { name: "Tipe Mobil", path: "/tipe" },
        // { name: "Harga", path: "/harga" },
        // { name: "Info & Promo", path: "/information" },
        // { name: "Galeri", path: "/galery" },
        { name: "Kontak", path: "/contact" }
    ]

    return (
        <>
            <header className="fixed top-0 w-full z-100">
                <nav className="relative flex justify-between h-15 items-center bg-white shadow-md p-5 md:px-50">
                    <div className="logo p-2">
                        <Image className="" alt="" src="/chery-logo.png" width={50} height={50}></Image>
                    </div>
                    <div className="w-full md:flex justify-end hidden">
                        {path.map((data, idx) => {

                            if (data.name === "Tipe Mobil") {
                                return (
                                    <div key={idx} onClick={() => setIsTypeOpen(!isTypeOpen)} className={`relative ${pathName === data.path.split("/").pop() ? 'text-red-600 p-2' : 'text-black p-2'}`}>
                                        <div className="!cursor-pointer hover:text-gray-800/60 flex items-center"><span className="pr-1">Tipe Mobil</span>

                                            {isTypeOpen
                                                ? <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67" />
                                                </svg>
                                                : <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-chevron-compact-up" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z" />
                                                </svg>}

                                        </div>
                                        <div className={`absolute top-15 w-50 -z-1 ${isTypeOpen ? "block" : "hidden"}`}>
                                            <div className="relative flex flex-col bg-white rounded-md shadow-md">
                                            <span className="absolute left-0 w-full top-0 h-2 bg-red-800"></span>
                                            {tipeMobil.map((dataCar, idxCar) => {
                                                const isActive = pathName === dataCar.path.split("/").pop();
                                                return (
                                                    <Link
                                                        key={idxCar}
                                                        href={dataCar.path}
                                                        className={`w-full hover:bg-gray-400/10 p-5 ${isActive ? 'text-red-600 p-2' : 'text-black p-2'}`} >
                                                        {dataCar.name}
                                                    </Link>
                                                )
                                            })}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }

                            return (
                                <Link
                                    key={idx}
                                    href={data.path}
                                    className={`hover:text-gray-800/60 !cursor-pointer ${pathName === data.path.split("/").pop() ? 'text-red-600 p-2' : 'text-black p-2'}`} >
                                    {data.name}
                                </Link>
                            )
                        })}
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsNavClick(!isNavClick)}><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                        </svg></button>
                    </div>
                    <div className={`absolute flex flex-col w-full top-12 bg-white shadow-md left-0 p-5 md:hidden block transition-all duration-200 ease-out -z-1 ${isNavClick ? 'translate-y-0' : '-translate-y-1000'}`}>
                        {path.map((data, idx) => {

                            if (data.name === "Tipe Mobil") {
                                return (
                                    <div key={idx} onClick={() => setIsTypeOpen(!isTypeOpen)} className={`relative ${pathName === data.path.split("/").pop() ? 'text-red-600 p-2' : 'text-black p-2'}`}>
                                        <div className="flex items-center"><span className="pr-1">Tipe Mobil</span>

                                            {isTypeOpen
                                                ? <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67" />
                                                </svg>
                                                : <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-chevron-compact-up" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z" />
                                                </svg>}

                                        </div>
                                        <div className={`flex flex-col w-full h-full top-0 ${isTypeOpen ? "block" : "hidden"}`}>
                                            {tipeMobil.map((dataCar, idxCar) => {
                                                const isActive = pathName === dataCar.path.split("/").pop();
                                                return (
                                                    <Link
                                                        key={idxCar}
                                                        href={dataCar.path}
                                                        className={`w-full ${isActive ? 'text-red-600 p-2' : 'text-black p-2'}`} >
                                                        {dataCar.name}
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            }

                            return (
                                <Link
                                    key={idx}
                                    href={data.path}
                                    className={` ${pathName === data.path.split("/").pop() ? 'text-red-600 p-2' : 'text-black p-2'}`} >
                                    {data.name}
                                </Link>
                            )
                        })}
                    </div>
                </nav>
            </header>
        </>
    )
}