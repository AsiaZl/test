import { Container } from "reactstrap";

export function Footer() {
  return (
    <Container>
      <p style={{ color: " #0d6efd" }}>
        {new Date().getFullYear()} chuck-jokes.cn
      </p>
    </Container>
  );
}
