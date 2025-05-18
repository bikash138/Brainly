import { NextApiRequest, NextApiResponse } from "next";

export const signin = (req: NextApiRequest, res:NextApiResponse) => {
    try{
        const {email, name, password} = req.body
        
    }catch(error){
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Something went wrong while Signing Up"
        })
    }
}