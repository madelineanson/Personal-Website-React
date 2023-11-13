import React from "react";

const UserCard = ({ userData }) => {
    return(
        <div>
            <h2>{userData.name}</h2>
            <p>{userData.type}</p>
            <p>{userData.gpa}</p>
        </div>
    )
}

export default UserCard;