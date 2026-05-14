import Footer from "@/component/Footer"
import Nav from "@/component/Nav"
import Team from "@/component/Team"
import Image from "next/image"
import CallToActionBtn from "@/component/CallToActionBtn"

export default function kontak() {
    
    return (
        <main key="Contact" className="relative">
            <Nav></Nav>

            <section className="relative w-full shadow-md">
                <div className="absolute bg-[url(/omoda-c5.png)] opacity-10 object-cover bg-center top-0 w-full h-full -z-1"></div>
                <div className="flex md:flex-row flex-col justif-center items-center ">
                    <div className="md:w-3/4 w-full md:px-40">
                        <div className="bg-gradient-to-b from-gray-300/70 pt-50 p-5 to-transparent">
                            <h1 className="text-5xl font-bold font-teko">Kontak Chery Dunia Karawaci</h1>
                            <p className="my-2 text-lg">Hi, perkenalkan Kami Team Digital Marketing Dealer Resmi Chery Cibubur Official. Dengan pengalaman di dunia Automotive dan Pemasaran, khususnya dalam memberikan pelayanan jual beli mobil.</p>
                            <p className="my-2 text-lg">Kami akan memberikan Excellent Service sesuai dengan kebutuhan Anda dalam memiliki mobil Chery.</p>
                            <p className="my-2 text-lg">Silahkan bertanya lebih lanjut tentang produk mobil Chery dengan menghubungi kontak Kami dibawah ini.</p>
                        </div>
                    </div>
                    <div className="md:w-1/6 w-full md:p-0 p-20">
                        <div className="relative w-full flex justify-center items-center">
                            <Image src="/chery-logo.png" className="object-cover bg-center" alt="" width={350} height={350}></Image>
                        </div>
                    </div>
                </div>
            </section>

            <Team></Team>
            <Footer></Footer>
        </main>
    )
}