import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {

    const body = await req.json();

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    const mailOptions = {
        from: process.env.SMTP_USER, // sender address
        to: body.email, // list of recipients
        subject: `Info masuk dari ${body.email}`, // subject line
        text: `Hallo saya ${body.nama} ingin melakukan test drive mobil ${body.typeMobil} tanggal ${body.tanggal} bisa dibantu ?`, // plain text body
    }

    try {

        const info = await transporter.sendMail(mailOptions);

        if (info.rejected.length > 0) {
            console.warn("Some recipents were rejected :", info.rejected);
        }

        return NextResponse.json({ message: "Pesan terkirim" }, { status: 200 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ Error: "Gagal mengirim" }, { status: 500 });
    }
}