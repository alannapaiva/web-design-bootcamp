import { Container } from "./styles";

function Login() {
  return (
    <Container>
      <div className="login-card">
        <h2>Login</h2>
        <h3>Enter your credentials</h3>

        <form className="login-form">
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password"></input>
          <a href="#">Forget yor password?</a>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </Container>
  );
}
export default Login;
