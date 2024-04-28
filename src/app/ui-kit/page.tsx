import Button from '@/_ui/button';
import Container from '@/_ui/container';
import Input from '@/_ui/input';

export default function UiPage() {
  return (
    <Container>
      <h1>Страница ui-kit компонентов</h1>

      <br />

      <h2>input</h2>
      <br />

      <h3>input по умолчанию</h3>
      <Input label="label" name="Поле" />

      <br />

      <h3>input заполненный</h3>
      <Input label="label" name="Поле" initValue="Текст в value" />

      <br />
      <h3>input error</h3>
      <Input label="label" name="Поле" error errorText="Ошибка" />

      <br />
      <h3>input disabled</h3>
      <Input label="label" name="Поле" disabled />
      <Input label="label" name="Поле" initValue="Текст в value" disabled />

      <br />
      <h2>textarea</h2>
      <br />
      <h3>textarea заполненный</h3>
      <Input tag="textarea" label="label" name="Поле" initValue="Текст в value" />

      <br />
      <h2>button</h2>
      <br />
      <h3>button по умолчанию</h3>
      <Button text="Кнопка" />

      <h3>button disabled</h3>
      <Button text="Кнопка" disabled />

      <h3>button loading</h3>
      <Button text="Кнопка" isLoading />
    </Container>
  );
}
