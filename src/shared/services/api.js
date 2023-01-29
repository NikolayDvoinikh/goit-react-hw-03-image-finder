import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pixabay.com/api/',
  KEY: '31897410-2ad942b2553f3b748c6dbcf15',
  params: {
    key: '31897410-2ad942b2553f3b748c6dbcf15',
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const apiImages = async (q, page = 1) => {
  const { data } = await instance.get('/', { params: { q, page } });
  return data;
};

// async function getImages() {
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
