import { db } from "@/drizzle/db";
import { laptopTable } from "@/drizzle/schema";
import { and, between, eq, ilike } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    // ram, brand, rom, romType, processor, useType
    // Trim and normalize all search filters
    const ram = searchParams.get("ram")?.trim();
    const brand = searchParams.get("brand")?.trim();
    const rom = searchParams.get("rom")?.trim();
    const romType = searchParams.get("romType")?.trim();
    const processor = searchParams.get("processor")?.trim();
    const useType = searchParams.get("useType")?.trim();

    const limit = 16;
    const offset = (page - 1) * limit;
    const minPrice = Number(searchParams.get("minPrice") || 0);
    const maxPrice = Number(searchParams.get("maxPrice") || 1000000);

    // ✅ Only include filters that are actually present
    const filters = [];

    if (ram) filters.push(eq(laptopTable.ram, ram));
    if (brand) filters.push(eq(laptopTable.brand, brand));
    if (rom) filters.push(eq(laptopTable.romsize, rom));
    if (romType) filters.push(eq(laptopTable.romtype, romType));
    if (processor) filters.push(ilike(laptopTable.processor, `%${processor}%`));
    if (useType) filters.push(eq(laptopTable.useType, useType));

    // Always filter by price range
    filters.push(between(laptopTable.price, minPrice, maxPrice));

    const laptops = await db
      .select()
      .from(laptopTable)
      .where(and(...filters))
      .limit(limit)
      .offset(offset);

    return NextResponse.json({
      success: true,
      message: "Successfully get  all laptop",
      products: laptops,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Something went wrong in laptop products",
    });
  }
}
