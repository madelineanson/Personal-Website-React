import React from "react";
import UserCard from "./UserCard";
import '../App.css';

const UserList = ({ users }) => {
    return(
        <div>
            {users.map(user => (
                <UserCard id={user.id} userData={user}/>
            ))}
        </div>
    )
}

export default UserList;  // xoxo manson! love you <3333333 - maria