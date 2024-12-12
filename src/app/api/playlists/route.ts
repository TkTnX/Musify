import prisma from "@/prisma/prismaClient";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const { data } = await req.json();
    const { userId } = await auth();
    if (!data) return NextResponse.json({ message: "Data not found" });
    if (!userId) return NextResponse.json({ message: "User not found" });

    if (data && userId) {
      const playlist = await prisma.playlist.create({
        data: {
          title: data.title,
          image_url: data.image_url,
          userId,
        },
      });
      if (!playlist)
        return NextResponse.json({ message: "Playlist not created" });
      return NextResponse.json(playlist);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};

export const PATCH = async (req: NextRequest) => {
  try {
    const { data } = await req.json();
    const { userId } = await auth();
    if (!data) return NextResponse.json({ message: "Data not found" });
    if (!userId) return NextResponse.json({ message: "User not found" });

    if (data && userId) {
      const playlist = await prisma.playlist.update({
        where: {
          id: data.id,
        },
        data: {
          title: data.title,
          image_url: data.image_url,
          userId,
        },
      });
      if (!playlist)
        return NextResponse.json({ message: "Playlist not created" });
      return NextResponse.json(playlist);
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};
