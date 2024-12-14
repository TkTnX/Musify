import prisma from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const artists = await prisma.artist.findMany({ orderBy: { name: "asc" } });

    if (!artists) return NextResponse.json({ message: "Artists not found" });

    return NextResponse.json(artists);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    if (!data) return NextResponse.json({ message: "Data not found" });

    const artist = await prisma.artist.create({ data });

    return NextResponse.json(artist);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
