import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, subject, country, phone} = req.body;
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: subject,
        html: `
            <h1>Welcome Social Shepherd!</h1> 
            <p>You have recieved a new message from ${name}</p>
            <p>Phone: ${phone}</p>
            <p>Country: ${country}</p>
            <p>Date: ${Date.now}</p>
            <p>Time: ${
              new Date().toLocaleString('default', {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true,
              })
            }</p>
            <p>You can click <a href="https://platform-omega-two.vercel.app/">here</a> to continue.</p> 
        `,
    };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ success: false, message: 'Email failed to send', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
