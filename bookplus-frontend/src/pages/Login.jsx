import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // API Call -> Login
    async function login() {
        try {
            const result = await axios.post('https://bookplus-backend.onrender.com/api/auth/login', {
                username,
                password
            })
            alert(result?.data?.message)

            navigate('my-books')
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }

    return <div>
        <h1>Login</h1>

        <input placeholder='Username' onChange={e => setUsername(e.target.value)} value={username} />
        <input placeholder='Password' onChange={e => setPassword(e.target.value)} value={password} />

        <button onClick={login}>Login</button>

        <Link to='/register'>Register</Link>
    </div>
}

export default Login