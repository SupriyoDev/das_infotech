import { db } from "@/drizzle/db";
import { laptopTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const laptopId = searchParams.get("laptopId");

    if (!laptopId) {
      return NextResponse.json({
        success: false,
        error: "Something went wrong",
      });
    }

    const [laptop] = await db
      .select()
      .from(laptopTable)
      .where(eq(laptopTable.id, laptopId));

    return NextResponse.json({
      laptop,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      error: "Something went wrong",
    });
  }
}
