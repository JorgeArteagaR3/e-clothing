import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function POST(req: NextRequest) {
    const { fullname, email, password } = await req.json();

    if (!password || password.length < 6) {
        return NextResponse.json(
            {
                message: "Password must be at least 6 characters",
            },
            { status: 400 }
        );
    }

    try {
        const userExists = await prisma.user.findFirst({ where: { email } });

        if (userExists)
            return NextResponse.json(
                { message: "Email already exists" },
                { status: 409 }
            );

        return NextResponse.json({ data: userExists });
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
