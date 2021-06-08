import React from 'react';
import Proptypes from 'prop-types';

function loginUser(credtials) {
    return fetch('/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(credtials)
    })
    .then((res) => res.json())
}

function Login({setToken}) {
    const [userName, setUserName] = React.useState()
    const [password, setPassword] = React.useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await loginUser({userName, password});
        localStorage.setItem('token', res.accessToken);
        setToken(res.accessToken);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <label>
                <p>Username:</p>
                <input type='text' onChange={(e) => setUserName(e.target.value)} />
            </label>
            <label>
                <p>Password:</p>
                <input type='password' onChange={(e) => setPassword(e.target.value)} />
            </label>
            <div>
                <button type='submit'>Login</button>
            </div>
        </form>
    )
}

Login.propTypes = {
    setToken: Proptypes.func.isRequired
}

export default Login;