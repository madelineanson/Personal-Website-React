import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './components/UserList';

const usersData = [
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "bio": "Enthusiastic software engineer."
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "bio": "Passionate about design and user experience."
  },
];

ReactDOM.render(
  <UserList users={usersData} />,
  document.getElementById('root')
);