import React, { ReactNode } from "react";
import "./Modal.scss";

export interface ModalProps {
  children: ReactNode;
  modalStyle?: string;
}

const Modal = (props: ModalProps) => {
  const { children, modalStyle } = props;

  return (
    <section className={modalStyle ? modalStyle : "modal"}>{children}</section>
  );
};

export default Modal;
