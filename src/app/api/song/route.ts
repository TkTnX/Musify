import prisma from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    if (!data) {
      return NextResponse.json({ message: "Data not found" });
    }

    const song = await prisma.song.create({
      data,
    });

    if (!song) return NextResponse.json({ message: "Song not created" });

    return NextResponse.json(song);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
