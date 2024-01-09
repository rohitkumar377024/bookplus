import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const MyBooks = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetchUserPublishedBooks()
        
    }, [])

     // API Call -> fetch user published books
     async function fetchUserPublishedBooks() {
        try {
            // TODO -> modify this user ID
            const userID = '659ce19c4caf17c39844e6f1'
            const result = await axios.get(
                `https://bookplus-backend.onrender.com/api/books/user?userID=${userID}`, 
                {headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTljZTE5YzRjYWYxN2MzOTg0NGU2ZjEiLCJpYXQiOjE3MDQ3ODAzMDksImV4cCI6MTcwNTM4NTEwOX0.ovyYdQk8z-PkyCLoJL1XE0bk7J67Sgz-puskJeG6t_g'}}
            )
            alert(result?.data?.message)
            setBooks(result?.data?.data?.map(book => book?.title))
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }

    return <div>
        <h1>My Published Books</h1>

        <Link to='/publish-book'>Publish New Book</Link>
        <div></div>
        <Link to='/search-books'>Search Books</Link>

        <div>
            {books.map(book => <h3 style={{border: '2px solid white'}}>{book}</h3>)}
        </div>
    </div>
}

export default MyBooks