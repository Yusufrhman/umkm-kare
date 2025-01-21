import Image from "next/image";
import { HighlightCard } from "@/components/cards/HighlightCard";
import KOPI from "@/public/dev/kopi.png";
import { MdFastfood } from "react-icons/md";
import H3 from "../title/H3";

export default function HighlightSection() {
  return (
    <section className="my-10 gap-4 sm:gap-8  md:gap-16 mx-0 sm:mx-4 md:mx-10 h-fit flex flex-col lg:flex-row items-center justify-center">
      <div className="flex flex-col justify-normal lg:justify-between  lg:w-[55%] lg:h-[25rem] 2xl:h-[27.5rem]">
        <div>
          <H3>UMKM Desa Kare, Menyajikan Produk Lokal yang Berbeda</H3>
          <p className="text-sm lg:text-base text-black tracking-widest text-justify mt-3">
            Jelajahi pilihan produk khas dari UMKM Desa Kare, dari kerajinan
            tangan unik hingga kuliner tradisional. Setiap produk membawa
            kekayaan budaya dan kualitas asli dari para pelaku usaha lokal.
          </p>
        </div>
        <ul className="flex flex-col sm:flex-row gap-4 h-fit mt-5 max-w-[80rem]">
          <li className="w-full h-fit">
            <HighlightCard.Root className="h-fit">
              <HighlightCard.Icon>
                <MdFastfood size={24} />
              </HighlightCard.Icon>
              <HighlightCard.Title className="text-lg md:text-xl lg:text-2xl">
                Kuliner Khas Kare
              </HighlightCard.Title>
              <HighlightCard.Description className="line-clamp-3 text-sm md:text-base">
                Produk kami dibuat dengan bahan-bahan alami dan prinsip
                keberlanjutan untuk menjaga lingkungan tetap lestari.
              </HighlightCard.Description>
            </HighlightCard.Root>
          </li>
          <li className="w-full h-fit">
            <HighlightCard.Root className="h-fit">
              <HighlightCard.Icon>
                <MdFastfood size={24} />
              </HighlightCard.Icon>
              <HighlightCard.Title className="text-lg md:text-xl lg:text-2xl">
                Kuliner Khas Kare
              </HighlightCard.Title>

              <HighlightCard.Description className="line-clamp-3 text-sm md:text-base">
                Produk kami dibuat dengan bahan-bahan alami dan prinsip
              </HighlightCard.Description>
            </HighlightCard.Root>
          </li>
        </ul>
      </div>
      <div className="h-[25rem] w-full lg:w-fit lg:h-full">
        <div className="h-[25rem] col-span-5 relative w-full lg:w-[25rem]  xl:w-[30rem] flex ">
          <Image
            src={KOPI}
            className="object-cover object-left-bottom w-full h-full rounded-lg"
            alt="kopi kare enak"
            layout="fill"
            objectFit="cover"
          />
          <HighlightCard.Root className="w-[60%] gap-0 md:gap-2 sm:h-[12.5rem] 2xl:h-[12.5rem] absolute top-0 right-0 m-4 aspect-auto sm:aspect-[4/2] lg:aspect-[7/5]">
            <HighlightCard.Icon>
              <MdFastfood size={24} />
            </HighlightCard.Icon>
            <HighlightCard.Title className="text-lg md:text-xl lg:text-2xl">
              Kuliner Khas Kare
            </HighlightCard.Title>
            <HighlightCard.Description className="line-clamp-4 text-sm md:text-base">
              Produk kami dibuat dengan bahan-bahan alami dan prinsip
              keberlanjutan untuk menjaga lingkungan tetap lestari. Produk kami
              dibuat dengan bahan-bahan alami dan prinsip keberlanjutan untuk
              menjaga lingkungan tetap lestari. Produk kami dibuat dengan
              bahan-bahan alami dan prinsip keberlanjutan untuk menjaga
              lingkungan tetap lestari.
            </HighlightCard.Description>
          </HighlightCard.Root>
        </div>
      </div>
    </section>
  );
}
