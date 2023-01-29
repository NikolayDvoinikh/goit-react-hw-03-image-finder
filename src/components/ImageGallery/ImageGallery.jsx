import ImageGalleryItem from './ImageGalleryItem';

import styles from './image-gallery.module.scss';

const ImageGallery = ({ response, showLargeImage }) => {
  const elements = response.map(({ id, webformatURL, largeImageURL }) => {
    return (
      <ImageGalleryItem
        key={id}
        id={largeImageURL}
        url={webformatURL}
        imgClick={showLargeImage}
      />
    );
  });

  return <ul className={styles.imageGallery}>{elements}</ul>;
};

ImageGallery.defaultProps = {
  items: [],
};

export default ImageGallery;
