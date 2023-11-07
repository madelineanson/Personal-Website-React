import React from "react";
import UserCard from "./UserCard";

const UserList = ({ users }) => {
    return (
        <div>
            {users.map(user => (
                <UserCard id={user.id} userData={user}/>
                                )      
                )}
        </div>
    );
}

export default UserList;