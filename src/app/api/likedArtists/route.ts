import prisma from "@/prisma/prismaClient";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ message: "User not found" });

    const likedArtists = await prisma.likedArtists.findMany({
      where: {
        userId,
      },
      include: {
        artist: true,
      },
    });

    if (!likedArtists)
      return NextResponse.json({ message: "Liked artists not found" });

    return NextResponse.json(likedArtists);
  } catch (error) {
    console.log(error);
    NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    if (!data) return NextResponse.json({ message: "Data not found" });

    const { userId } = await auth();
    if (!userId) return NextResponse.json({ message: "User not found" });

    let likedArtist = await prisma.likedArtists.findFirst({
      where: {
        artistId: data.artistId,
        userId,
      },
      include: {
        artist: true,
      },
    });

    if (likedArtist) {
      await prisma.likedArtists.delete({
        where: {
          id: likedArtist.id,
        },
      });
    } else {
      likedArtist = await prisma.likedArtists.create({
        data: {
          userId,
          artistId: data.artistId,
        },
        include: {
          artist: true,
        },
      });
    }

    return NextResponse.json(likedArtist);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};
