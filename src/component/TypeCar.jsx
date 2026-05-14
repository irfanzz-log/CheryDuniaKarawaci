'use client'

import Nav from "./Nav"
import Image from "next/image"
import Footer from "./Footer"
import { pathCarContent } from "@/lib/dataMobil"
import { usePathname } from "next/navigation"
import { useState, useEffect, useRef } from "react"
import CallToActionBtn from "./CallToActionBtn"

export default function TypeCar() {
    const pathname = usePathname();
    const path = pathname.split("/").pop();

    useEffect(() => {
        const observerOptions = {
            root: null,
            threshold: 0.1
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("opacity-100", "translate-y-0");
                    entry.target.classList.remove("opacity-0", "translate-y-30");
                }
            })
        }, observerOptions);

        const sections = document.querySelectorAll(".reveal");
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [path]);

    return (
        <>
            <main key="Car-type">
                <Nav></Nav>
                <section className="relative w-full mt-30 my-10">
                    {pathCarContent.map((category, idx) => {
                        if (path === category.path) {
                            return (
                                <div key={idx} className="flex flex-col items-center justify-center">
                                    <div className="w-3/4">
                                        <h1 className="text-7xl text-red-800 font-bold font-teko w-full">{category.name}</h1>
                                    </div>
                                    {category.content.map((childCategory, childIdx) => {
                                        return (
                                            <div key={childIdx} className="reveal opacity-0 translate-y-30 transition-all duration-1000 ease-out w-full flex flex-col justify-center items-center">
                                                <div className="w-3/4">
                                                    <h2 className="text-4xl font-bold font-teko mt-20">{childCategory.heading}</h2>
                                                    <p className="w-full">{childCategory.paragraf}</p>
                                                </div>
                                                {childCategory.image.map((imageContent, imageIdx) => {
                                                    return (
                                                        <div key={imageIdx} className="w-full flex flex-col justify-center items-center my-5">
                                                            <div className="w-3/4 md:text-4xl md:py-5 text-2xl">
                                                                <h3 className="font-teko w-full">{imageContent.subheading}</h3>
                                                            </div>
                                                            {imageContent.linkUrl === ""
                                                                ?
                                                                <div className="aspect-video w-3/4 overflow-hidden">
                                                                    <video
                                                                        src={imageContent.videoSrc}
                                                                        autoPlay
                                                                        loop
                                                                        muted
                                                                        playsInline
                                                                        className="w-full h-full object-contain"
                                                                    />
                                                                </div>
                                                                :
                                                                <div className="relative w-3/4 aspect-[16/9] shadow-lg">
                                                                    <Image src={imageContent.linkUrl} alt="" className="object-contain bg-center" fill></Image>
                                                                </div>
                                                            }
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        }
                    })}
                </section>

                <Footer></Footer>
                <CallToActionBtn></CallToActionBtn>
            </main>
        </>
    )
}