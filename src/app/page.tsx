'use client';
import { useState } from 'react';

import Input from '@/_ui/input';
import Container from '@/_ui/container';

const initValues = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const initState = { values: initValues };

export default function Home() {
  const [state, setState] = useState(initState);
  const { values } = state;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setState(prevState => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value
      }
    }));
  };

  const onSubmit = async () => {
    setState(prevState => ({
      ...prevState
    }));
  };

  return (
    <main className="layout__main">
      <h1>Отправка формы</h1>
      <Container>
        <form className="form">
          <div className="form__item">
            <Input name="name" label="Имя" onChange={handleInputChange} />
          </div>
          <div className="form__item">
            <Input type="email" name="email" label="Email" onChange={handleInputChange} />
          </div>
          <div className="form__item">
            <Input name="subject" label="Тема" onChange={handleInputChange} />
          </div>
          <div className="form__item">
            <Input tag="textarea" name="message" label="Сообщение" onChange={handleInputChange} />
          </div>

          <button
            type="submit"
            disabled={!values.name || !values.email || !values.subject || !values.message}
            onClick={onSubmit}
          >
            Отправить
          </button>
        </form>
      </Container>
    </main>
  );
}
