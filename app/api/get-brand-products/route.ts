import { db } from "@/drizzle/db";
import { desktopTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const brand = searchParams.get("brandname");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    const offset = (page - 1) * limit;

    const res = await db
      .select()
      .from(desktopTable)
      .where(eq(desktopTable.brand, brand!));
    // .limit(limit)
    // .offset(offset);

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
