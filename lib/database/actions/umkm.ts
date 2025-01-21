import db from "@/lib/database/db";
import { cache } from "react";
import { unstable_cache as nextCache } from "next/cache";

export const getAllUMKM = nextCache(
  cache(async function getAllUMKM(limit?: number) {
    let query = `
    SELECT * FROM umkms
    ORDER BY created_at DESC`;

    if (limit) {
      query += ` LIMIT ${limit}`;
    }

    try {
      const umkms = await db.query(query, { cache: "no-store" });
      return umkms[0] as [];
    } catch (error) {
      throw new Error("Failed to fetch UMKM data");
    }
  }),
  ["umkms"],
  { revalidate: 5 }
);

export async function getUMKMbyId(id: string) {
  const query = `
    SELECT *
    FROM umkms
    WHERE id = ?`;

  const result = await db.query(query, [id]);
  return result[0] as any;
}
