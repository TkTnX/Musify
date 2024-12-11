import prisma from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    const { id } = await params;
    if (!id) return NextResponse.json({ message: "Id not found" });

    await prisma.playlist.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({ message: "Playlist deleted" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};
