import {
  Item,
  Container,
  AvatarWrapper,
  Avatar,
  TextContainer,
  Text,
  Button,
} from './TweetCard.styled';

const TweetCard = ({ tweets, followers, imageUrl, isFollowing }) => {
  return (
    <Item>
      <Container>
        <AvatarWrapper>
          <Avatar src={imageUrl} />
        </AvatarWrapper>
        <TextContainer>
          <Text>tweets</Text>
          <Text>followers</Text>
        </TextContainer>
        <Button className={isFollowing ? 'isFollowing' : ''}>
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
      </Container>
    </Item>
  );
};

export default TweetCard;
