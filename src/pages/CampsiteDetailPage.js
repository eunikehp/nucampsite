import { Container, Row} from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CommentsList from '../features/comments/CommentsList';
import SubHeader from '../components/subHeader';

const CampsiteDetailPage = () => {
  const { campsiteId } = useParams();
  const campsite = selectCampsiteById(campsiteId);

  return (
    <Container>
      <SubHeader current={campsite.name} detail={true} />
      <Row>
        <CampsiteDetail campsite={campsite} />
        <CommentsList campsiteId={campsiteId} />
      </Row>
    </Container>
  );
};

export default CampsiteDetailPage;





// URL parameters allow our app to take a parameter that is supplied as part of a URL path, then use that parameter in our code. 
//For example, if a user requests the path '/directory/3', we may want to be able to parse the 3 from that path then use it to find a campsite with a matching id property.
// This video discusses how this can be accomplished using a URL parameter with the Route component, along with the useParams() function from React Router.