import { useContext, useState } from "react";
import { loginService } from "../../services/auth.service";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { login, isAuthLoaded, currentUser } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    loginService(formData)
      .then((res) => {
        login(res.accessToken)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  if (!isAuthLoaded) {
    return 'loading'
  }

  if (isAuthLoaded && currentUser) {
    return 'Ya estas logueado'
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input onChange={handleChange} type="email" className="form-control" id="email" name="email" />
        </div>
        <div className="col-md-6">
          <label htmlFor="password" className="form-label">Password</label>
          <input onChange={handleChange} type="password" className="form-control" id="password" name="password" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
