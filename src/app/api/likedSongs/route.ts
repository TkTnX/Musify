import prisma from "@/prisma/prismaClient";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const { userId } = await auth();

    if (!userId) throw new Error("User not found");

    const likedSongs = await prisma.likedSongs.findMany({
      where: {
        userId,
      },
      include: {
        song: {
          include: {
            artist: true,
            album: true,
          },
        },
      },
    });

    if (!likedSongs) throw new Error("Liked songs not found");

    return NextResponse.json(likedSongs);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();

    if (!data) {
      return NextResponse.json({ message: "Data not found" });
    }

    const { userId } = await auth();

    if (!userId) throw new Error("User not found");

    let likedSong = await prisma.likedSongs.findFirst({
      where: {
        userId,
        songId: data.songId,
      },
    });

    if (likedSong) {
      await prisma.likedSongs.delete({
        where: {
          id: likedSong.id,
        },
      });
    } else {
      likedSong = await prisma.likedSongs.create({
        data: {
          userId,
          songId: data.songId,
        },
      });
    }

    return NextResponse.json(likedSong);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};
