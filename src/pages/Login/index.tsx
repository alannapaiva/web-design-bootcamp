import { Sidebar } from "@/components/Sidebar";
import "@/assets/css/fonts.css";
import { Container, Subtitle, Title } from "./styles";

export const Login = () => {
  return (
    <Container>
      <Sidebar></Sidebar>
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
};
export default Login;
