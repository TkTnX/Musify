import prisma from "@/prisma/prismaClient";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = await params;
    if (!id) return NextResponse.json({ message: "Id not found" });

    const { userId } = await auth();
    if (!userId) return NextResponse.json({ message: "User not found" });

    let likedAlbum = await prisma.likedAlbums.findFirst({
      where: {
        userId,
        albumId: Number(id),
      },
    });

    if (!likedAlbum) {
      likedAlbum = await prisma.likedAlbums.create({
        data: {
          userId,
          albumId: Number(id),
        },
      });
    } else {
      await prisma.likedAlbums.delete({
        where: {
          id: likedAlbum.id,
        },
      });
    }

    return NextResponse.json(likedAlbum);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};
