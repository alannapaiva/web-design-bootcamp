import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  margin: 0;
  padding: 0 32px;
  background: #f5f5f5;
  font-family: "Ubuntu";
  animation: rotate 6s infinite alternate linear;

  .circle {
    position: fixed;
    top: -50vmin;
    left: -50vmin;
    width: 100vmin;
    height: 100vmin;
    border-radius: 47% 53% 61% 39% / 45% 51% 49% 55%;
    background: #65c8ff;
  }
  .circle::after {
    content: "";
    position: inherit;
    right: -50vmin;
    bottom: -55vmin;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background: #143d81;
  }
  .card {
    overflow: hidden;
    position: relative;
    z-index: 3;
    width: 100%;
    margin: 0 20px;
    padding: 160px 30px 38px;
    border-radius: 1.25rem;
    background: #fff;
    text-align: center;
    box-shadow: 0 100px 100px rgb(0 0 0 / 10%);
  }

  .card::before {
    content: "";
    position: absolute;
    background: #216ce7;
    top: -880px;
    left: 50%;
    width: 1000px;
    height: 1000px;
    border-radius: 50%;
    translate: -50% 0;
  }

  .card .logo {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #fff;
    height: 64px;
    width: 64px;
    top: 30px;
    left: 50%;
    translate: -50% 0;
  }

  .card .logo i {
    font-size: 50px;
    color: #216ce7;
    font-weight: 500;
  }

  .card > h2 {
    font-size: 22px;
    font-weight: 400;
    margin: 0 0 30px;
    color: #2a3444;
  }

  .form {
    margin: 0 0 30px;
    display: grid;
    gap: 18px;
  }

  .form > input,
  .form > button {
    height: 50px;
    border-radius: 28px;
  }

  .form > input {
    border: 2px solid #e0e0e0;
    font-family: inherit;
    font-size: 16px;
    padding: 0 7px;
    color: #11274c;
    transition: all 0.375s;
  }

  .form > input:hover {
    border: 2px solid #000;
  }

  .form > input::placeholder {
    color: #cac8c8;
    padding: 10px;
  }

  .form > button {
    cursor: pointer;
    width: 100%;
    height: 50px;
    padding: 0 16px;
    background: #216ce7;
    color: #f9f9f9;
    border: 0;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    letter-spacing: 2px;
    transition: all 0.375s;
  }

  .form > button:hover {
    color: #fff;
    background: #143d81;
  }

  .card > footer {
    color: #7c7c7c;
  }

  .card > footer > a {
    color: #216ce7;
    transition: all 0.375s;
  }

  .card > footer > a:hover {
    color: #143d81;
  }

  @media (width >=500px) {
    body {
      padding: 0;
    }
    .card {
      margin: 0;
      width: 360px;
    }
  }
`;
