import StoreCard from "@/components/cards/StoreCard";
import { getAllUMKM } from "@/lib/database/actions/umkm";
import Link from "next/link";

export const revalidate = 10;

export default async function UMKMList() {
  const umkms = await getAllUMKM(6);

  return (
    <ul className="flex sm:grid place-items-start sm:justify-self-center sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 my-8 md:mx-8">
      {umkms.map((data: any, index: any) => {
        return (
          <li
            className="w-full h-full min-w-[17.5rem] max-w-[20rem] md:max-w-[24rem] lg:max-w-[28rem]"
            key={index}
          >
            <Link href={`/umkm/${data.id as string}`}>
              <StoreCard
                imageSrc={`${process.env.ADMIN_URL}storage/${data.main_image}`}
                title={data.umkm_name}
                description={data.description}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
