import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useSearchParams } from 'react-router-dom'

const AllBooks = () => {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [pageSize, setPageSize] = useState(5)

    useEffect(() => {
        fetchAllPublishedBooksPaginated(currentPage )
    }, [currentPage])

    // API Call -> fetch all published books (paginated)
    async function fetchAllPublishedBooksPaginated() {
        try {
            const result = await axios.get(
                `http://localhost:10000/api/books/published?page=${currentPage}&size=${pageSize}`, 
                {headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTljZTE5YzRjYWYxN2MzOTg0NGU2ZjEiLCJpYXQiOjE3MDQ3ODAzMDksImV4cCI6MTcwNTM4NTEwOX0.ovyYdQk8z-PkyCLoJL1XE0bk7J67Sgz-puskJeG6t_g'}}
            )
            // alert(result?.data?.message)
            setBooks(result?.data?.data);
            setTotalPages(result?.data?.pageInfo?.totalPages);
        } catch (e) {
            alert(e?.response?.data?.message)
        }
    }

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    return <div>
        
            <h1>All Books</h1>

            {books.map(book => <div style={{border: '2px solid white'}}>
                <p>Title: {book?.title}</p>
                <p>Content: {book?.content}</p>
                <p>Genre: {book?.genre}</p>
            </div>)}
    
            <div style={{display: 'flex', marginTop: 24, marginBottom: 24, alignItems: 'center', gap: 16}}>
                <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                <span> Page {currentPage} of {totalPages} </span>
                <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
            </div>

            <h5>INFO: (page size = 5)</h5>

            <Link to='/my-books'>My Books</Link>
    </div>
}

export default AllBooks