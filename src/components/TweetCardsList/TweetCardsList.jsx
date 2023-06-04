import TweetCard from 'components/TweetCard/TweetCard';
import { List } from './TweetCardsList.styled';

const TweetCardsList = ({ users, onClick }) => {
  return (
    <List>
      {users.map(({ id, tweets, followers, avatar }) => (
        <TweetCard
          key={id}
          id={id}
          tweets={tweets}
          followers={followers}
          imageUrl={avatar}
          onClick={onClick}
        />
      ))}
    </List>
  );
};

export default TweetCardsList;
