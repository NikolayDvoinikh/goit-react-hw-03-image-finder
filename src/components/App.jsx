import { Component } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

import styles from './app.module.scss';

export class App extends Component {
  state = {
    items: [],
    searchImage: '',
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
  totalPages = 0;

  // componentDidMount() {
  //   const BASE_URL = 'https://pixabay.com/api/';
  //   const KEY = '31897410-2ad942b2553f3b748c6dbcf15';
  //   const params = {
  //     key: `${KEY}`,
  //     q: `${this.state.searchImage}`,
  //     image_type: 'photo',
  //     orientation: 'horizontal',
  //     page: `${this.state.page}`,
  //     per_page: 12,
  //   };

  //   axios.get(`${BASE_URL}`, { params }).then(({ data: { hits } }) => {
  //     console.log(hits);
  //     this.setState({
  //       items: hits,
  //       page: 2,
  //     });
  //   });
  // }

  componentDidUpdate(prevProps, prevState) {
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
    if (prevState.page === this.state.page) {
      return;
    }
    axios.get(`${BASE_URL}`, { params }).then(({ data: { hits, total } }) => {
      console.log(total);
      this.totalPages = total / params.per_page;
      console.log(this.totalPages);
      this.setState({
        items: hits,
        page: this.state.page,
      });
    });
  }

  onSubmitHandler = searchImg => {
    this.setState({
      searchImage: searchImg,
      page: 2,
    });
  };

  nextPage = () => this.setState({ page: this.state.page + 1 });
  render() {
    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.onSubmitHandler} />
        <ImageGallery response={this.state.items} />
        {this.totalPages && this.totalPages > this.state.page && (
          <Button moreImg={this.nextPage} />
        )}
      </div>
    );
  }
}
