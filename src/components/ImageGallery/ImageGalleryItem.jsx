import styles from './image-gallery-item.module.scss';

const ImageGalleryItem = ({ url, id }) => {
  return (
    <li className={styles.imageGalleryItem}>
      <img className={styles.imageGalleryItem_image} src={url} alt={id} />
    </li>
  );
};

export default ImageGalleryItem;