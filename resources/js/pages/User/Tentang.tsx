import React from 'react';
import komponen from "../../assets/komponen.jpg";

const Tentang: React.FC = () => {
    return (
        <div>
            {/* Section 1: Tentang Kami */}
            <section className="bg-white text-gray-800 px-6 py-24">
                <div className="container mx-auto text-center max-w-3xl">
                    <h1 className="text-4xl font-bold mt-2 text-blue-700">Tentang Kami</h1>
                    <p className="mt-4 text-gray-600">
                        ProTech.id adalah perusahaan yang bergerak di bidang teknologi informasi.
                        Kami berfokus pada pengembangan aplikasi, desain antarmuka, dan solusi digital
                        yang membantu bisnis berkembang lebih cepat.
                    </p>
                </div>
            </section>

            {/* Section 2: Sejarah Singkat */}
            <section className="bg-gray-50 py-12 px-8 md:px-16">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-4 text-blue-700">Sejarah Singkat</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img
                            src={komponen}
                            alt="Sejarah ProTech"
                            className="w-[400px] md:w-[500px] rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Section 3: Visi Misi */}
            <section className="bg-white px-6 py-24">
                <div className="container mx-auto grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center 
                        transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <i className="ri-lightbulb-line text-3xl text-blue-700 mb-3"></i>
                        <h3 className="text-xl font-bold text-blue-700 mb-2">Komitmen Kami</h3>
                        <p className="text-gray-600">
                            Kami berkomitmen memberikan inovasi terbaik melalui teknologi terbaru.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center 
                        transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <i className="ri-focus-3-line text-3xl text-blue-700 mb-3"></i>
                        <h3 className="text-xl font-bold text-blue-700 mb-2">Visi Kami</h3>
                        <p className="text-gray-600">
                            Menjadi mitra strategis terpercaya dalam menghadirkan solusi berkelanjutan.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center 
                        transition-all duration-300 hover:shadow-xl hover:scale-105">
                        <i className="ri-rocket-line text-3xl text-blue-700 mb-3"></i>
                        <h3 className="text-xl font-bold text-blue-700 mb-2">Misi Kami</h3>
                        <p className="text-gray-600">
                            Mendorong inovasi, menciptakan produk unggul, dan layanan profesional.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 4: Statistik */}
            <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-6 py-24">
                <div className="container mx-auto grid md:grid-cols-3 text-center gap-8">
                    <div>
                        <h3 className="text-4xl font-bold">50+</h3>
                        <p className="mt-2">Proyek Selesai</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold">50+</h3>
                        <p className="mt-2">Klien Puas</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold">50+</h3>
                        <p className="mt-2">Produk Inovatif</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tentang;