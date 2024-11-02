import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../utility/addToDb';

const BookDetails = () => {
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)
    // console.log(book);
    const { bookI1d, image, bookName, author, review, tags, totalPages, publisher, yearOfPublishing, rating } = book;

    const handleMarkAsRead = (id) => {
        /**
         * 1. understand what to store or save: => book Id
         * 2. Where to store: database
         * 3. array , list , collection: 
         * 4. check: if the book is already in the readList.
         * 5. if not, then add the book to the list .
         * 6. if yes, do not add the book.
         */

        addToStoredReadList(id);
    }
    const handleAddToWishList = () => {
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row ">
                <div>
                    <img
                        src={image}
                        className="max-w-lg rounded-lg p-5 w-[260px]" />
                </div>
                <div>
                    <h1 className="text-2xl font-bold">{bookName}</h1>
                    <p>By: {author}</p>
                    <div className="divider"></div>
                    <p>Fiction</p>
                    <div className="divider"></div>
                    <p className="py-2">
                        <b>Review: </b>{review}
                    </p>
                    <div>
                        <b>Tag:</b>
                        {
                            tags.map((tag, index) => <button className="btn btn-sm bg-purple-500 text-white">{tag}</button>)
                        }
                    </div>
                    <div className='divider'></div>
                    <div>
                        <table className='w-2/5'>
                            <tr>
                                <td>Number of Pages:</td>
                                <th className='text-left'>{totalPages}</th>
                            </tr>
                            <tr>
                                <td>Publisher:</td>
                                <th className='text-left'>{publisher}</th>
                            </tr>
                            <tr>
                                <td>Year Of Publishing:</td>
                                <th className='text-left'>{yearOfPublishing}</th>
                            </tr>
                            <tr>
                                <td>Rating:</td>
                                <th className='text-left'>{rating}</th>
                            </tr>
                        </table>
                    </div>
                    <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline btn-accent mr-4">Mark as Read</button>
                    <button onClick={() => handleAddToWishList()} className="btn btn-active btn-accent mr-4">Add to Wish List</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;