import React, { useState } from "react";

const Layanan: React.FC = () => { // 1. Tambahkan tipe React.FC
  // 2. Terapkan tipe boolean pada state (praktik yang baik)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div
      className="services min-h-screen flex flex-col justify-center px-6 py-20 
      bg-gradient-to-br from-sky-50 to-sky-100 relative"
    >
      {/* konten */}
      <div className="relative z-10">
        <h1 className="text-center lg:text-5xl text-3xl font-bold mb-2 text-sky-900">
          Layanan
        </h1>
        <p className="text-center max-w-2xl mx-auto text-gray-700">
          Berbagai layanan terbaik untuk mendukung setiap kebutuhan proyek elektronik Anda.
        </p>

        <div className="services-box mt-10 grid md:grid-cols-3 grid-cols-1 gap-8">
          {/* Produk Lengkap */}
          <div className="box bg-gradient-to-br from-sky-400 to-sky-500 rounded-lg shadow p-6 flex flex-col items-start text-white">
            <i className="ri-number-1 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold">Produk Lengkap</h3>
            <p className="mb-4">
              Kami menyediakan ribuan jenis komponen elektronik dari berbagai
              merek terpercaya dengan kualitas terjamin.
            </p>
            <a
              href="/produk"
              className="mt-auto bg-white text-sky-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-sky-100 transition"
            >
              Belanja Sekarang
            </a>
          </div>

          {/* Pengiriman Cepat (pakai modal) */}
          <div className="box bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg shadow p-6 flex flex-col items-start text-white">
            <i className="ri-number-2 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold">Pengiriman Cepat & Gratis</h3>
            <p className="mb-4">
              Gratis ongkir untuk pembelian di atas <b>Rp300.000</b> dan opsi
              pengiriman ekspres ke seluruh Indonesia.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-auto bg-white text-emerald-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-emerald-100 transition"
            >
              Lihat Syarat
            </button>
          </div>

          {/* Dukungan Teknis */}
          <div className="box bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-lg shadow p-6 flex flex-col items-start text-white">
            <i className="ri-number-3 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold">Dukungan Teknis 24/7</h3>
            <p className="mb-4">
              Tim ahli kami siap membantu Anda memilih komponen yang tepat dan
              memberikan konsultasi teknis kapan saja.
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-white text-indigo-600 font-semibold px-4 py-2 rounded-lg shadow hover:bg-indigo-100 transition"
            >
              Chat Sekarang
            </a>
          </div>
        </div>
      </div>

      {/* Section: Kenapa Memilih Kami */}
      <div className="mt-20">
        <h2 className="text-center text-3xl font-semibold text-sky-900 mb-8">Kenapa Memilih Kami?</h2>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-6 text-center">
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <i className="ri-shield-check-line text-4xl text-sky-600 mb-3"></i>
            <h3 className="font-bold">Kualitas Terjamin</h3>
            <p className="text-gray-600 text-sm">Semua produk melewati pengecekan kualitas sebelum dikirim.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <i className="ri-wallet-3-line text-4xl text-emerald-600 mb-3"></i>
            <h3 className="font-bold">Harga Kompetitif</h3>
            <p className="text-gray-600 text-sm">Harga terbaik dengan promo khusus untuk pembelian besar.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <i className="ri-customer-service-2-line text-4xl text-indigo-600 mb-3"></i>
            <h3 className="font-bold">Customer Support</h3>
            <p className="text-gray-600 text-sm">Tim siap membantu Anda dengan cepat dan ramah.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition">
            <i className="ri-community-line text-4xl text-pink-600 mb-3"></i>
            <h3 className="font-bold">Komunitas Maker</h3>
            <p className="text-gray-600 text-sm">Dukungan edukasi & komunitas untuk proyek DIY Anda.</p>
          </div>
        </div>
      </div>

      {/* Section: Alur Layanan */}
      <div className="mt-20">
        <h2 className="text-center text-3xl font-semibold text-sky-900 mb-8">
          Bagaimana Cara Memesan?
        </h2>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-6 max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition">
            <span className="text-3xl font-bold text-sky-600">1</span>
            <p className="mt-3 text-gray-700">Pilih produk sesuai kebutuhan.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition">
            <span className="text-3xl font-bold text-sky-600">2</span>
            <p className="mt-3 text-gray-700">
              Checkout & pilih metode pengiriman.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition">
            <span className="text-3xl font-bold text-sky-600">3</span>
            <p className="mt-3 text-gray-700">Lakukan pembayaran dengan aman.</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition">
            <span className="text-3xl font-bold text-sky-600">4</span>
            <p className="mt-3 text-gray-700">
              Produk dikirim & nikmati layanan kami.
            </p>
          </div>
        </div>
      </div>

      {/* Modal untuk syarat pengiriman */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsModalOpen(false)}
          ></div>
          <div className="relative bg-white rounded-xl shadow-lg p-6 max-w-md w-full z-10">
            <h2 className="text-xl font-bold mb-4">Syarat Gratis Ongkir</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Berlaku untuk pembelian minimal Rp300.000</li>
              <li>Tidak berlaku untuk produk promo/flash sale</li>
              <li>Hanya berlaku untuk pengiriman reguler & ekspres</li>
              <li>Wilayah jangkauan seluruh Indonesia</li>
            </ul>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-6 w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Layanan;