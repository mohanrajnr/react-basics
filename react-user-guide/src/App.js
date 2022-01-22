import React from "react";
import { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (newUser) => {
    setUsersList((prevUserList) => {
      const newList = [...prevUserList, newUser];
      return newList;
    });
  };
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
