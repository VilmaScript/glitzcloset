// This is a Next.js API route that fetches product data from Sanity CMS.
// It supports pagination and filtering by category. The route is defined using the new app directory structure in Next.js 13.
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page")) || 1;
    const limit = Number(searchParams.get("limit")) || 8;
    const category = searchParams.get("category");

    let query;
    if (category && category !== "All") {
      query = groq`*[_type == "product" && category == $category] | order(_createdAt asc)`;
    } else {
      query = groq`*[_type == "product"] | order(_createdAt asc)`;
    }

    const data = await client.fetch(query, { category });

    let paginatedData = data;
    if (category === "All") {
      const start = (page - 1) * limit;
      const end = start + limit;
      paginatedData = data.slice(start, end);
    }

    return Response.json({
      products: paginatedData,
      total: data.length,
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
