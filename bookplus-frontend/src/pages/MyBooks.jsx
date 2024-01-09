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
            // alert(result?.data?.message)
            setBooks(result?.data?.data)
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }

    // API Call -> fetch user published books
    async function unpublishBook(bookID) {
        try {
            // TODO -> modify this user ID
         
            const result = await axios.put(
                `https://bookplus-backend.onrender.com/api/books/unpublish/${bookID}`, 
                {},
                {headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTljZTE5YzRjYWYxN2MzOTg0NGU2ZjEiLCJpYXQiOjE3MDQ3ODAzMDksImV4cCI6MTcwNTM4NTEwOX0.ovyYdQk8z-PkyCLoJL1XE0bk7J67Sgz-puskJeG6t_g'}}
            )

            alert(result?.data?.message)

            // re-fetch published books list
            await fetchUserPublishedBooks()
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }

    return <div>
        <h1>My Published Books</h1>

        <hr/>
        <Link to='/publish-book'>Publish New Book</Link>
        <hr/>
        <Link to='/search-books'>Search Books</Link>
        <hr/>
        <Link to='/all-books'>All Published Books (Paginated)</Link>
        <hr/>

        <br/>

        <div>
            {books.map(book =><div style={{border: '2px solid white'}}>
                <p>Title: {book?.title}</p>
                <p>Content: {book?.content}</p>
                <p>Genre: {book?.genre}</p>
                <button onClick={() => unpublishBook(book?._id)}>UNPUBLISH BOOK</button>
            </div>)}
        </div>
    </div>
}

export default MyBooks