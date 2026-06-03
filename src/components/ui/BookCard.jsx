import React from 'react';
import { FaRegStar } from 'react-icons/fa';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm p-2">
            <figure className='bg-base-200 p-8 mx-6 mt-6'>
                <img
                    src={book.image}
                    className='h-[150px]'
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex items-center gap-2'>
                    {book.tags.map((tag, index) => (
                        <div key={index} className="badge text-green-500 bg-green-100">{tag}</div>
                    ))}
                </div>
                <h2 className="card-title">
                    {book.bookName}
                </h2>
                <p>{book.author}</p>
                <div className="card-actions border-t border-dashed pt-4 border-gray-400 justify-between">
                    <div className="badge">{book.category}</div>
                    <div className="badge flex gap-2">{book.rating} <FaRegStar /></div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;