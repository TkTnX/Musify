import prisma from "@/prisma/prismaClient";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(
  req: NextApiRequest,
  { params }: { params: { id: string } }
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

    if (!song) NextResponse.json({ message: "Song not found" });

    return NextResponse.json(song);
  } catch (error) {
    console.log(error);
    NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
