import { Container } from "./styles";
import "@/assets/css/fonts.css";
import "boxicons";

export const Register = () => {
  return (
    <>
      <Container>
        <div className="circle"></div>
        <div className="card">
          <div className="logo">
            <i className="bx bx-bitcoin"></i>
          </div>
          <h2>Create Account</h2>
          <form className="form">
            <input type="text" placeholder="Name"></input>
            <input type="email" placeholder="Email"></input>
            <input type="password" placeholder="Password"></input>
            <button type="submit">SIGN UP</button>
          </form>
        </div>
        <footer>
          {" "}
          Existing users, sign in <a href="#"> Here</a>
        </footer>
      </Container>
    </>
  );
};
