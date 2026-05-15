import sales from "@/lib/datasales"

export default function Footer() {
    return (
        <>
            <footer className="w-full bg-gray-800">
                <section className="">
                    <div className="flex md:flex-row flex-col p-5">
                        <div className="text-white">
                            <address>
                                <div>
                                    <h2 className="text-xl font-bold">Contact Info</h2>
                                </div>
                                <div>
                                    {sales.map((data, idx) => {
                                        return (
                                            <div key={idx} className="my-3">
                                                <h3 className="font-bold text-lg">{data.name}</h3>
                                                <p>{data.position}</p>
                                                <p>{data.noTelp}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Location</h3>
                                    <p>Jl. Imam Bonjol, RT.3/RW.4, Panunggangan Bar., Kec. Cibodas, Kota Tangerang, Banten 15138</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Email</h3>
                                    <p>cikeydigital@gmail.com</p>
                                </div>
                            </address>
                        </div>
                        <div className="w-full h-100 md:my-0 my-5">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.3408265124012!2d106.6153082759288!3d-6.218707493769267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ff2df9bbc2cf%3A0x734282bbec12eeb3!2sChery%20Dunia%20Karawaci!5e0!3m2!1sid!2sid!4v1777891842252!5m2!1sid!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen="yes"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                    <p className="text-center text-white text-sm p-5">Copyright @2026 Chery Dunia Karawaci Official</p>
                </section>
            </footer>
        </>
    )
}