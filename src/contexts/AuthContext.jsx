import { createContext, useEffect, useState } from 'react';
import { getAccessToken, setAccessToken } from '../store/AccessTokenStore';
import { getCurrentUserService } from '../services/auth.service';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isAuthLoaded, setIsAuthLoaded] = useState(false);

  const navigate = useNavigate();

  const getCurrentUser = (callback) => {
    getCurrentUserService()
      .then((res) => {
        setCurrentUser(res.user);
        setIsAuthLoaded(true);

        callback && callback();
      });
  }

  const login = (token) => {
    const navigateToProfile = () => {
      navigate('/profile');
    }
    //guardar mi token en el localStorage
    setAccessToken(token);
    getCurrentUser(navigateToProfile);
  }

  useEffect(() => {
    if (getAccessToken()) {
      getCurrentUser()
    } else {
      setIsAuthLoaded(true)
    }
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, isAuthLoaded, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
