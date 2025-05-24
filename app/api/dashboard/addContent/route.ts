import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    try{
        const {title, type, url} = await req.json()
        const thought = await prisma.thought.create({
            //@ts-ignore
            data:{
                adminId: "ae6a3813-e4b6-44aa-86a1-3232ca74cb74",
                title: title,
                url: url,
                type: type
            }
        })
        return NextResponse.json({
            message: "Content Added Successfull",
            thought
        })

    }catch(error){
        console.log(error)
        return NextResponse.json({
            message: "Something went wrong while adding the thought"
        })
    }
}