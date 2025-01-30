import { useEffect, useState } from "react";
import { getUsers } from "../../services/user.service";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then((response) => {
        console.log(response)
        setUsers(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h1>Users</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="list-group">
          {users.length && users.map((user) => (
            <li key={user._id} className="list-group-item">
              <Link to={`/users/${user._id}`} className="list-group-item">
                {user.name}
              </Link>
            </li>
          ))}

          {!users.length && <p>No users found</p>}
        </ul>
      )}
    </div>
  );
};

export default Users;
