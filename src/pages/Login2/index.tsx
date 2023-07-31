import { Container } from "./styles";

export const Login2 = () => {
  return (
    <Container>
      <div className="login">
        <img src="./src/assets/img/bg.png" alt="" />
        <h3>Welcome Back!</h3>
        <h2>AsmrProg</h2>
        <form className="login-form">
          <input type="password" placeholder="Enter your passcode" />
          <button type="submit">LOGIN</button>
          <a href="#">Forget your passcode?</a>
        </form>
      </div>
    </Container>
  );
};
