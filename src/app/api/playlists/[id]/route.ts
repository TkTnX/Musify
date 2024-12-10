import prisma from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

  // TODO: ДОДЕЛАТЬ

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    const { id } = await params;
    if (!id) return NextResponse.json({ message: "Id not found" });


  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};

export const POST = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    const data = await req.json();
    if (!data) return NextResponse.json({ message: "Data not found" });
    const { id } = await params;
    if (!id) return NextResponse.json({ message: "Id not found" });

    const playlistSong = await prisma.playlistSongs.create({
      data: {
        playlistId: Number(id),
        songId: data.songId,
      },
    });

    if (!playlistSong)
      return NextResponse.json({ message: "Playlist song not found" });

    return NextResponse.json(playlistSong);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};
