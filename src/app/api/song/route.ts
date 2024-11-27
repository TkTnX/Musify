import prisma from "@/prisma/prismaClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  try {
    if (!data) {
      throw new Error("Data not found");
    }

    await prisma.song.create({
      data,
    });
      
    return NextResponse.json({ message: "Song created successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
