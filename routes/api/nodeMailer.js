const nodemailer = require('nodemailer')
const { Thanks } = require("./ThanksTemplate");
const { getMaxListeners } = require('../../models/gear');

const getEmailData = (to, name, template) => {
    let data = null;

    switch (template) {
      case "hello":
        data = {
          from: "Meeting Your (AV) Needs <avneeds@example.com",
          to,
          subject: `Hello ${name}`,
          html: Hello(),
        }
        break;

      case "thanks":
        data = {
          from: "Meeting Your (AV) Needs <avneeds@example.com",
          to,
          subject: `Thanks ${name}`,
          html: Thanks(),
        }
        break;
        default:
            data;
    }
    return data;

}

const sendEmail = (to, name, type) => {
    
    let smtpTransport = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "aryanna.ruecker42@ethereal.email",
        pass: "gdpDGewsnrE1WQRGe7",
      },

      //     service: "gmail",
      //     host: "smtp.gmail.com",
      //     port: 587,
      //     secure: true,
      //     auth: {
      //   user: "avneeds42@gmail.com",
      //   pass: "bootcamp2020"
      //     }
    });

    const mail = getEmailData(to,name,type)

    smtpTransport.sendMail(mail, function(error,response) {
        if(error){
            console.log(error)
        } else {
            console.log("Email sent successfully")
        }
        smtpTransport.close();
    })
}

module.exports = { sendEmail }