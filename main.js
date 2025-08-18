const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

require("dotenv").config();
app.set("view engine", "ejs")

// Middleware
app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public")); // Serve your HTML, CSS, JS
const cors = require('cors');
app.use(cors());

// Route to handle form submission
app.get("/download-file",(req,res)=>{
  res.download("./assets/CV.pdf")
})
app.get('/',(req,res)=>{
  res.render("index")
})
app.post("/send", (req, res) => {
  const { firstname, lastname, email, subject, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,       // your Gmail
      pass: process.env.GMAIL_PASS,           // use App Password (not your actual password)
    },
  });
  const mailOptions = {
    from: email,
    to: "faizan1772548@gmail.com", // your receiving email
    subject: subject || "New Contact Form Message",
    text: `From: ${firstname} ${lastname}\nEmail: ${email}\n\n Message:${message}`
  };
  
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
      res.send("Error occurred, message not sent.");
    } else {
      console.log("Email sent: " + info.response);
      res.redirect("/");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
