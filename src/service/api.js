import axios from 'axios';

const PER_PAGE = 12;
const API_KEY = '30668884-f41149befa5881754e9280132';
const BASE_URL = 'https://pixabay.com/api/?';
axios.defaults.params = {
  orientation: 'horizontal',
  per_page: PER_PAGE,
};

export const getImages = async (request, page = 1) => {
  const { data } = await axios.get(
    `${BASE_URL}key=${API_KEY}&q=${request}&image_type=photo&page=${page}`
  );
  const { totalHits, hits } = data;
  const totalPages = Math.ceil(totalHits / PER_PAGE);
  const images = hits.map(image => {
    return {
      image: image.webformatURL,
      largeImage: image.largeImageURL,
      tags: image.tags,
      id: image.id,
    };
  });
  return { totalPages, images };
};
