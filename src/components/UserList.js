import React from 'react';
import UserProfile from './UserProfile';

const UserList = ({ users }) => {
  return (
    <div>
      {users.map(user => (
        <UserProfile key={user.id} userData={user} />
      ))}
    </div>
  );
};

export default UserList;
