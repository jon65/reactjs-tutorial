import React, { useState } from 'react';
import Card from '../UI/card';
import classes from './addUser.module.css';
import Button from '../UI/Button';


const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        //enteredAge is a string js convert num to string 
        if (enteredUsername.trim().length == 0 || enteredAge.trim().length == 0) {
            return;
        }
        //+ convert string to num
        if (+enteredAge < 1) {
            return;
        }
        console.log(enteredUsername, enteredAge);
    };

    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler} >
        <label htmlFor="username">Username</label>
                <input id="username" type="text" value={ enteredUsername } onChange={usernameChangeHandler} />
        <label htmlFor="age">age (years)</label>
                <input id="age" type="number" value={ enteredAge} onChange={ ageChangeHandler} />
                <Button type="submit">Add User</Button>
                <div>
                    {enteredUsername}
                    { enteredAge}
                </div>
        </form>
        </Card>
    )
}

export default AddUser;