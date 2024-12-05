import prisma from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const albums = await prisma.album.findMany({
      include: {
        songs: true,
        artist: true,
      },
    });

    return NextResponse.json(albums);
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    if (!data) return NextResponse.json({ message: "Data not found" });

    console.log(data);

    const album = await prisma.album.create({
      data: {
        title: data.title,
        image_url: data.image_url,
        artistId: data.artistId,
      },
    });

    if (!album) return NextResponse.json({ message: "Album not created" });

    return NextResponse.json(album);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};
