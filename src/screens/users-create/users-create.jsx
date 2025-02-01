import { useState } from 'react';
import { createUser, updateUser } from '../../services/user.service';
import { useNavigate } from 'react-router-dom';
import { setAccessToken } from '../../store/AccessTokenStore';

const UsersCreate = ({ user, isEditing }) => {
  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
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
        .catch((err) => {
          setErrors(err.errors)
        });
      return;
    }

    createUser(userData)
      .then(() => {
        navigate('/login');
      })
      .catch((err) => {
        setErrors(err.errors)
      });
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5 mt-5" >Register in <span style={{ color: "#C13584" }}>InstaHack</span> </h1>
      <div className="">
        <form onSubmit={handleSubmit} className="row g-3 border p-3" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div className="col-md-12">
            <label htmlFor="name" className="form-label">Name</label>
            <input value={userData.name} onChange={handleChange} type="text" className={`form-control ${errors.name && 'is-invalid'}`} id="name" name="name" />
            <div id="name" className="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="email" className="form-label">Email</label>
            <input value={userData.email} onChange={handleChange} type="text" className={`form-control ${errors.email && 'is-invalid'}`} id="email" name="email" />
            <div id="email" className="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
          {!isEditing && (
            <div className="col-md-12">
              <label htmlFor="password" className="form-label">Password</label>
              <input value={userData.password} onChange={handleChange} type="password" className={`form-control ${errors.password && 'is-invalid'}`} id="password" name="password" />
              <div id="password" className="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>)}
          <div className="col-12">
            <button type="submit" className="btn btn-primary">{isEditing ? 'Edit' : 'Create user'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UsersCreate;
