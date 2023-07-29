import { styled } from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  height: 100vh;
    margin-top: 10%;
    display: grid;
    place-items: center;
    font-family: "Ubuntu";
    line-height: 1.5;
    background: #24262a;
    color: #f9f9f9;
    margin: 0;

  .widget {
    background: #17181a;
    color: #fff;
    width: 300px;
    border-radius: 8px;
  }

  input {
    display: none;
  }

  h2 {
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 400;
  }

  .content {
    position: relative;
    overflow: hidden;
    height: 140px;
  }

  .content-inner {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: calc(300px * 3);
    transition: 0.3s;
  }

  .content-inner > div {
    width: inherit;
    padding: 20px;
  }

  label {
    padding: 20px;
    font-size: 15px;
    width: 24px;
    opacity: 0.35;
    cursor: pointer;
  }

  p {
    margin: 0;
    font-size: 15px;
    color: #888889;
  }

  .buttons {
    position: relative;
    display: flex;
    border-bottom: 1px solid #575757;
  }

  .underline {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 64px;
    height: 3px;
    background: #1976d2;;
    transition: 0.2s;
  }

  .tabs input:nth-child(1):checked ~ .buttons .underline {
    translate: 0 0;
  }

  .tabs input:nth-child(2):checked ~ .buttons .underline {
    translate: 64px 0;
  }

  .tabs input:nth-child(3):checked ~ .buttons .underline {
    translate: calc(64px * 2) 0;
  }

  .tabs input:nth-child(1):checked ~ .buttons label:nth-child(1),
  .tabs input:nth-child(2):checked ~ .buttons label:nth-child(2),
  .tabs input:nth-child(3):checked ~ .buttons label:nth-child(3) {
    opacity: 1;
  }

  .tabs input:nth-child(1):checked ~ .content > .content-inner {
    translate: 0 0;
  }

  .tabs input:nth-child(2):checked ~ .content > .content-inner {
    translate: calc(0px - 300px) 0;
  }

  .tabs input:nth-child(3):checked ~ .content > .content-inner {
    translate: calc(0px - 300px * 2) 0;
  }
`;
