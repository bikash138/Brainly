import { SignupSchema } from "@/backend_components/zod";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json();
        const parsedData = SignupSchema.safeParse(body);
        if (!parsedData.success) {
            return NextResponse.json(
                { success: false, message: "Zod Validation Failed" },
                { status: 411 }
            );
        }
        const hashedPassword = await bcrypt.hash(parsedData.data.password, 10);

        await prisma.user.create({
            data: {
                name: parsedData.data.name,
                email: parsedData.data.email,
                password: hashedPassword
            }
        });
        return NextResponse.json(
            { success: true, message: "Sign Up Successfull" },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { success: false, message: "Something went wrong while Signing Up" },
            { status: 500 }
        );
    }
};