import { FiArrowLeft } from 'react-icons/fi';
import { Button } from './BackButton.styled';

const BackButton = () => {
  return (
    <Button>
      <FiArrowLeft
        style={{
          width: '24px',
          height: '24px',
          color: '#471ca9',
        }}
      />
      Go back
    </Button>
  );
};

export default BackButton;
