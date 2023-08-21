import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function POST(req: NextRequest) {
    const { name, email, password } = await req.json();

    if (!password || password.length < 6) {
        return NextResponse.json(
            {
                message: "Password must be at least 6 characters",
            },
            { status: 400 }
        );
    }

    try {
        const user = await prisma.user.findFirst({ where: { email } });

        if (user)
            return NextResponse.json(
                { message: "User already exist" },
                { status: 409 }
            );
        const createdUser = await prisma.user.create({
            data: { email, name },
        });

        return NextResponse.json({
            message: "User registered",
            data: createdUser,
        });
    } catch (e) {
        if (e instanceof Error) {
            return NextResponse.json(
                {
                    message: e.message,
                },
                { status: 400 }
            );
        }
    }
}
