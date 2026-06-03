import React, { use } from 'react';

import BookCard from '../ui/BookCard';
const booksPromise = fetch("/booksData.json").then((res) => res.json());
const AllBooks = () => {
    const books = use(booksPromise)
    return (
        <div className='my-12 container mx-auto px-5'>
            <h2 className='font-bold text-3xl my-6 text-center'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                {
                    books.map((book, index) => {
                        return (
                            <BookCard key={index} book={book}></BookCard>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default AllBooks;