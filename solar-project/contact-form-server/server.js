const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = 3000;

require('dotenv').config();

// อ่าน SSL Certificate
// const privateKey = fs.readFileSync('/path/to/your/privatekey.pem', 'utf8');
// const certificate = fs.readFileSync('/path/to/your/certificate.pem', 'utf8');
// const ca = fs.readFileSync('/path/to/your/ca_bundle.pem', 'utf8');

// const credentials = { key: privateKey, cert: certificate, ca: ca };

// app.use(bodyParser.json());

// // ตั้งค่า Nodemailer และ Route ต่างๆ (เหมือนกับที่คุณมีในโค้ดเดิม)

// // สร้าง HTTPS Server
// const httpsServer = https.createServer(credentials, app);

// httpsServer.listen(port, () => {
//   console.log(`HTTPS Server is running on https://localhost:${port}`);
// });

// ตั้งค่า transporter สำหรับการส่งอีเมล
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // ใช้ตัวแปรสภาพแวดล้อม
    pass: process.env.EMAIL_PASS  // ใช้ตัวแปรสภาพแวดล้อม
  }
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.post('/api/contact', (req, res) => {
  const { name, phone, email, contactType, message } = req.body;

  // เนื้อหาของอีเมล
  const mailOptions = {
    from: process.env.EMAIL_USER, // ใช้ตัวแปรสภาพแวดล้อม
    to: email, // ส่งอีเมลไปยังผู้ใช้ที่กรอกข้อมูลในฟอร์ม
    subject: 'ขอบคุณที่ใช้บริการร้านหนมค่ะ',
    text: `คุณ ${name},

ข้อความของคุณ:
${message}

ขอบคุณค่ะ,
ร้านหนม`
  };

  // ส่งอีเมล
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      return res.status(500).send({ message: 'Error submitting form' });
    }
    console.log('Email sent:', info.response);
    res.status(200).send({ message: 'Form submitted successfully!' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});