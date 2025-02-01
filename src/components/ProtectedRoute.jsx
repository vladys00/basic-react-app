import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { currentUser, isAuthLoaded } = useContext(AuthContext);

  if (!isAuthLoaded) {
    return <div>Loading...</div>
  }

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
