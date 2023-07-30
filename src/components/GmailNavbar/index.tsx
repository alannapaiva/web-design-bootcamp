import { Container } from "./styles";
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

import "@/assets/css/fonts.css";
export const GmailNavbar = () => {
  return (
    <Container>
      <button
        //onClick="toggleMenu()"
        className="burger material-symbols-outlined"
      >
        Menu
      </button>

      <nav className="navbar">
        <div className="logo">
          <img src="src\assets\img\logo-gmail.svg" alt="logo do Gmail" />
          <span>Gmail</span>
        </div>

        <div className="search">
          <span className="material-symbols-outlined"> Search </span>
          <input
            type="text"
            spellCheck="false"
            className="search"
            id="search"
            placeholder="Search Mail"
          />
        </div>

        <nav>
          <button className="material-symbols-outlined">help</button>
          <button className="material-symbols-outlined">settings</button>
          <button className="material-symbols-outlined">apps</button>
          <img src="src\assets\img\logo.png" alt="" />
        </nav>
      </nav>
    </Container>
  );
};
