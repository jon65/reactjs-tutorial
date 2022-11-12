import './App.css';
import AddUser from './components/Users/AddUser.js';
import UserList from './components/Users/UsersList.js';
import React, { useState } from 'react';
  
  
function App() {

  const [userList, setUsersList] = useState([]);

  // const addUserHandler = (uName, uAge) => {
  //   setUsersList((preUsersList) => {
  //   return [
  //     ...prevUsersList,
  //     {name: uName, age: uAge, id: Math.random().toString()},
  //   ];
  //   });
  // }

  return (
    <div>
      <AddUser />
      <UserList users={ []} />
    </div>
  );
}

export default App;
