import nodemailer from 'nodemailer';

export async function sendMail({
  name,
  email,
  subject,
  message
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const { EMAIL, EMAIL_PASS } = process.env;

  if (!EMAIL || !EMAIL_PASS) {
    console.error('Отсутствуют переменные окружения для отправки почты');
    return;
  }

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL,
      pass: EMAIL_PASS
    }
  });

  try {
    await transport.sendMail({
      from: EMAIL,
      to: EMAIL,
      subject: `Сообщение от ${name}: ${subject}`,
      text: `Имя: ${name}, почта: ${email}, сообщение: ${message}`
    });
  } catch (error) {
    console.error('Ошибка при отправке письма:', error);
  }
}
