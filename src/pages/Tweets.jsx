import { useEffect, useState } from 'react';
import { fetchUsers, updateFollowers } from '../services/usersApi';
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

  return (
    <div>
      <TweetCardsList />
    </div>
  );
}
