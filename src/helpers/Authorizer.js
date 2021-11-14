import { useState } from 'react';

export default function AuthToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    return tokenString
  }

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('token', userToken);
    setToken(userToken.token);
  };

  const deleteToken = () => {
    sessionStorage.removeItem('token');
  };

  return {
    setToken: saveToken,
    removeToken: deleteToken,
    token
  }
}