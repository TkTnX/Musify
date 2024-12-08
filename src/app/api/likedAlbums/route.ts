import prisma from "@/prisma/prismaClient";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const { userId } = await auth();

    if (!userId) return NextResponse.json({ message: "User not found" });

    const likedAlbums = await prisma.likedAlbums.findMany({
      where: {
        userId,
      },
      include: {
        album: {
          include: {
            artist: true,
            songs: {
              include: {
                artist: true,
              },
            },
          },
        },
      },
    });

    if (!likedAlbums)
      return NextResponse.json({ message: "Liked albums not found" });

    return NextResponse.json(likedAlbums);
  } catch (error) {
    console.log(error);
    NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
};
