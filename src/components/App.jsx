import { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

import styles from './app.module.scss';

export class App extends Component {
  state = {
    items: [],
    searchImage: 'cat',
    page: 1,
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

  componentDidMount() {
    const BASE_URL = 'https://pixabay.com/api/';
    const KEY = '31897410-2ad942b2553f3b748c6dbcf15';
    const params = {
      key: `${KEY}`,
      q: `${this.state.searchImage}`,
      image_type: 'photo',
      orientation: 'horizontal',
      page: `${this.state.page}`,
      per_page: 12,
    };

    axios.get(`${BASE_URL}`, { params }).then(({ data: { hits } }) => {
      console.log(hits);
      this.setState({
        items: hits,
        page: 2,
      });
    });
  }

  onSubmitHandler = searchImg => {
    this.setState({
      searchImage: searchImg,
    });
  };

  nextPage = () => this.setState({ page: this.state.page + 1 });

  render() {
    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.onSubmitHandler} />
        <ImageGallery response={this.state.items} />
        <Button moreImg={this.nextPage} />
      </div>
    );
  }
}
