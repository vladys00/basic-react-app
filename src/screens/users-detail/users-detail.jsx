import { useEffect, useState } from "react";
import { getUser } from "../../services/user.service";
import { Link, useParams } from "react-router-dom";

const UsersDetail = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();


  useEffect(() => {
    getUser(id)
      .then((response) => {
        console.log('response', response);
        setUser(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className="container mt-5">
      {user && (
        <>
          <div>Name: {user.name}</div>
          <div>Email: {user.email}</div>
          <Link to={`/users/edit/${user._id}`} className="btn btn-primary mt-5">Edit</Link>
        </>
      )}

    </div>
  );
};

export default UsersDetail;
