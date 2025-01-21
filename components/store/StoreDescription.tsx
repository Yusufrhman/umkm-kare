import MainButton from "@/components/button/MainButton";

interface StoreDescriptionProps {
  storeName: string;
  // rating: number;
  description: string;
  instagram: string;
}

export default function StoreDescription({
  storeName,
  // rating,
  description,
  instagram,
}: StoreDescriptionProps) {
  return (
    <div className="flex flex-col items-center lg:items-start gap-4 w-full lg:w-2/5">
      <h2 className="text-custom-olive-green text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wide">
        {storeName}
      </h2>
      {/* ini buat rating */}
      {/* <div className="flex items-center">
        <p className="text-custom-olive-green text-xl sm:text-2xl font-medium">
          {rating}
        </p>
        <ul className="ml-3 flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <li key={i}>
              <FaStar
                color={i < Math.round(rating) ? "#FF8700" : "#E0E0E0"}
                size={20}
              />
            </li>
          ))}
        </ul>
      </div> */}
      <div className="flex flex-col-reverse lg:flex-col items-center lg:items-start gap-5">
        <div>
          <h4 className="font-medium text-lg sm:text-xl lg:text-2xl tracking-wide">
            Deskripsi
          </h4>
          <p className="tracking-wide font-thin text-sm md:text-base text-justify lg:line-clamp-6">
            {description}
          </p>
        </div>
        <a href={`https://instagram.com/${instagram}`} target="_blank">
          <MainButton className="w-fit text-xs sm:text-sm">
            Lihat di Instagram
          </MainButton>
        </a>
      </div>
    </div>
  );
}
