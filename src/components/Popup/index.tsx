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
        className={`modal-background ${open ? "modal-background-open" : ""}`}
        onClick={toggleModal}
      ></div>
      <div className={`modal ${open ? "modalOpen" : ""}`}>
        <h2>Modal Window</h2>
        <p>
          You have opened the modal, they are great for displaying critical
          informations or confirming actions!
        </p>
      </div>
    </Container>
  );
};
