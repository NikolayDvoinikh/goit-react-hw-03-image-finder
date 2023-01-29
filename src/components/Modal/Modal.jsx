import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './modal.module.scss';

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
    const { largeImg } = this.props;
    const { closeModal } = this;
    return (
      <div className={styles.overlay} onClick={closeModal}>
        <div className={styles.modal}>
          <img className={styles.img} src={largeImg} alt="ug" />
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  largeImg: PropTypes.string.isRequired,
};
