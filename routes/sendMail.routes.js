const { Router } = require('express');
const nodemailer = require('nodemailer');

const router = Router();

router.post('/', async (req, res) => {
    try {

        // *
        let testEmailAccount = await nodemailer.createTestAccount();
        
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: testEmailAccount.user,
                pass: testEmailAccount.pass,
            },
        });
        // *

        let result = await transporter.sendMail({
            from: '"Форма на сайте" <nodejs@example.com>',
            to: 'rbru-metrika@yandex.ru',
            subject: 'Лид с сайта',
            text: `ФИО: ${req.body.fullname}, телефон: ${req.body.phoneNumber}, почта: ${req.body.email}`,
            html: `<p>ФИО: ${req.body.fullname}</p><p>телефон: ${req.body.phoneNumber}</p><p>почта: ${req.body.email}</p>`,
        });

        console.log(result);

        res.status(200).json(JSON.stringify({ ok: true }))
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router;
