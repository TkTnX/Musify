import prisma from "@/prisma/prismaClient";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ message: "User not found" });

    const videos = await prisma.video.findMany({
      take: 5,
      where: {
        song: {
          likedSongs: {
            some: {
              userId,
            },
          },
        },
      },
      include: {
        song: {
          include: {
            artist: true,
            album: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (!videos) return NextResponse.json({ message: "Videos not found" });

    return NextResponse.json(videos);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};
