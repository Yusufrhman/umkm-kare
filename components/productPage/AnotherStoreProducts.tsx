"use server";
import Link from "next/link";
import ProductCard from "../product/ProductCard";
import { getAllProductByUMKMid } from "@/lib/database/actions/product";

export default async function AnotherStoreProducts({
  umkmId,
}: {
  umkmId: string;
}) {
  const products = await getAllProductByUMKMid(umkmId, 4);
  return (
    <ul className="grid grid-cols-4 gap-4 overflow-scroll">
      {products.map((product: any, index: number) => (
        <li key={index} className="min-w-[12.5rem] w-full tracking-wide">
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
  );
}
