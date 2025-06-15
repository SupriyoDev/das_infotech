import { db } from "@/drizzle/db";
import { laptopTable } from "@/drizzle/schema";
import { between, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = 12;
    const offset = (page - 1) * limit;
    const minPrice = 0;
    const maxPrice = 1000000;

    const laptops = await db
      .select()
      .from(laptopTable)
      .where(between(laptopTable.price, minPrice, maxPrice))
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
