import Input from '@/_ui/input';
import Container from '@/_ui/container';

import { sendContactForm } from '@/lib/actions';

export default function Home() {
  return (
    <main className="layout__main">
      <h1>Отправка формы</h1>
      <Container>
        <form className="form" action={sendContactForm}>
          <div className="form__item">
            <Input name="name" label="Имя" />
          </div>
          <div className="form__item">
            <Input type="email" name="email" label="Email" />
          </div>
          <div className="form__item">
            <Input name="subject" label="Тема" />
          </div>
          <div className="form__item">
            <Input tag="textarea" name="message" label="Сообщение" />
          </div>

          <button type="submit">Отправить</button>
        </form>
      </Container>
    </main>
  );
}
