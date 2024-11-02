import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, bookName, image, author, tags, rating, category } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-96 border p-6">
                <figure className='bg-blue-200 py-8 rounded-2xl'>
                    <img
                        src={image}
                        className='h-[160px]'
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className='flex justify-center gap-4'>
                        {
                            tags.map((tag, index) => <button key={index} className="btn btn-xs bg-green-200 text-green-600">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className="border-t-2 border-dashed"></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="rating gap-1">
                            <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400" defaultChecked />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                            <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;