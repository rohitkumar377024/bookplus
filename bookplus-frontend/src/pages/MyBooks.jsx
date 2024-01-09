import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const MyBooks = () => {
    const navigate = useNavigate()

    const [books, setBooks] = useState(
        ['Book 1', 'Book 2', 'Book 3']
    )

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