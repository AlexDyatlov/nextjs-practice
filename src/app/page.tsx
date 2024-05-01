'use client';

import { useFormState } from 'react-dom';

import Input from '@/_ui/input';
import Container from '@/_ui/container';
import Button from '@/_ui/button';

import { sendContactForm } from '@/lib/actions';
import { initialState } from '@/lib/utils/toFormState';

export default function Home() {
  const [formState, action] = useFormState(sendContactForm, initialState);

  return (
    <main className="layout__main">
      <Container>
        <h1>Отправка формы</h1>
        <form className="form" action={action}>
          <div className="form__item">
            <Input name="name" label="Имя" formState={formState} />
          </div>
          <div className="form__item">
            <Input type="email" name="email" label="Email" formState={formState} />
          </div>
          <div className="form__item">
            <Input name="subject" label="Тема" formState={formState} />
          </div>
          <div className="form__item">
            <Input tag="textarea" name="message" label="Сообщение" formState={formState} />
          </div>
          <Button text="Отправить" type="submit" />
        </form>
      </Container>
    </main>
  );
}
