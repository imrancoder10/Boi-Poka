import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('./booksData.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);
    return (
        <div className='flex justify-center items-center'>
            <div>
                <h2 className="text-4xl text-center font-bold my-4">Books</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center'>
                    {
                        books.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Books;


/***
 * 1. state to store books 
 * 2. useEffect
 */