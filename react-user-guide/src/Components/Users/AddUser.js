import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import { useState } from "react";
import idGenerator from "../../Utils/NewIDGenerator";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const [enteredUsername, setUsername] = useState("");
  const [error, setError] = useState("");
  const [enteredAge, setAge] = useState("");
  const clearInput = () => {
    setUsername("");
    setAge("");
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "please enter a valid name or age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "please enter a age greater than 1",
      });
      return;
    }
    console.log(enteredUsername, enteredAge);
    props.onAddUser({
      username: enteredUsername,
      age: enteredAge,
      id: idGenerator(),
    });
    clearInput();
  };
  const userChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const clearError = () => {
    setError("");
  };
  /*
  //alternative using arrays
  return [
    error && (
      <ErrorModal
        onModalClick={clearError}
        title={error.title}
        message={error.message}
      />
    ),
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          onChange={userChangeHandler}
          value={enteredUsername}
          type="text"
        />

        <label htmlFor="age">Age</label>
        <input
          onChange={ageChangeHandler}
          id="age"
          value={enteredAge}
          type="number"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>,
  ];
  */
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          onModalClick={clearError}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            onChange={userChangeHandler}
            value={enteredUsername}
            type="text"
          />

          <label htmlFor="age">Age</label>
          <input
            onChange={ageChangeHandler}
            id="age"
            value={enteredAge}
            type="number"
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
