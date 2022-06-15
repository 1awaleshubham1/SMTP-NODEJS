process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";
const nodemailer = require("nodemailer");

const sender = nodemailer.createTransport({
  host: "smtp-mail.outlook.com", // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  auth: {
    user: "awaleshubham02022@outlook.com",
    pass: "Awale@02022",
  },
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false,
  },
});

const options = {
  from: "awaleshubham02022@outlook.com",
  to: "1awaleshubham1@gmail.com",
  subject: "IMP doc",
  text: "from awale",
  html: `
    <h1>awale shubham</h1>
    <p>today i am trying to send email from outlook to others. </p>
  `,
};

sender.sendMail(options, function (err, info) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Message sent: " + info.response);
});
