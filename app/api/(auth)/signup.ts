import { SignupSchema } from "@/backend_components/zod";
import {PrismaClient} from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt"

const prismaClient = new PrismaClient()

export const signin = async (req: NextApiRequest, res:NextApiResponse) => {
    try{
        const parsedData = SignupSchema.safeParse(req.body)
        if(!parsedData.success){
            return res.status(411).json({
                success: false,
                message: "Zod Validation Failed"
            })
        }
        const hashedPassword = await bcrypt.hash(parsedData.data?.password, 10)
        
        await prismaClient.user.create({
            data:{
                email
            }
        })
    }catch(error){
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Something went wrong while Signing Up"
        })
    }
}