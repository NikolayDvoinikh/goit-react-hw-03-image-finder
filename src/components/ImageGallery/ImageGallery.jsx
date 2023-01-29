import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';
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

ImageGallery.propTypes = {
  response: PropTypes.arrayOf(PropTypes.object),
  showLargeImage: PropTypes.func.isRequired,
};
