import prisma from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    if (!id) return NextResponse.json({ message: "Id not found" });

    const song = await prisma.song.findFirst({
      where: {
        id: Number(id),
      },
      include: {
        album: true,
        artist: true,
      },
    });

    if (!song) return NextResponse.json({ message: "Song not found" });

    return NextResponse.json(song);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
