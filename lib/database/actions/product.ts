import db from "@/lib/database/db";

export async function getAllProductByUMKMid(umkmId: string, limit?: number) {
  try {
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

    // Ensure the query returns valid data
    if (!products || products.length === 0) {
      throw new Error("No products found.");
    }

    // Transform image_url from a comma-separated string to an array
    const result = products[0].map((product: any) => {
      return {
        ...product,
        image_url: product.image_url ? product.image_url.split(",") : [], // Convert string to array
      };
    });

    return result;
  } catch (error) {
    console.error("Error in getAllProductByUMKMid:", error);
    throw new Error("An error occurred while fetching the products.");
  }
}

export async function getProductById(id: string) {
  try {
    const query = `
      SELECT p.*, 
             GROUP_CONCAT(pi.image_url ORDER BY pi.id) AS image_url
      FROM products p
      LEFT JOIN product_images pi ON p.id = pi.product_id
      WHERE p.id = ?
      GROUP BY p.id`;

    const products = (await db.query(query, [id])) as any;

    // Check if any product was found
    if (!products || products.length === 0 || products[0].length === 0) {
      return null; // If no product is found, return null
    }

    // Map the image_url to an array and set main_image
    const product = products[0][0];
    const formattedProduct = {
      ...product,
      image_url: product.image_url ? product.image_url.split(",") : [],
    };

    return formattedProduct;
  } catch (error) {
    console.error("Error in getProductById:", error);
    throw new Error("An error occurred while fetching the product by ID.");
  }
}
