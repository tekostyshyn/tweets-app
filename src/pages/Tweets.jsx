import { useEffect, useState } from 'react';
import { fetchUsers, updateFollowers } from 'services/usersApi';
import { saveToStorage, getFromStorage } from 'services/storageApi';
import TweetCardsList from 'components/TweetCardsList/TweetCardsList';

export default function Tweets() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setLoading(true);

    fetchUsers(page)
      .then(fetchedUsers => {
        setUsers(prevState => [...prevState, ...fetchedUsers]);
      })
      .catch(error => setError(error.message))
      .finally(setLoading(false));
  }, [page]);

  const handleOnFollowClick = (userId, isFollowing) => {
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        const updatedUser = {
          ...user,
          followers: user.followers + (isFollowing ? -1 : 1),
        };
        updateFollowers(user.id, { followers: updatedUser.followers });
        return updatedUser;
      }
      return user;
    });
    setUsers(updatedUsers);
    saveToStorage(`tweet_${userId}`, isFollowing ? false : true);
  };

  return (
    <div>
      <TweetCardsList users={users} onClick={handleOnFollowClick}/>
    </div>
  );
}
