import ImageGalleryItem from './ImageGalleryItem';

import styles from './image-gallery.module.scss';

const ImageGallery = ({ response }) => {
  return (
    <ul className={styles.imageGallery}>
      {response.map(({ id, webformatURL }) => {
        return <ImageGalleryItem key={id} url={webformatURL} />;
      })}
    </ul>
  );
};

export default ImageGallery;
