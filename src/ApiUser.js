import React, { useEffect, useState } from 'react';

const ApiUser = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUser(data))
            .catch((error) => console.error("Error Fetching Data", error))
    }, []);

    return (
        <>
            <h1>Total User: {user.length}</h1>
            <p>Now showing user data </p>
            <ul>
                {user.map((userData) => (
                    <li key={userData.id}>{userData.name} - {userData.username}</li>
                ))}
            </ul>
        </>
    );
}

export default ApiUser;