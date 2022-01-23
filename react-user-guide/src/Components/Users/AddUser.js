import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import { useState, useRef } from "react";
import idGenerator from "../../Utils/NewIDGenerator";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  // const [enteredUsername, setUsername] = useState("");
  // const [enteredAge, setAge] = useState("");
  const [error, setError] = useState("");
  const clearInput = () => {
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef, ageInputRef);
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "please enter a valid name or age",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid input",
        message: "please enter a age greater than 1",
      });
      return;
    }
    // console.log(enteredUsername, enteredAge);
    props.onAddUser({
      username: enteredName,
      age: enteredUserAge,
      id: idGenerator(),
    });
    clearInput();
  };
  const userChangeHandler = (event) => {
    // setUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    // setAge(event.target.value);
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
          onConfirm={clearError}
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
            // value={enteredUsername}
            type="text"
            ref={nameInputRef}
          />

          <label htmlFor="age">Age</label>
          <input
            onChange={ageChangeHandler}
            id="age"
            // value={enteredAge}
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};
export default AddUser;
