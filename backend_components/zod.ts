import { z } from "zod";

export const SignupSchema = z.object({
    email: z.string().email(),
    password: z.string(),
    name: z.string().min(3)
})

export const SigninSchema = z.object({
    email: z.string().email(),
    password: z.string(),
})
