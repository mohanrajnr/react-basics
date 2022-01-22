import React from "react";
import { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);
  const addUserHandler = (newUser) => {
    setUserList((prevUserList) => {
      const newList = [...prevUserList, newUser];
      return newList;
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </div>
  );
}

export default App;
