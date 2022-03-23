const nodemailer = require("nodemailer");

export default async function handler(req, res) {
	const { name, email, message } = req.body;

	const transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: process.env.EMAIL,
			pass: process.env.PASS,
		},
	});

	try {
		const responseEmail = await transporter.sendMail({
			from: email,
			to: process.env.EMAIL,
			subject: "Portfolio Menssage",
			html: `
<h1>Nuevo mensaje desde mi portfolio</h1><br>
<br>
<p><strong>Name:</strong>${name}</p><br>
<p><strong>Email:</strong>${email}</p><br>
<p><strong>Message:</strong>${message}</p><br>
`,
		});
	} catch (error) {
		console.log(eror);
	}
	res.status(200).json(req.body);
}
