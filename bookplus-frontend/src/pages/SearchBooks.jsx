import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const SearchBooks = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])

    // API Call -> search books
    async function searchBooks() {
        try {
            const result = await axios.get(
                `https://bookplus-backend.onrender.com/api/books/search?title=${searchTerm}`, 
                {headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTljZTE5YzRjYWYxN2MzOTg0NGU2ZjEiLCJpYXQiOjE3MDQ3ODAzMDksImV4cCI6MTcwNTM4NTEwOX0.ovyYdQk8z-PkyCLoJL1XE0bk7J67Sgz-puskJeG6t_g'}}
            )
            alert(result?.data?.message)
            setSearchResults(result?.data?.data)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }

    return <div>
        <h1>Search Books</h1>

        <input 
            placeholder='Search book by title' 
            onChange={e => setSearchTerm(e.target.value)} 
            value={searchTerm}
        />

        <button onClick={searchBooks}>Search Books</button>

        <div>
            {searchResults.map(book => <div style={{border: '2px solid white'}}>
                <p>Title: {book?.title}</p>
                <p>Content: {book?.content}</p>
                <p>Genre: {book?.genre}</p>
            </div>)}
        </div>

        <Link to='/my-books'>My Books</Link>
    </div>
}

export default SearchBooks