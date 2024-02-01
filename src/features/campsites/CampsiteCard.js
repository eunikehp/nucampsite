import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom'; //turn every campsite card into clickable link

//const Campsite Card = (props) => {
const CampsiteCard = ({ campsite }) => {
  //const { campsite } = props;
  const { id, image, name } = campsite; // destructuring assignment
  return (
    <Link to={`${id}`}>
      <Card>
        <CardImg 
            width='100%'
            src={image}
            alt={name}
        /> 
        <CardImgOverlay>
          <CardTitle>{name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </Link>
    
  );
};

export default CampsiteCard;