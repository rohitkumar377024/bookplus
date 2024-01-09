import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const PublishBook = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [genre, setGenre] = useState('')

     // API Call -> publish book
     async function publishBook() {
        try {
            const result = await axios.post(
                'https://bookplus-backend.onrender.com/api/books/publish', 
                {
                    title,
                    content,
                    genre,
                    "userID": "659ce19c4caf17c39844e6f1"
                },
                {headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTljZTE5YzRjYWYxN2MzOTg0NGU2ZjEiLCJpYXQiOjE3MDQ3ODAzMDksImV4cCI6MTcwNTM4NTEwOX0.ovyYdQk8z-PkyCLoJL1XE0bk7J67Sgz-puskJeG6t_g'}}
            )
            alert(result?.data?.message)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }

    return <div>
        <h1>Publish Book</h1>

        <input placeholder='Title' onChange={e => setTitle(e.target.value)} value={title} />
        <input placeholder='Content' onChange={e => setContent(e.target.value)} value={content} />
        <input placeholder='Genre' onChange={e => setGenre(e.target.value)} value={genre} />

        <button onClick={publishBook}>Publish</button>

        <Link to='/my-books'>My Books</Link>

    </div>
}

export default PublishBook