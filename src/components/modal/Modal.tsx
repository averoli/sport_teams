import React from "react";
import styles from "./Modal.module.css";
import videoExample from "../../assets/videos/video_example.mp4";

type ModalProps = {
  modalIsOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({
  modalIsOpen,
  onRequestClose,
  children,
}) => {
  return (
    <dialog open={modalIsOpen}>
      <article className={styles.modal}>
        <h4>{children}</h4>
        <video width="320" height="240" controls>
          <source src={videoExample} type="video/mp4" />
        </video>
        <div className={styles.buttons_goup}>
          <button onClick={onRequestClose}>Cancel</button>
          <button onClick={onRequestClose}>Finish</button>
        </div>
      </article>
    </dialog>
  );
};

export default Modal;
