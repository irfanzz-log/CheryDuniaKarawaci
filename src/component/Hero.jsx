'use client'
import Image from "next/image"
import { useState } from "react"

export default function () {
    const [heroPage, setHeroPage] = useState(0);

    function nextPage() {
        setHeroPage((prev)=> (prev === heroImage.length -1 ? 0 : prev + 1));
    }

    function previousPage() {        
        setHeroPage((prev)=> (prev === 0 ? heroImage.length -1 : prev - 1));
    }

    const heroImage = [
        { name: "car1", src: "/car1.jpg" },
        { name: "car2", src: "/car2.jpg" },
        { name: "car3", src: "/car3.jpg" }
    ]

    return (
        <>
            <section className="relative overflow-x-hidden">
                <div className="w-full">
                    <div className="h-100">
                        {heroImage.map((data, idx) => {
                            return (
                                <Image key={idx} className={`object-cover bg-center ${heroPage === idx ? "opacity-100" : "opacity-0"} transition-all duration-1000 ease-out`} src={data.src} alt={data.name} fill ></Image>
                            )
                        })}
                    </div>
                </div>
                <div className="absolute w-full h-full flex justify-between top-0 md:p-10 p-2 z-10 md:opacity-0 hover:opacity-100 transition-all duration-300 ease-out">
                    <button onClick={() => previousPage()} className="cursor-pointer hover:scale-105"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" stroke="white" strokeWidth="2" fill="white" className="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                    </svg></button>
                    <button onClick={() => nextPage()} className="cursor-pointer hover:scale-105"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" stroke="white" strokeWidth="2" fill="white" className="bi bi-chevron-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708" />
                    </svg></button>
                </div>
                <div className="w-full flex justify-center">
                    <div className="absolute bottom-5 flex flex-row">
                        {heroImage.map((data, idx) => {
                            return (
                                <div key={idx} className={`mx-1 ${idx === heroPage ? "opacity-100" : "opacity-50"}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="white" className="bi bi-circle-fill" viewBox="0 0 16 16">
                                        <circle cx="8" cy="8" r="8" />
                                    </svg>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

        </>
    )
}