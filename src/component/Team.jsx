'use client'

import sales from "@/lib/datasales"
import Image from "next/image"
import { useEffect, useRef } from "react";

export default function Team() {

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
        },[sales]);

    return (
        <section className="relative w-full overflow-hidden">
            <div className="w-full flex flex-col justify-center items-center">
                <h2 className="text-4xl font-bold font-teko mt-10">OUR TEAM</h2>
                {/* //card phone */}
                <div className="md:hidden relative w-full flex-col items-center justify-center mt-10">
                    {sales.map((data, idx) => {
                        return (
                            <div key={idx} className="reveal opacity-0 translate-y-30 transition-all duration-300 ease-out">
                                <div className="w-full flex flex-row p-5">
                                    <div className="w-1/2 flex justify-center">
                                        <div className="relative w-45 h-45 rounded-full my-2 overflow-hidden z-2">
                                            <Image className="object-cover bg-center " src={data.img} alt="" fill></Image>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center mt-30">
                                        <p className="font-bold text-2xl text-center">{data.name}</p>
                                        <p className="text-center text-sm">{data.position}</p>
                                    </div>
                                </div>
                                <div className="relative w-full h-70">
                                    <div className="absolute w-2 h-full -top-30 left-25 bg-red-800">
                                    </div>
                                    <div className="absolute w-full h-full -top-30 left-25 bg-gray-500/10 p-5">
                                        <p className="mt-20 w-3/4 text-sm">{data.content}</p>
                                        <a href={data.whatsapp} className="absolute flex items-center px-2 bg-green-400 rounded-md -bottom-15 left-0 shadow-md text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                        </svg> <span className="m-2 ">Whatsapp</span></a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* //card pc */}
                <div className="relative w-full md:flex hidden justify-center mt-10">
                    <div className="w-3/4 flex flex-col">
                        {sales.map((data, idx) => {
                            return (
                                <div key={idx} className="relative flex w-full my-5 reveal opacity-0 translate-y-30 transition-all duration-1000 ease-out">
                                    <div className="w-1/2">
                                        <div className="relative w-70 h-90 rounded-lg shadow-lg overflow-hidden">
                                            <Image className="object-cover bg-center" src={data.img} alt="" fill></Image>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="mx-4">
                                            <p className="text-3xl font-bold">{data.name}</p>
                                            <p className="">{data.position}</p>
                                            <div className="mt-10">
                                                <p>{data.content}</p>
                                                <a href={data.whatsapp} className="w-1/4 mt-5 flex items-center px-2 bg-green-400 rounded-md -bottom-15 left-0 shadow-md text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                                                </svg> <span className="m-2">Whatsapp</span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}