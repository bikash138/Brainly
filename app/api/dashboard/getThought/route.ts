import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    try{
        const thought = await prisma.thought.findMany({
            
            where: {
                adminId: "ae6a3813-e4b6-44aa-86a1-3232ca74cb74"
            },
            select:{
                title: true,
                url: true,
                type: true,
            }
        })
        return NextResponse.json({
            message: "All thoughts fetched Successfully",
            thought
        })

    }catch(error){
        console.log(error)
        return NextResponse.json({
            message: "Something went wrong while fetching all thoughts"
        })
    }
}