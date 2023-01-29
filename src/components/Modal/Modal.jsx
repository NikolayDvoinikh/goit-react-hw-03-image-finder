import { Component } from 'react';
import { createPortal } from 'react-dom';

import styles from './modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };

  render() {
    const { largeImg, close } = this.props;
    // const { closeModal } = this;
    return (
      createPortal(
        <div className={styles.overlay} onClick={close}>
          <div className={styles.modal}>
            <img src={largeImg} alt="ug" />
          </div>
        </div>
      ),
      modalRoot
    );
  }
}

export default Modal;
