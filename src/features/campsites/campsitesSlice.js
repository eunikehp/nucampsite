//judul campsitesSlice, c huruf kecil menandakan bahwa the file doesn't export a react component
import { createSlice } from '@reduxjs/toolkit';
import { CAMPSITES } from '../../app/shared/CAMPSITES';

// redux :createslice & reducer
const initialState = {
  campsitesArray: CAMPSITES
};

const campsitesSlice = createSlice({
  name: 'campsites',
  initialState
});

export const campsitesReducer = campsitesSlice.reducer;

//redux: useSelector
export const selectAllCampsites = (state) => {
  return state.campsites.campsitesArray;
};

export const selectCampsiteById = (id) => (state) => {
  return CAMPSITES.find(
    (campsite) => campsite.id === parseInt(id)
    ); //bikin supaya bisa klik gambar dan munculin gambar detail.
};

export const selectFeaturedCampsite = (state) => {
  return state.campsites.campsitesArray.find((campsite) => campsite.featured); // if featured = true, it will show.
};


// export const selectAllCampsites = () => {
//   return CAMPSITES;
// };

// export const selectCampsiteById = (id) => {
//   return CAMPSITES.find((campsite) => campsite.id === parseInt(id)); //bikin supaya bisa klik gambar dan munculin gambar detail.
// };

// export const selectRandomCampsite = () => {
//   return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
// };

// export const selectFeaturedCampsite = () => {
//   return CAMPSITES.find((campsite) => campsite.featured); // if featured = true, it will show.
// };
