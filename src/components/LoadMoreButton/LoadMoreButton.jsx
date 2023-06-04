import { Button } from "./LoadMoreButton.styled";

const LoadMoreButton = ({onClick}) => {
  return <Button onClick={onClick}>Load more tweets</Button>;
};

export default LoadMoreButton;
