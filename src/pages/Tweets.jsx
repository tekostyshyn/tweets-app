import { useEffect, useState } from 'react';
import * as API from 'services/usersApi';
import { saveToStorage, getFromStorage } from 'services/storageApi';
import Dropdown from 'components/Dropdown';
import TweetCardsList from 'components/TweetCardsList';
import LoadMoreButton from 'components/LoadMoreButton';
import Loader from 'components/Loader';

export default function Tweets() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('');
  const [isLoadMoreVisible, setLoadMoreVisible] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setLoadMoreVisible(false);
        const fetchedUsers = await API.fetchUsers(page);
        const usersLength = await API.fetchUsersLength();
        setUsers(prevState => [...prevState, ...fetchedUsers]);
        if (usersLength / page <= 3) {
          setLoadMoreVisible(false);
        } else {
          setLoadMoreVisible(true);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [page]);

  const handleOnFollowClick = (userId, isFollowing) => {
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        const updatedUser = {
          ...user,
          followers: user.followers + (isFollowing ? -1 : 1),
        };
        API.updateFollowers(user.id, { followers: updatedUser.followers });
        return updatedUser;
      }
      return user;
    });
    setUsers(updatedUsers);
    saveToStorage(`tweet_${userId}`, isFollowing ? false : true);
  };

  const handleOnLoadMoreClick = () => {
    setPage(prevState => prevState + 1);
  };

  const handleSelectChange = value => {
    setFilter(value);
  };

  const filterUsers = () => {
    switch (filter) {
      case 'Show all':
        return users;
      case 'Follow':
        return users.filter(
          user => getFromStorage(`tweet_${user.id}`) !== true
        );
      case 'Following':
        return users.filter(
          user => getFromStorage(`tweet_${user.id}`) === true
        );
      default:
        return users;
    }
  };
  const filteredUsers = filterUsers();

  return (
    <>
      <Dropdown onChange={handleSelectChange} />
      {filteredUsers.length > 0 && (
        <TweetCardsList users={filteredUsers} onClick={handleOnFollowClick} />
      )}
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      {isLoadMoreVisible && filteredUsers.length > 0 && (
        <LoadMoreButton onClick={handleOnLoadMoreClick} disabled={isLoading} />
      )}
    </>
  );
}
