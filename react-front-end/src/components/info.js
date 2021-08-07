import React from 'react';
import { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';


export default function Info(props) {
  const { user, logout } = useContext(authContext);

  const onLogout = function (event) {
    logout();
  };

  // Show user Info
  return (
    <div className="UserInfo">
      <div>Logged In As: {props.value} </div>
    </div>
  );
};
