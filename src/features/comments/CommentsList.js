import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';

const CommentsList = ({ campsiteId }) => {
  const comments = selectCommentsByCampsiteId(campsiteId);
  
  // make sure that comments is not undefined or null and check if the value comments.length is greater than zero
  if (comments && comments.length > 0) {
    return (
      <Col md='5' className='m-1'>
        <h4>Comments</h4>
        {comments.map((comment) => {
          return <Comment key={comment.id} comment={comment} />;
        })}
      </Col>
    );
  }
  return (
    <Col md='5' className='m-1'>
      There are no comments for this campsite yet.
    </Col>
  );
};

export default CommentsList;