'use client'

import Image from "next/image"
import { topCars } from "@/lib/dataMobil"
import { useEffect } from "react";

export default function TopCars() {

     useEffect(()=> {
            const observerOptions = {
                root: null,
                threshold: 0.1
            }
    
            const observer = new IntersectionObserver((entries)=> {
                entries.forEach((entry)=>{
                    if(entry.isIntersecting) {
                        entry.target.classList.add("opacity-100", "translate-y-0");
                        entry.target.classList.remove("opacity-0", "translate-y-30");
                    }
                })
            }, observerOptions);
    
            const sections = document.querySelectorAll(".reveal");
            sections.forEach((section)=> observer.observe(section));
    
            return ()=> observer.disconnect();
        },[topCars]);

    return (
        <>
            <section className="relative w-ful flex justify-center">
                <div className="w-full flex flex-col items-center">
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold font-teko">Mobil Terbaik Chery</h2>
                    </div>
                    <div className="flex md:flex-row flex-col p-5">
                        {topCars.map((data, idx) => {
                            return (
                                <div key={idx} className="reveal hover:scale-110 opacity-0 translate-y-30 transition-all duration-1000 ease-out">
                                    <div className="w-full">
                                        <Image src={data.img} className="object-cover" alt="" width={500} height={500}></Image>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="my-3">
                                            <h3 className="font-bold text-4xl font-teko">{data.name}</h3>
                                        </div>
                                        <div>
                                            <div className="flex my-2 items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-key-fill" viewBox="0 0 16 16">
                                                    <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                                                </svg>
                                                <p className="m-2">Vehicle Type : {data.type}</p>
                                            </div>
                                            <div className="flex my-2 items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                                </svg>
                                                <p className="m-2">{data.detail}</p>
                                            </div>
                                            <div className="flex my-2 items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-newspaper" viewBox="0 0 16 16">
                                                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                                                    <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
                                                </svg>
                                                <button className="m-2">Download Brochure</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}