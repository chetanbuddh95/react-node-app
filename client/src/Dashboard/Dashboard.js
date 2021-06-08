import React, { useEffect, useState } from 'react';

function getFoods() {
    const token = localStorage.getItem('token');
    return fetch('/foods', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${token}`  
        }
    })
    .then((res) => res.json())
}

function Dashboard() {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        getFoods().then((foods) => {
            setFoods(foods);
        }); 
    },[getFoods])

    return (
        <>
            <h3>Dashboard</h3>
            { foods &&
                <ul>
                    {foods.map((food) => (
                        <li key={food.id}>{food.name}</li>
                    ))}
                </ul>
            }
        </>
    )
}

export default Dashboard;