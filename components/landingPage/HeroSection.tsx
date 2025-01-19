import Carousel from "@/components/carousel/Carousel";

import { FaLocationDot } from "react-icons/fa6";
import MainButton from "@/components/button/MainButton";

import CAROUSEL from "@/public/dev/carousel.png";


const dummyItems = [
  {
    title: "Mari Kenali dan Dukung UMKM Desa Kare",
    image: CAROUSEL,
  },
  {
    title: "Pentingnya Pemberdayaan UMKM dalam Mendorong Ekonomi Lokal",
    image: CAROUSEL,
  },
  {
    title: "Inovasi Produk UMKM Desa yang Membanggakan",
    image: CAROUSEL,
  },
  {
    title: "Meningkatkan Potensi UMKM Desa Melalui Teknologi dan Kolaborasi",
    image: CAROUSEL,
  },
];

export default function HeroSection() {
  return (
    <>
      <div className="aspect-video max-h-[30rem] w-full">
        <Carousel items={dummyItems} className="" />
      </div>
      <div className="w-full h-fit px-4 py-3 sm:p-4 md:px-8 md:py-8 bg-gradient-to-r from-custom-dark-green via-custom-dark-green to-custom-olive-green my-5 rounded-b-xl flex flex-col sm:flex-row items-center justify-start">
        <section className="sm:w-[30%] md:w-[25%] lg:w-[20%] flex sm:flex-col items-start w-full justify-between sm:justify-center sm:pr-5 mb-4 sm:mb-0">
          <section className="flex gap-1  md:gap-4 items-center justify-start w-fit">
            <FaLocationDot color="white" className="text-xl md:text-5xl" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-Grenze-Gotisch text-white w-fit">
              Desa Kare
            </h1>
          </section>
          <a
            href="https://maps.app.goo.gl/CVprZFof3Vg6P7ph9"
            target="_blank"
            rel="noopener noreferrer"
            className=" sm:mt-4 w-fit"
          >
            <MainButton reversed className="text-sm md:text-base p-1">Lihat di Maps</MainButton>
          </a>
        </section>
        <section className="flex gap-4 items-center justify-center sm:w-[70%] md:w-[75%] lg:w-[80%] sm:border-l border-white sm:pl-5">
          <p className="text-white text-sm lg:text-base text-justify">
            Desa Kare Kecamatan Kare Kabupaten Madiun terletak di Pegunungan
            Wilis paling tenggara Kabupaten Madiun berbatasan dengan Kabupaten
            Ponorogo, Trenggalek, Tulungagung, Nganjuk dan Kediri. Potensi flora
            dan fauna yang ada di Pegunungan Wilis serta kekayaan alam Desa
            Wisata Kare menguatkan Desa Wisata Kare untuk fokus berkomitmen pada
            konservasi alam dan ikut berperan aktif menjaga ekosistem alam.
            Banyak daya tarik wisata yang bersifat alam, budaya dan buatan.
            Untuk itu perlu kebersamaan dalam pengelolaan alam yang ada di Desa
            Kare melalui berbagai sektor dan inovasi yang terus menerus untuk
            melestarikan wisata alam tersebut guna kesejahteraan masyarakat dan
            mewujudkan pariwisata yang berkelanjutan sehingga Desa Kare mampu
            membangun desa dari Pariwisata.
          </p>
        </section>
      </div>
    </>
  );
}
