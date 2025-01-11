import connectDB from "@/utils/db";
import Client from "@/model/Client";
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export const POST = async (req, res) => {
  await connectDB();
  try {
    const { phone, name, email, country, subject } = await req.json();

    const data = new Client({
      phone,
      name,
      email,
      country,
      subject
    })

    await data.save()
    // Send email notification
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to:  [
        'charmessy@gmail.com', 
        process.env.EMAIL,
        'fokundem653@gmail.com'
      ],
      subject: subject,
      html: `
                <h1>Welcome To Social Shepherd!</h1> 
                <p>You have recieved a new message from ${name}</p>
                <p>Phone: ${phone}</p>
                <p>Country: ${country}</p>
                <p>Email: ${email}</p>
                <p>Date: ${
                  new Date().toLocaleString('default', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })
                }
                </p>
                <p>Time: ${new Date().toLocaleString('default', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      })
        }
                </p>
                <p>You can click <a href="https://platform-omega-two.vercel.app">here</a> to continue.</p> 
            `,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        // res.status(500).json({ message: 'Failed to send email' });
        return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
      } else { 
        console.log('Message sent: ' + info.response);
        // res.status(200).json({ message: 'Form submitted successfully' });
        return new NextResponse(JSON.stringify({ message: 'Message sent: ' + info.response }), { status: 200 });
       }
    })

    return new NextResponse(JSON.stringify(data), { status: 200 });

  } catch (error) {
    console.error('Error: ' + error);
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
  }
};

export const GET = async (req, res) => {
  await connectDB();
  try {
    const data = await Client.find();
    return new NextResponse(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 500 });
  }
};
