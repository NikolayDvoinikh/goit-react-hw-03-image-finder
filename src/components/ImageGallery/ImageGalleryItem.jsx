import PropTypes from 'prop-types';

import styles from './image-gallery-item.module.scss';

const ImageGalleryItem = ({ url, id, imgClick }) => {
  return (
    <li className={styles.imageGalleryItem} onClick={() => imgClick(id)}>
      <img className={styles.imageGalleryItem_image} src={url} alt={id} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  imgClick: PropTypes.func.isRequired,
};
