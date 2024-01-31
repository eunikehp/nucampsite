import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

//const Campsite Card = (props) => {
const CampsiteCard = ({ campsite }) => {
  //const { campsite } = props;
  const { image, name } = campsite; // destructuring assignment
  return (
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
  );
};

export default CampsiteCard;