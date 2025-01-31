import { useState } from 'react';
import { createUser, updateUser } from '../../services/user.service';
import { useNavigate } from 'react-router-dom';

const UsersCreate = ({ user, isEditing }) => {
  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();


    if (isEditing) {
      updateUser(user._id, userData)
        .then(() => {
          navigate('/users');
        })
        .catch((error) => {
          console.error(error);
        });
      return;
    }

    createUser(userData)
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Name</label>
          <input value={userData.name} onChange={handleChange} type="text" className="form-control" id="name" name="name" />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input value={userData.email} onChange={handleChange} type="text" className="form-control" id="email" name="email" />
        </div>
        {!isEditing && (
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">Password</label>
            <input value={userData.password} onChange={handleChange} type="password" className="form-control" id="password" name="password" />
          </div>)}
        <div className="col-12">
          <button type="submit" className="btn btn-primary">{isEditing ? 'Edit' : 'Create user'}</button>
        </div>
      </form>
    </div>
  );
};

export default UsersCreate;
