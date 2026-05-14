'use client'

import Image from "next/image";
import Nav from "@/component/Nav";
import Hero from "@/component/Hero";
import sales from "@/lib/datasales";
import TopCars from "@/component/TopCars";
import Footer from "@/component/Footer";
import Team from "@/component/Team";
import { useEffect, useState } from "react";
import CallToActionBtn from "@/component/CallToActionBtn";
import { usePathname } from "next/navigation";
import useSendMail from "@/hook/useSendMail";

export default function Home() {
  const path = usePathname();
  const services = [
    { title: "Warranty", desc: "Perlindungan garansi resmi untuk semua unit kendaraan Chery." },
    { title: "Promo Financing", desc: "Dapatkan penawaran DP ringan dan cicilan bunga 0%." },
    { title: "Maintenance", desc: "Paket free service eksklusif untuk setiap pembelian mobil baru." },
    { title: "Free Test Drive", desc: "Uji coba berkendara gratis untuk seluruh lini model Chery." },
    { title: "Spare Parts", desc: "Dukungan suku cadang asli yang teruji dan berkualitas tinggi." },
    { title: "Trade-In", desc: "Solusi tukar tambah mobil lama Anda dengan harga terbaik." },
  ];

  const [formMail, setFormMail] = useState({
    nama: '',
    email: '',
    typeMobil: '',
    tanggal: '',
    jam: '',
    noWa: ''
  });

  const inputFormEmail = (e) => {
    const { name, value } = e.target
    setFormMail((prev) => ({ ...prev, [name]: value }));
    console.log({ ...formMail, [name]: value });

  }
  const [isBlankFormLoading, setIsBlankLoading] = useState(false);
  const { sendEmail } = useSendMail();
  const [isCompleteForm, setIsCompleteForm] = useState(false);

  function handleSendEmailButton() {

    if (formMail.email === "" || formMail.nama === "" || formMail.noWa === "" || formMail.tanggal === "") {
      setIsCompleteForm(true);
      return;
    }
    setIsBlankLoading(true);
    setIsCompleteForm(false);
    send();

  }

  async function send() {
    try {
      await sendEmail(formMail);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => {
        setIsBlankLoading(false)
      }, 2000)
    }
  }


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
  }, [services, sales, path]);

  return (
    <>
      <main key="Home" className="relative overflow-x-hidden">
        <Nav></Nav>
        <Hero></Hero>

        <section className="overflow-x-hidden reveal opacity-0 translate-y-30 transition-all duration-1000 ease-out">
          <div className="relative mt-20 w-full">
            <div className="w-100 md:h-170 h-200">
              <Image src="/element/element1.svg" className="object-cover bg-center" alt="" fill></Image>
            </div>
            <div className="absolute top-7 w-full flex md:flex-row flex-col justify-center items-center">
              <div className="my-2 md:w-1/2 flex justify-center">
                <div className="relative md:w-80 md:h-80 w-50 h-50 rounded-lg p-5">
                  <div className="w-full h-full flex justify-center items-center"><Image src="/chery-logo.png" className="" alt="" width={"300"} height={"300"}></Image></div>
                </div>
              </div>
              <div className="my-2 md:p-6 p-4 md:w-1/2 md:text-left text-center">
                <p className="font-bold text-white text-2xl font-teko">Chery Dunia Karawaci</p>
                <p className="mt-4 text-white">Selamat datang di Website Dealer Resmi Chery Karawaci Official. Perkenalkan Kami Team Digital Marketing Chery Dunia Karawaci Official. Dengan pengalaman lebih dari 5 tahun di bidang Otomotif dan Pemasaran, khususnya dalam pelayanan jual beli mobil.
                </p>
                <p className="mt-4 text-white">Kami akan memberikan Excellent Service sesuai dengan kebutuhan Anda dalam memiliki mobil Chery.
                  Silahkan bertanya lebih lanjut tentang produk mobil Chery dengan menghubungi Kami.</p>
              </div>
            </div>
          </div>
        </section>

        <Team></Team>

        <section className="relative w-full flex flex-col justify-center items-center md:mt-30 mt-10">
          <div className="md:w-1/2 w-3/4">
            <h2 className="text-center font-bold md:text-6xl text-2xl font-teko">Miliki Segera Mobil Chery Anda</h2>
          </div>
          <div className="relative w-full">
            <Image src="/element/element2.svg" className="object-cover md:block hidden opacity-70" alt="" width={3000} height={3000} ></Image>
            <Image src="/element/element3.svg" className="object-cover md:hidden block opacity-70" alt="" width={700} height={100} ></Image>
            <div className="absolute md:top-10 top-5 flex justify-center items-center flex-col w-full">
              {services.map((data, idx) => {
                return (
                  <div key={idx} className="text-center md:m-2 px-4 reveal opacity-0 translate-y-30 transition-all duration-1000 ease-out">
                    <h3 className="md:text-2xl text-lg font-bold">{data.title}</h3>
                    <p className="md:text-lg text-sm">{data.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <TopCars></TopCars>

        <section className="relative w-full reveal opacity-0 translate-y-30 transition-all duration-1000 ease-out">
          <div className="flex justify-center">
            <div className="absolute top-1/2 z-2 md:w-1/2 w-3/4 flex">
              <p className="text-center font-bold md:mt-10 text-2xl text-white">Garansi 10 Tahun / 1.000.000km
                Promo Kredit DP Ringan
                Promo Kredit Bunga 0%</p>
            </div>

            <div className="absolute flex bottom-0 z-2 justify-between md:w-1/2">
              {sales.map((data, idx) => {
                return (
                  <button key={idx} className="font-teko text-2xl opacity-80 md:py-2 p-4 hover:scale-110 transition-all durations-1000 ease-out md:px-9 bg-white font-bold mx-2">{data.name}</button>
                )
              })}
            </div>
          </div>
          <div className="w-full h-150 -z-1">
            <Image src="/element/element4.svg" className="object-cover opacity-80 md:hidden asbsolute" alt="" fill></Image>
            <Image src="/element/element4-big.svg" className="object-cover opacity-80 md:block hidden bg-top" alt="" fill></Image>
          </div>
        </section>

        <section className="w-full p-5 my-10 reveal opacity-0 translate-y-30 transition-all duration-1000 ease-out">
          <div className="flex md:flex-row flex-col w-full">
            <div className="md:w-1/2 w-full p-5">
              <h2 className="text-center font-teko text-3xl font-bold my-2">Test Drive Now</h2>
              <form action={handleSendEmailButton} className="text-sm text-gray-600">
                <div className="w-full">
                  <label htmlFor="">Nama </label>
                  <input onChange={inputFormEmail} name="nama" className="w-full bg-white p-4 border-[0.5px] border-gray-500/10 rounded-md" placeholder="Ketik nama Anda" type="text" />
                </div>
                <div className="w-full">
                  <label htmlFor="">No Whatsapp </label>
                  <input onChange={inputFormEmail} name="noWa" className="w-full bg-white p-4 border-[0.5px] border-gray-500/10 rounded-md" placeholder="08xx" type="text" />
                </div>
                <div className="w-full">
                  <label htmlFor="">Email </label>
                  <input onChange={inputFormEmail} name="email" className="w-full bg-white p-4 border-[0.5px] border-gray-500/10 rounded-md" placeholder="example@gmail.com" type="email" />
                </div>
                <div className="w-full">
                  <label htmlFor="">Tipe Mobil </label>
                  <input onChange={inputFormEmail} name="typeMobil" className="w-full bg-white p-4 border-[0.5px] border-gray-500/10 rounded-md" placeholder="Ketik tipe mobil" type="text" />
                </div>
                <div className="w-full">
                  <label htmlFor="">Tanggal Test Drive </label>
                  <input onChange={inputFormEmail} name="tanggal" className="w-full bg-white p-4 border-[0.5px] border-gray-500/10 rounded-md" placeholder="" type="date" />
                </div>
                <div className="w-full">
                  <label htmlFor="">Jam Test Drive </label>
                  <input onChange={inputFormEmail} name="jam" className="w-full bg-white p-4 border-[0.5px] border-gray-500/10 rounded-md" placeholder="" type="time" />
                </div>
                <div>
                  {isCompleteForm && <p className="text-red-600">Harap Lengkapi Form Diatas!</p>}
                </div>
                <button className="p-4 bg-red-700 hover:bg-red-800 cursor-pointer text-white mt-4">Kirim Permohonan</button>
              </form>
            </div>
            <div className="md:w-1/2 w-full p-5">
              <div>
                <h2 className="text-3xl font-teko font-bold text-center my-2">Our Trusted Partner</h2>
              </div>
              <div>
                <div className="text-center">
                  <p className="text-[#666] text-lg">Bagi Anda yang berencana ingin membeli mobil Chery dengan mengambil Paket Kredit. Kami menyediakan pilihan Leasing untuk Anda.</p>
                </div>
                <div className="grid grid-cols-2 w-full gap-4 justify-center items-center mt-4">
                  <div className="w-full flex justify-center items-center">
                    <img src="https://cheryofficial.id/wp-content/uploads/2023/05/adira.webp" alt="" />
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <img src="https://cheryofficial.id/wp-content/uploads/2023/05/mandiri-tunas-finance.webp" alt="" />
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <img src="https://cheryofficial.id/wp-content/uploads/2023/05/mybank.webp" alt="" />
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <img src="https://cheryofficial.id/wp-content/uploads/2023/05/mcf-finance.jpg" alt="" />
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <img src="https://cheryofficial.id/wp-content/uploads/2023/05/bussan-auto-finance.webp" alt="" />
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <img src="https://cheryofficial.id/wp-content/uploads/2023/05/clipan.jpg" alt="" />
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <img src="https://cheryofficial.id/wp-content/uploads/2023/05/orico-balimor-finance.jpg" alt="" />
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <img src="https://cheryofficial.id/wp-content/uploads/2023/05/otto-kredit-mobil.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative my-30 reveal opacity-0 translate-y-30 transition-all duration-1000 ease-out">
          <div className="flex md:flex-row flex-col w-full">
            <div className="relative w-full">
              <img src="https://cheryofficial.id/wp-content/uploads/2022/10/gambar-service-home.webp" alt="" />
              <button className="absolute -bottom-10 p-3 px-8 right-0 font-teko text-3xl bg-red-800 text-white">Test Drive</button>
            </div>
            <div className="md:w-1/2 w-full my-10 text-left p-5">
              <h2 className="font-teko font-bold text-3xl my-5">Spare Parts & Service</h2>
              <p className="my-1 text-lg text-[#666]">Suku cadang asli Chery diuji untuk melewati kondisi ekstrem guna menghasilkan produk yang tahan lama, kualitas tinggi dan dapat diandalkan.</p>
              <p className="my-1 text-lg text-[#666]">PT Chery Motor Indonesia memberikan garansi pada kendaraan 6 Tahun/ 150,000 km sebagai wujud bentuk komitmen Chery terhadap kepada konsumen. Apabila terdapat cacat material atau kesalahan dari hasil kerja pabrik, bukan akibat kesalahan pemakai atau material yang habis atau aus terpakai dalam jangka waktu tertentu sesuai yang tertera di buku service.</p>
            </div>
          </div>
        </section>

        <Footer></Footer>

        <div className={`popup fixed bottom-10 left-10  md:w-1/3 w-full z-10 justify-center items-center transition-all duration-1000 ease-out ${isBlankFormLoading ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-80"}`}>
          <div className="bg-white p-2 shadow-md flex justify-center items-center rounded-lg text-green-600 border-1 border-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentcolor" className="bi bi-check-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
            </svg>
            <p className="mx-5 text-sm">Permohonan telah dikirim</p>
          </div>
        </div>

        <CallToActionBtn></CallToActionBtn>
      </main>
    </>
  );
}
