import prisma from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const videos = await prisma.video.findMany({
      take: 5,
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

export const POST = async (req: NextRequest) => {
  try {
    const { data } = await req.json();
    if (!data) return NextResponse.json({ message: "Data not found" });

    const video = await prisma.video.create({
      data: {
        video_url: data.video_url,
        songId: data.songId,
      },
      include: {
        song: true,
      },
    });

    if (!video) return NextResponse.json({ message: "Video not created" });

    return NextResponse.json(video);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};
