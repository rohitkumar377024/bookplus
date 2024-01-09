import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const AllBooks = () => {
    const accessToken = useSelector(state => state?.accessToken)
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [pageSize, setPageSize] = useState(5)

    useEffect(() => {
        fetchAllPublishedBooksPaginated(currentPage)
    }, [currentPage])

    // API Call -> fetch all published books (paginated)
    async function fetchAllPublishedBooksPaginated() {
        try {
            const result = await axios.get(
                `https://bookplus-backend.onrender.com/api/books/published?page=${currentPage}&size=${pageSize}`, 
                {headers: {'Authorization': accessToken}}
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

            <h5>INFO: (page size = {pageSize})</h5>

            <Link to='/my-books'>My Books</Link>
    </div>
}

export default AllBooks