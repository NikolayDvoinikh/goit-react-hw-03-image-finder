import ImageGalleryItem from './ImageGalleryItem';

import styles from './image-gallery.module.scss';

const ImageGallery = ({ response, showLargeImage }) => {
  const elements = response.map(({ id, webformatURL }) => {
    return (
      <ImageGalleryItem onClick={showLargeImage} key={id} url={webformatURL} />
    );
  });
  return <ul className={styles.imageGallery}>{elements}</ul>;
};

ImageGallery.defaultProps = {
  items: [],
};

export default ImageGallery;
