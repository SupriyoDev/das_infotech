import { db } from "@/drizzle/db";
import { desktopTable } from "@/drizzle/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const desktopId = searchParams.get("desktopId");

    if (!desktopId) {
      return NextResponse.json({
        success: false,
        error: "Something went wrong",
      });
    }

    const [res] = await db
      .select()
      .from(desktopTable)
      .where(eq(desktopTable.id, desktopId));

    return NextResponse.json({
      success: true,
      desktop: res,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: "Something went wrong",
    });
  }
}
