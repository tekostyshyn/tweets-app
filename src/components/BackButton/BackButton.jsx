import { FiArrowLeft } from 'react-icons/fi';
import { NavLink } from './BackButton.styled';

const BackButton = () => {
  return (
    <NavLink to={'/'}>
        <FiArrowLeft
          style={{
            width: '24px',
            height: '24px',
            color: '#471ca9',
          }}
        />
        Go back
    </NavLink>
  );
};

export default BackButton;
