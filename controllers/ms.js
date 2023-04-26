const nodemailer = require('nodemailer');

const ms = {
    getMail: async (req, res, next) => {
        try {
            let testAccount = await nodemailer.createTestAccount();
            let transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                secure: false,
                auth: {
                    user: 'emely.breitenberg61@ethereal.email',
                    pass: 'rKPvdgq4gAvbgFejWA',
                },
            })
            let info = await transporter.sendMail({
                from: `"Varshil J. Patel" <${req.body.from}>`,
                to: req.body.to,
                subject: req.body.subject,
                text: req.body.text,
                html: "",
            });
            console.log('msg send :', info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            console.log(info);
            res.send('Mail sent');
        } catch (error) {
            console.log(error.message);
            next();
        }
    }
}

module.exports = ms;