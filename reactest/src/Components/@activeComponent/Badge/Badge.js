import Badge from 'react-bootstrap/Badge';

function Badgeindex(props) {
  const dataBadge = props.data;
  return (
    <>
      {
        dataBadge.map((badge) => (
          < Badge pill={badge.pill} bg={badge.bg} text={badge.text} as={badge.as} >
            {badge.messageBadge}
          </Badge >))
      }



    </>
  );
}

export default Badgeindex;
