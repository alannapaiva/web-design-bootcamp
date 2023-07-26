import { Container } from "./styles";
import 'boxicons';

/* @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400&family=Ubuntu:wght@300;400;500;700&display=swap');
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link> */

function Register() {
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
        <footer> Existing users, sign in <a href="#"> Here</a></footer>
      </Container>
    </>
  );
}
export default Register;
