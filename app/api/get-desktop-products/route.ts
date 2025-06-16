import { db } from "@/drizzle/db";
import { desktopTable } from "@/drizzle/schema";
import { and, between, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    console.log("search-param", searchParams.get("category"));

    const category = searchParams.get("category");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const brand = searchParams.get("brand");
    const minPrice = Number(searchParams.get("minPrice") || 0);
    const maxPrice = Number(searchParams.get("maxPrice") || 100000);
    const offset = (page - 1) * limit;
    const filters = [];
    if (category) filters.push(eq(desktopTable.category, category));
    if (brand) filters.push(eq(desktopTable.brand, brand));
    filters.push(between(desktopTable.price, minPrice, maxPrice));

    const res = await db
      .select()
      .from(desktopTable)
      .where(and(...filters))
      .limit(limit)
      .offset(offset);

    console.log(res.length);

    return NextResponse.json({
      message: "successfully",
      products: res,
    });
  } catch (error) {
    return NextResponse.json({
      error,
      message: "Internal server error",
    });
  }
}
