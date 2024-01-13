import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // API Call -> register
    async function register() {
        try {
            const result = await axios.post('https://bookplus-backend.onrender.com/api/auth/signup', {
                username,
                password
            })
            alert(result?.data?.message)

            dispatch({
                type: 'SET_ACCESS_TOKEN',
                payload: result?.data?.token
            })

            dispatch({
                type: 'SET_USER_ID',
                payload: result?.data?.userID
            })

            navigate('my-books')
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }

    return <div>
        <h1>Register</h1>

        <input placeholder='Username' onChange={e => setUsername(e.target.value)} value={username} />
        <input placeholder='Password' onChange={e => setPassword(e.target.value)} value={password} />

        <button onClick={register}>Register</button>

        <Link to='/'>Login</Link>
    </div>
}

export default Register