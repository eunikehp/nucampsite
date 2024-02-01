import { COMMENTS } from '../../app/shared/COMMENTS';

export const selectCommentsByCampsiteId = (campsiteId) => {
  return COMMENTS.filter((comment) => comment.campsiteId === parseInt(campsiteId)); //convert campsiteId into integer as it will be passed in as a string
};

