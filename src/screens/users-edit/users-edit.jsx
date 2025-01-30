import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { useParams } from 'react-router-dom';
import { getUser } from '../../services/user.service';
import UsersCreate from '../users-create/users-create';

const UsersEdit = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser(id)
      .then((response) => {
        setUser(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      <UsersCreate key={user._id} user={user} isEditing />
    </div>
  );
};

export default UsersEdit;
