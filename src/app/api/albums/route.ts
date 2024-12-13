import prisma from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);
    let page;
    let pageSize;
    if (searchParams.get("page") || searchParams.get("pageSize")) {
      page = parseInt(searchParams.get("page") || "0", 10);
      pageSize = parseInt(searchParams.get("pageSize") || "5", 10);
    }

    const albums = await prisma.album.findMany({
      include: {
        songs: {
          include: {
            artist: true,
            album: true,
          },
        },
        artist: true,
      },
      skip: page && pageSize ? page * pageSize : 0,
      take: pageSize,
    });

    return NextResponse.json(albums);
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const { data } = await req.json();
    if (!data) return NextResponse.json({ message: "Data not found" });

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
