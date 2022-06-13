import express from "express" 
import { prisma } from "./prisma"
import nodemailer from "nodemailer"
const app = express()

app.use(express.json())

    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "f6f453b7c66eb4",
            pass: "3f58e0e37efe22"
        }
    });

    
    app.post('/feedbacks', async (req, res)=>{

    const feedback = await prisma.feedback.create({
        data:{
            type: req.body.type,
            comment: req.body.comment,
            screeshot: req.body.screenshot,
        }
        
    })

   await transport.sendMail({
        from: 'Equipe GetFeedback <suporte@feedback.com>',
        to: 'João Victor Cunha <joaovictorcunha8@gmail.com>',
        subject: 'Novo Feedback',
        html: [
            `<div style="font-family:sans-serif;font-size: 16px; color:#111">`,
            `<p>Tipo do feedback: ${req.body.type}</p>`,
            `<p>Comentario: ${req.body.comment}</p>`,
            `</div>`
        ].join('\n')
    })
    return res.status(201).json({data: feedback})
});


    


app.listen(3333, ()=>{
    console.log("SERVER RUNNIG")
})