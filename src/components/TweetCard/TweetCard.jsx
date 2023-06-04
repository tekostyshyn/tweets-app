import { getFromStorage } from 'services/storageApi';
import {
  Item,
  Container,
  AvatarWrapper,
  Avatar,
  TextContainer,
  Text,
  Button,
} from './TweetCard.styled';

const TweetCard = ({ id, tweets, followers, imageUrl, onClick }) => {
  const isFollowing = getFromStorage(`tweet_${id}`);

  const handleClick = () => {
    onClick(id, isFollowing);
  };

  return (
    <Item>
      <Container>
        <AvatarWrapper>
          <Avatar src={imageUrl} />
        </AvatarWrapper>
        <TextContainer>
          <Text>{tweets} tweets</Text>
          <Text>{followers} followers</Text>
        </TextContainer>
        <Button
          className={isFollowing ? 'isFollowing' : ''}
          onClick={handleClick}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
      </Container>
    </Item>
  );
};

export default TweetCard;
