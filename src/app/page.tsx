import Input from '@/_ui/input';
import Container from '@/_ui/container';
import Button from '@/_ui/button';

import { sendContactForm } from '@/lib/actions';

export default function Home() {
  return (
    <main className="layout__main">
      <Container>
        <h1>Отправка формы</h1>
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

          <Button text="Отправить" type="submit" />
        </form>
      </Container>
    </main>
  );
}
