import HeroImage from "@/assets/logo-new.png";
import Produk1 from "@/assets/Produk1.jpg";
import Produk2 from "@/assets/Produk2.jpg";
import Produk3 from "@/assets/Produk3.jpg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// 1. Definisikan tipe untuk sebuah objek produk
interface Product {
  id: number;
  name: string;
  image: string; // Hasil import gambar adalah string
  description: string;
}

const HomePage: React.FC = () => { // 2. Tambahkan tipe React.FC
  
  // 3. Terapkan tipe Product[] pada array
  const products: Product[] = [
    { id: 1, name: "Arduino Uno R3", image: Produk1, description: "Mikrokontroler untuk mengontrol rangkaian elektronik dan menjalankan program." },
    { id: 2, name: "Arduino Nano", image: Produk2, description: "Mikrokontroler ukuran kecil untuk mengontrol perangkat elektronik di ruang terbatas." },
    { id: 3, name: "Sensor Ultrasonik HC-SR04", image: Produk3, description: "Mengukur jarak dengan memancarkan dan menerima gelombang ultrasonik." },
  ];

  // 4. Terapkan tipe number pada state (praktik yang baik)
  const [page] = useState (1);
  const perPage = 5;
  const start = page * perPage;
  const visibleProducts = products.slice(start, start + perPage);

  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10 min-h-[90vh]">
          <div>
            <h1 className="lg:text-5xl text-3xl font-medium mb-5 leading-tight">
              Penjualan Komponen Elektronika dan Robotika
            </h1>
            <p className="text-xl mb-7 leading-relaxed">
              Selamat datang di ProTech.id, rumahnya komponen elektronik & sensor robotika.  
              Temukan solusi terbaik untuk proyek dan eksperimenmu di sini!
            </p>
            <p className="text-xl mb-7 leading-relaxed">
              Mulai dari sensor, modul, hingga kit robot lengkap semuanya tersedia di satu tempat! 
            </p>

            <ul className="mb-7 space-y-2 text-lg">
              <li className="flex items-center gap-2">
                <i className="ri-checkbox-circle-line text-sky-500 text-xl"></i>
                Produk Lengkap
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-truck-line text-sky-500 text-xl"></i>
                Pengiriman Cepat
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-tools-line text-sky-500 text-xl"></i>
                Dukungan Teknis
              </li>
            </ul>

            <div className="flex gap-4">
              <Link
                to="/tentang"
                className="bg-sky-400 px-6 py-2 rounded-full text-white font-bold hover:bg-sky-500 transition-all shadow inline-flex items-center">
                Tentang Kami <i className="ri-eye-line ms-1"></i>
              </Link>
              <a href="#produk" className="bg-indigo-600 px-6 py-2 rounded-full text-white font-bold hover:bg-indigo-700 transition-all shadow" >
                Belanja Sekarang
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={HeroImage}
              alt="Hero"
              className="w-[400px] md:w-[480px] object-contain -mt-4"
            />
          </div>
        </div>

        {/* Services Section */}
        <div id="layanan" className="services -mt-10">
          <h1 className="text-center lg:text-5xl text-3xl font-medium mb-2">Layanan</h1>
          <p className="text-center max-w-2xl mx-auto">
            Berbagai layanan terbaik untuk mendukung setiap kebutuhan proyek elektronik Anda.
          </p>
          <div className="services-box mt-10 grid md:grid-cols-3 grid-cols-1 gap-8">
            <div className="box bg-gradient-to-br from-sky-400 to-sky-500 rounded-lg shadow p-6 flex flex-col items-start text-white">
              <i className="ri-number-1 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold">Produk Lengkap</h3>
              <p>Kami menyediakan ribuan jenis komponen elektronik dari berbagai merek terpercaya dengan kualitas terjamin.</p>
            </div>
            <div className="box bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg shadow p-6 flex flex-col items-start text-white">
              <i className="ri-number-2 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold">Pengiriman Cepat & Gratis</h3>
              <p>Dapatkan pengiriman gratis untuk pembelian minimal dan pengiriman ekspres ke seluruh Indonesia.</p>
            </div>
            <div className="box bg-gradient-to-br from-indigo-400 to-indigo-500 rounded-lg shadow p-6 flex flex-col items-start text-white">
              <i className="ri-number-3 text-4xl mb-4"></i>
              <h3 className="text-xl font-bold">Dukungan Teknis 24/7</h3>
              <p>Tim ahli kami siap membantu Anda memilih komponen yang tepat dan memberikan konsultasi teknis.</p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Link 
              to="/layanan" 
              className="bg-indigo-600 px-6 py-2 rounded-full text-white font-bold hover:bg-indigo-700 transition-all shadow"
            >
              Lihat Selengkapnya →
            </Link>
          </div>
        </div>

        {/* Produk Section */}
        <div id="produk" className="produk pt-32">
          <h1 className="text-center lg:text-5xl text-3xl font-medium mb-2">Produk</h1>
          <p className="text-center">Berbagai produk unggulan kami.</p>

          <div className="produk-box mt-10 grid md:grid-cols-3 grid-cols-1 gap-8">
            {/* TypeScript otomatis tahu 'item' bertipe 'Product' */}
            {visibleProducts.map((item) => (
              <div key={item.id} className="box border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-41 object-contain bg-white p-2"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-sm font-bold text-gray-800 mb-2">Produk Tersedia</p>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <Link to="/Produk" className="bg-indigo-600 px-6 py-2 rounded-full text-white font-bold hover:bg-indigo-700 transition-all shadow">
              Lihat Semua Produk →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;