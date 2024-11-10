import { NextResponse } from "next/server";

export async function GET() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 4700));
    return NextResponse.json({
      name: "ItemA",
    });
  } catch (error) {
    throw error;
  }
}
