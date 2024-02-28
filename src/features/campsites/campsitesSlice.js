//judul campsitesSlice, c huruf kecil menandakan bahwa the file doesn't export a react component
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { CAMPSITES } from '../../app/shared/oldData/CAMPSITES';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageUrl } from '../../utils/mapImageURL';

export const fetchCampsites = createAsyncThunk(
  'campsites/fetchCampsites',
  async () => {
    const response = await fetch(baseUrl + 'campsites');
    if(!response.ok) {
      return Promise.reject('Unable to fetch, status:' + response.status)
    }
    const data = await response.json()
    return data;
  }
);


// redux :createslice & reducer
const initialState = {
  campsitesArray: [],
  isLoading: true,
  errMsg: ''
};

const campsitesSlice = createSlice({
  name: 'campsites',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCampsites.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCampsites.fulfilled]: (state,action) => {
      state.isLoading = false;
      state.errMsg = '';
      state.campsitesArray = mapImageUrl(action.payload);
    },
    [fetchCampsites.rejected]: (state,action) => {
      state.isLoading = false;
      state.errMsg= action.error ? action.error.message : 'Fetch failed';
    }
  }
});

export const campsitesReducer = campsitesSlice.reducer;

//redux: useSelector
export const selectAllCampsites = (state) => {
  return state.campsites.campsitesArray;
};

export const selectCampsiteById = (id) => (state) => {
  return state.campsites.campsitesArray.find(
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
