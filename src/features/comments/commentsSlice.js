import { createSlice } from '@reduxjs/toolkit';
import { COMMENTS } from '../../app/shared/COMMENTS';

//redux
const initialState = {
    commentsArray: COMMENTS
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState
});

export const commentsReducer = commentsSlice.reducer;

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
    return state.comments.commentsArray.filter(
        (comment) => comment.campsiteId === parseInt(campsiteId)
    );
}; //convert campsiteId into integer as it will be passed in as a string

