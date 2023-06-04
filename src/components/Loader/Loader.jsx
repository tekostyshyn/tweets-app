import { RotatingLines } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

const Loader = () => {
  return (
    <Wrapper>
      <RotatingLines
        strokeColor="#5cd3a8"
        strokeWidth="5"
        animationDuration="0.75"
        width="80"
        visible={true}
      />
    </Wrapper>
  );
};

export default Loader;
