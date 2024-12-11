import prisma from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    const data = await req.json();
    if (!data) return NextResponse.json({ message: "Data not found" });
    const { id } = await params;
    if (!id) return NextResponse.json({ message: "Id not found" });

    let playlistSong = await prisma.playlistSongs.findFirst({
      where: {
        playlistId: Number(id),
        songId: data.songId,
      },
    });

    if (!playlistSong) {
      playlistSong = await prisma.playlistSongs.create({
        data: {
          playlistId: Number(id),
          songId: data.songId,
        },
      });
    } else {
      await prisma.playlistSongs.delete({
        where: {
          id: playlistSong.id,
        },
      });
    }

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

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    // Song id
    const data = await req.json();
    if (!data) return NextResponse.json({ message: "Data not found" });
    // Playlist id
    const { id } = await params;
    if (!id) return NextResponse.json({ message: "Id not found" });
    const playlistSong = await prisma.playlistSongs.findFirst({
      where: {
        playlistId: Number(id),
        songId: data.songId,
      },
    });

    if (!playlistSong)
      return NextResponse.json({ message: "Playlist song not found" });

    await prisma.playlistSongs.delete({
      where: {
        id: playlistSong.id,
      },
    });

    return NextResponse.json({ message: "Playlist song deleted" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};
