import React, { useRef } from "react";
import {
  FormContainer,
  ModalButton,
  ModalContainer,
  ModalInput,
  ModalWrapper,
} from "./ModalStyle";
import { MdClose } from "react-icons/md";
import { Button, InnerHeading } from "../../globalStyles";

export const Modal = ({ toggleModal }) => {
  //  Animation

  const mountAnimation = {
    initial: {
      opacity: 0,
      y: 200,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 100,
      },
    },

    exit: {
      y: -200,
      opacity: 0,
    },
  };
  // Modal Open Close
  const modalRef = useRef();

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      toggleModal();
    }
  };

  return (
    <ModalContainer onClick={closeModal} ref={modalRef}>
      <ModalWrapper variants={mountAnimation} animate='animate' initial='initial'>
        <MdClose onClick={toggleModal} className="close-button" />
        <FormContainer
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <InnerHeading>Sign Up</InnerHeading>
          <ModalInput type="text" placeholder="Name"></ModalInput>
          <ModalInput type="text" placeholder="E-mail"></ModalInput>
          <ModalInput type="text" placeholder="Subject"></ModalInput>
          <ModalInput type="text" placeholder="Message"></ModalInput>
          <ModalButton onClick={toggleModal}>Let's Talk</ModalButton>
        </FormContainer>
      </ModalWrapper>
    </ModalContainer>
  );
};
