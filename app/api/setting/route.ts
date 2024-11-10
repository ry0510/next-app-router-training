import { ItemUnion } from "@/types/setting";
import { NextResponse } from "next/server";

export async function GET() {
  const data: { item: ItemUnion; size: number }[] = [
    {
      item: "ItemA",
      size: 100,
    },
    {
      item: "ItemB",
      size: 50,
    },
  ];
  try {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return NextResponse.json(data);
  } catch (error) {
    throw error;
  }
}
