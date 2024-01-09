import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // API Call -> Login
    async function login() {
        axios.post('https://bookplus-backend.onrender.com/api/auth/login', {
            username,
            password
        })
    }

    return <div>
        <h1>Login</h1>

        <input placeholder='Username' onChange={e => setUsername(e.target.value)} value={username} />
        <input placeholder='Password' onChange={e => setPassword(e.target.value)} value={password} />

        <button onClick={login}>Login</button>
    </div>
}

export default Login