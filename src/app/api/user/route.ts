import prisma from "@/prisma/prismaClient";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const { userId } = await auth();

    if (!userId) return NextResponse.json({ message: "User not found" });

    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      include: {
        playlists: true,
      },
    });
    if (!user) return NextResponse.json({ message: "User not found" });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
};
