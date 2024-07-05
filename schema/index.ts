import * as z from "zod"

export const ContactSchema = z.object ({
    
    name: z.string().min(2,{
        message: "Name must be at least 2 characters long"
    }),
    email: z.string().email({
        message: "please enter a valid email"
    }),
    subject: z.string().min(2, {
        message: "Subject must be at least 2 characters long"
    }),
    message: z.string().min(2).max(2000, {
        message: "Message must be between 2 and 2000 characters long"
    })
})