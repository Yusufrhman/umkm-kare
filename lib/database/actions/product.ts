import db from "@/lib/database/db";

export async function getAllProductByUMKMid(umkmId: string, limit?: number) {
  // Base query
  let query = `
    SELECT p.*, 
           GROUP_CONCAT(pi.image_url ORDER BY pi.created_at) AS image_url
    FROM products p
    LEFT JOIN product_images pi ON pi.product_id = p.id
    WHERE p.umkm_id = ?
    GROUP BY p.id
    ORDER BY p.created_at desc
  `;

  // If limit is provided, modify the query to include it
  if (limit) {
    query += ` LIMIT ${limit}`;
  }

  // Execute the query and fetch the products
  const products = (await db.query(query, [umkmId])) as any;

  // Transform image_url from a comma-separated string to an array
  const result = products[0].map((product: any) => {
    return {
      ...product,
      image_url: product.image_url ? product.image_url.split(",") : [], // Convert string to array
    };
  });

  return result;
}


export async function getProductById(id: string) {
  const query = `
    SELECT p.*, 
           GROUP_CONCAT(pi.image_url ORDER BY pi.id) AS image_url
    FROM products p
    LEFT JOIN product_images pi ON p.id = pi.product_id
    WHERE p.id = ?
    GROUP BY p.id`;

  const products = await db.query(query, [id]) as any;

  if (products[0].length === 0) {
    return null; // Jika tidak ada produk ditemukan
  }

  // Map the image_url to an array and set main_image
  const product = products[0][0];
  const formattedProduct = {
    ...product,
    image_url: product.image_url ? product.image_url.split(",") : [],
  };

  return formattedProduct;
}
