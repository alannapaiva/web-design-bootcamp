import { useState } from "react";
import { Container } from "./styles";
import "@/assets/css/fonts.css";

export const Popup = () => {
  const [open, setOpen] = useState(false);
  const toggleModal = () => {
    setOpen(open === false ? true : false);
  };

  return (
    <Container>
      <button onClick={toggleModal} type="button">
        Open Modal
      </button>
      <div
        className={open === true ? "modal-background-open" : "modal-background"}
        onClick={toggleModal}
      ></div>
      <nav className={open === true ? "modalOpen" : "modal"}>
        <div className="modal">
          <h2>Modal Window</h2>
          <p>
            You have opened the modal, they are great for displaying critical
            informations or confirming actions!
          </p>
        </div>
      </nav>
    </Container>
  );
};
