import db from "@/lib/database/db";

export async function getAllUMKM(limit?: number) {
  let query = `
    SELECT * FROM umkms
    ORDER BY created_at desc`;

  if (limit) {
    query += ` LIMIT ${limit}`;
  }

  const umkms = await db.query(query);
  return umkms[0] as [];
}

export async function getUMKMbyId(id: string) {
  const query = `
    SELECT *
    FROM umkms
    WHERE id = ?`;

  const result = await db.query(query, [id]);
  return result[0] as any;
}
