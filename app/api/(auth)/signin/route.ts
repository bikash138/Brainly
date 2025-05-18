import { SigninSchema } from "@/backend_components/zod"
import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from "bcrypt"

export const POST = async (req: NextRequest) => {
    try{
        const body = await req.json()
        console.log(body)
        const parsedData = SigninSchema.safeParse(body)
        if(!parsedData.success){
            return NextResponse.json(
                {success: false, message: "Zod validation Failed"},
                {status: 411}
            )
        }
        const user = await prisma.user.findFirst({
            where:{
                email: parsedData.data?.email
            }
        })
        if(!user){
            return NextResponse.json(
                {success: false, message: "User Not Registered"},
                {status: 411}
            )
        }
        const isRightPassword = await bcrypt.compare(parsedData.data.password, user.password)
        if(!isRightPassword){
            return NextResponse.json(
                {success: false, message: "Wrong Password"},
                {status: 411}
            )
        }
        return NextResponse.json(
            {message: "User Signed In", user: user.id},
            {status: 200}
        )
    }catch(error){
        console.log(error)
        return NextResponse.json(
            {success: false, message: "Internal Server Error"},
            {status: 500}
        )
    }
}