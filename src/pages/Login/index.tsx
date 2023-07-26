import { Container, Subtitle, Title } from "./styles";

function Login() {
  return (
    <Container>
      <div className="container">
        <div className="login-card">
          <Title>Login</Title>
          <Subtitle>Enter your credentials</Subtitle>
          <form className="login-form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password"></input>
            <a href="#">Forget yor password?</a>
            <button type="submit">LOGIN</button>
          </form>
        </div>
      </div>
    </Container>
  );
}
export default Login;
