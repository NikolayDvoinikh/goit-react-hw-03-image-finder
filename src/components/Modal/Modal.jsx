import { Component } from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = () => {
  return (
    <div class={styles.overlay}>
      <div class={styles.modal}>
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Modal;
