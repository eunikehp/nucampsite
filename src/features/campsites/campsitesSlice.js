//judul campsitesSlice, c huruf kecil menandakan bahwa the file doesn't export a react component

import { CAMPSITE } from '../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectRandomCampsite = () => {
  return CAMPSITES[Math.floor(Math.random() * CAMPSITES.length)];
  
}