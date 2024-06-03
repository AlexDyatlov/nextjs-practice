import Container from '@/_ui/container';
import Title from '@/_ui/title';
import SendMessageForm from '@/components/ui/sendMessageForm';

export default function HomePage() {
  return (
    <main className="layout__main">
      <Container>
        <Title className="h1--m-bottom" tag="h1">
          Отправка формы
        </Title>
        <SendMessageForm />
      </Container>
    </main>
  );
}
