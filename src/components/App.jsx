import { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { apiImages } from '../shared/services/api';
import { Dna } from 'react-loader-spinner';
import styles from './app.module.scss';

export class App extends Component {
  state = {
    items: [],
    searchImage: '',
    page: 1,
    loading: false,
    error: null,
    showModal: false,
    LargeImage: null,
  };

  // async getImages() {
  //   const BASE_URL = 'https://pixabay.com/api/';
  //   const KEY = '31897410-2ad942b2553f3b748c6dbcf15';
  //   const params = {
  //     key: `${KEY}`,
  //     q: `${this.searchImage}`,
  //     image_type: 'photo',
  //     orientation: 'horizontal',
  //     page: `${this.state.page}`,
  //     per_page: 12,
  //   };

  //   this.setState({ page: this.state.page + 1 });
  //   return await axios.get(`${BASE_URL}`, { params });
  // }

  componentDidUpdate(prevProps, prevState) {
    const { searchImage, page } = this.state;
    if (prevState.searchImage !== searchImage || prevState.page !== page) {
      this.getImages();
    }
  }

  async getImages() {
    try {
      this.setState({ loading: true });
      const { searchImage, page } = this.state;
      const { hits } = await apiImages(searchImage, page);
      this.setState(({ items }) => ({
        items: [...items, ...hits],
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  onSubmitHandler = searchImg => {
    this.setState({
      searchImage: searchImg,
      page: 1,
      items: [],
    });
  };

  nextPage = () => this.setState(({ page }) => ({ page: page + 1 }));
  render() {
    const { loading, items } = this.state;
    const { onSubmitHandler, nextPage } = this;
    return (
      <div className={styles.app}>
        <Searchbar onSubmit={onSubmitHandler} />
        {loading && (
          <Dna
            visible={true}
            height="100"
            width="300"
            ariaLabel="dna-loading"
            wrapperClass={styles.dna_wrapper}
          />
        )}
        <ImageGallery response={items} />
        {Boolean(items.length) && <Button moreImg={nextPage} />}
      </div>
    );
  }
}
