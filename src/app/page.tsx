import Container from '@/_ui/container';
import SendMessageForm from '@/components/ui/sendMessageForm';

export default function Home() {
  return (
    <main className="layout__main">
      <Container>
        <h1>Отправка формы</h1>
        <SendMessageForm />
      </Container>
    </main>
  );
}
