import prisma from "@/prisma/prismaClient";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const artists = await prisma.artist.findMany({ orderBy: { name: "asc" } });

    if (!artists) throw new Error("Artists not found");

    return NextResponse.json(artists);
  } catch (error) {
    console.log(error);
    NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
