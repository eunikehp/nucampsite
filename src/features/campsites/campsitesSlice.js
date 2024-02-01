//judul campsitesSlice, c huruf kecil menandakan bahwa the file doesn't export a react component

import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectCampsiteById = (id) => {
  return CAMPSITES.find((campsite) => campsite.id === parseInt(id)); //bikin supaya bisa klik gambar dan munculin gambar detail.
};

// export const selectRandomCampsite = () => {
//   return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];

// };

export const selectFeaturedCampsite = () => {
  return CAMPSITES.find((campsite) => campsite.featured); // if featured = true, it will show.
};
