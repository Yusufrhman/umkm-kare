import Image from "next/image";
import MainButton from "../button/MainButton";

interface StoreCardProps {
  className?: string;
  imageSrc: string; // Path gambar harus berupa string
  title: string; // Judul toko atau produk
  description: string; // Deskripsi toko atau produk
}
const StoreCard: React.FC<StoreCardProps> = ({
  className,
  imageSrc,
  title,
  description,
}) => {
  return (
    <div
      className={`border border-custom-sage-green p-4 rounded-lg h-full group bg-white shadow-lg hover:shadow-xl transition-shadow ${className}`}
    >
      <div className="w-full aspect-video rounded-md overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform"
          width={300}
          height={200}
          priority
        />
      </div>
      <div className="flex justify-between items-center mt-4">
        <h4 className="text-base lg:text-lg xl:text-xl font-semibold line-clamp-1">
          {title}
        </h4>
        <MainButton className="text-sm xl:text-base">Lihat Toko</MainButton>
      </div>
      <p className="text-gray-700 text-sm md:text-base font-light tracking-wide mt-2 line-clamp-3">
        {description}
      </p>
    </div>
  );
};
export default StoreCard