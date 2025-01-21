"use server";
import STOREBANNER from "@/public/dev/store-banner.png";
import StoreBanner from "@/components/store/StoreBanner";

import StoreDescription from "@/components/store/StoreDescription";

import StoreGallery from "@/components/store/StoreGallery";
import H3 from "@/components/title/H3";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import { getUMKMbyId } from "@/lib/database/actions/umkm";
import { getAllProductByUMKMid } from "@/lib/database/actions/product";
import { notFound } from "next/navigation";

const storeData = {
  rating: 4.7,
  description:
    "Ghaniya Furniture menawarkan berbagai furnitur berkualitas dengan desain khas yang menggabungkan sentuhan modern dan tradisional. Dibuat dari material pilihan oleh pengrajin berpengalaman, setiap produk menghadirkan kenyamanan, daya tahan, dan estetika yang sempurna untuk melengkapi keindahan rumah Anda.",
  banner: STOREBANNER.src,
  gallery_images: [
    STOREBANNER.src,
    STOREBANNER.src,
    STOREBANNER.src,
    STOREBANNER.src,
    STOREBANNER.src,
    STOREBANNER.src,
    STOREBANNER.src,
    STOREBANNER.src,
    STOREBANNER.src,
  ],
  products: [],
};

export type paramsType = Promise<{ id_toko: string }>;
export default async function StorePage({ params }: { params: paramsType }) {
  const { id_toko } = await params;

  const umkmData = await getUMKMbyId(id_toko);

  if (!umkmData || umkmData.length < 1) {
    notFound();
  }

  const productsData = await getAllProductByUMKMid(id_toko, 12);

  return (
    <main className="min-h-[100vh]">
      <section>
        <StoreBanner
          imageSrc={`${process.env.ADMIN_URL}storage/${umkmData[0].main_image}`}
          storeName={umkmData[0].umkm_name}
        />
      </section>
      <section className="flex flex-col lg:flex-row items-center justify-center gap-10 my-10 mx-0 sm:mx-2 md:mx-4 lg:mx-10">
        <StoreDescription
          storeName={umkmData[0].umkm_name}
          // rating={storeData.rating}
          description={umkmData[0].description}
          instagram={umkmData[0].instagram}
        />
        <div className="w-full lg:w-3/5 h-fit">
          <StoreGallery images={storeData.gallery_images} />
        </div>
      </section>

      <section className="my-12 mx-0 sm:mx-5 md:mx-10 lg:mx-20">
        <H3 className="text-center via-custom-olive-green">Produk</H3>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-5 my-3 sm:my-4 md:my-6 lg:my-8">
          {productsData.map((product: any, index: any) => (
            <li
              key={product.id + product.name}
              className="w-full tracking-wide"
            >
              <Link href={`/produk/${product.id}`}>
                <ProductCard
                  imageSrc={`${process.env.ADMIN_URL}storage/${product.image_url[0]}`}
                  name={product.name}
                  price={product.price}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
