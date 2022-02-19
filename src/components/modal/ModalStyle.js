import styled from "styled-components";
import { Button, Container } from "../../globalStyles";
import {motion} from 'framer-motion'

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background: rgb(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 70px 0;
  z-index: 98;
`;

export const ModalWrapper = styled(motion.div)`
  width: clamp(500px, 90vw, 800px);
  background-color: white;
  position: relative;
  height: 100%;
  z-index: 99;
  border-radius: 0.5rem;
  .close-button {
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 2em;
    color:#222;
  }
`;

export const FormContainer = styled.form`
  margin: 0 auto;
  height: 100%;
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 2rem;

  @media screen and (max-width: 968px) {
    width: 400px;
  }
`;

export const ModalInput = styled.input`
  padding: 0.75rem 1rem;
  border: none;
  border-bottom: 1px solid #dedfe0;
  font-size: 1.1em;

  &:focus {
    outline: none;
  }
`;

export const ModalButton = styled(Button)`
  background-color: #e6172e;
  color: white;
  box-shadow: 0 0 2px #222;

  &:hover {
    background-color: #ff0033;
  }
`;
