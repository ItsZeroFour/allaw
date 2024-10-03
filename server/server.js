import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import nodemailer from "nodemailer";

dotenv.config({ path: "./.env" });
const app = express();

/* CONSTANTS */
const PORT = process.env.PORT || 5000;
/* MIDDLEWARES */
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));

const transporter = nodemailer.createTransport({
  host: "smtp.mail.ru",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

/* ROUTES */
app.post("/sendMail", async (req, res) => {
  try {
    const { email, phone, fullName, message } = req.body;

    if (!email || !fullName || !phone || !message) {
      return alert("Ошибка! Заполните все поля");
    }

    const html = `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <h1>Новое сообщение из формы на сайте!</h1>
        <p>ФИО: ${fullName}</p>
        <p>Телефон: ${phone}</p>
        <p>E-mail: ${email}</p>
        <p>Сообщение: ${message}</p>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Новое сообщение из формы на сайте`,
      html: html,
    });

    res.send("Сообщение отправлено!");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Не удалось отправить письмо",
    });
  }
});

/* START FUNCTION */
async function start() {
  try {
    app.listen(PORT, (err) => {
      if (err) return console.log("App crashed: ", err);
      console.log(`Server started successfully! Port: ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

start();
