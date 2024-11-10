import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({
      name: "ItemB",
    });
  } catch (error) {
    throw error;
  }
}
