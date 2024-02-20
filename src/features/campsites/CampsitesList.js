// import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { useSelector } from 'react-redux';
import {Col, Row} from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsitesSlice';

//useSelector
const CampsitesList = () => {
  const campsites = useSelector(selectAllCampsites);
  console.log('campsites:', campsites)
  
  return (
    <Row className='ms-auto'>
      {campsites.map((campsite) => {
        return (
          <Col 
            md='5' 
            className= 'm-4' 
            key={campsite.id}
          >
            <CampsiteCard campsite={campsite} />
          </Col>
        );
      })}
    </Row>
  );
};

// const CampsitesList = () => {
//   const campsites = selectAllCampsites();
  
//   return (
//     <Row className='ms-auto'>
//       {campsites.map((campsite) => {
//         return (
//           <Col 
//             md='5' 
//             className= 'm-4' 
//             key={campsite.id}
//           >
//             <CampsiteCard campsite={campsite} />
//           </Col>
//         );
//       })}
//     </Row>
//   );
// };

// const CampsitesList = ({setCampsiteId}) => {
//   const campsites = selectAllCampsites();
  
//   return (
//     <Row className='ms-auto'>
//       {campsites.map((campsite) => {
//         return (
//           <Col 
//             md='5' 
//             className= 'm-4' 
//             key={campsite.id}
//             onClick={() => setCampsiteId(campsite.id)}>

//             <CampsiteCard campsite={campsite} />
//           </Col>
//         );
//       })}
//     </Row>
//   );
// };


export default CampsitesList;