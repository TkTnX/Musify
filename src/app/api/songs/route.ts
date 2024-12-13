import prisma from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "0", 10);
    const pageSize = parseInt(searchParams.get("pageSize") || "5", 10);

    const songs = await prisma.song.findMany({
      skip: page * pageSize, // Пропускаем песни предыдущих страниц
      take: pageSize, // Берем указанное количество
      include: { artist: true, album: true },
    });

    if (!songs || songs.length === 0) {
      return NextResponse.json(
        { error: "No songs found for this page" },
        { status: 404 }
      );
    }

    return NextResponse.json(songs);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};
