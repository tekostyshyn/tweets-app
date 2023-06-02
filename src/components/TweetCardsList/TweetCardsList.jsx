import TweetCard from 'components/TweetCard/TweetCard';
import { List } from './TweetCardsList.styled';

const TweetCardsList = () => {
  return (
    <List>
      <TweetCard />
      <TweetCard />
      <TweetCard />
    </List>
  );
};

export default TweetCardsList;
