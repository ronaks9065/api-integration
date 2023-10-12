import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiAxios = () => {
    const [names, setNames] = useState([]);

    useEffect(() => {
        axios.get("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
            .then((response) => {
                setNames(response.data); // Use response.data to get the array of user objects
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <>
            <h1>Total Count of users using Axios: {names.length}</h1>
            <ul>
                {names.map((item) => (
                    <li key={item.id}>{item.name}
                        <p>The relative city is {item.city}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ApiAxios;
