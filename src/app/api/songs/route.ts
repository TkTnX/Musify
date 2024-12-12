import prisma from "@/prisma/prismaClient";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const songs = await prisma.song.findMany();

    if (!songs)
      return NextResponse.json({ error: "Songs not found" }, { status: 404 });

    return NextResponse.json(songs);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};
