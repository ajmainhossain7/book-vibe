import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext = createContext()

const BookProvider = ({ children }) => {
    const [storedBooks, setStoredBooks] = useState([])
    const [wishList, setWishList] = useState([])

    const handleMarkAsRead = (currentBook) => {
        // step 1: store book id or book object
        // step 2: where to store
        // step 2: array or collection
        // step 3: If the book is already exist then show a alert or toast
        // step 4: if not then add the book in the array or collection
        const isExistBook = storedBooks.find(book => book.bookId === currentBook.bookId);
        if (isExistBook) {
            toast.error("The Book is already exist")
        } else {
            setStoredBooks([...storedBooks, currentBook])
            toast.success(`${currentBook.bookName} is added to read list`)
        }
    };

    const handleWishList = (currentBook) => {
        // step 1: store book id or book object
        // step 2: where to store
        // step 2: array or collection
        // step 3: If the book is already exist then show a alert or toast
        // step 4: if not then add the book in the array or collection

        const isExistInReadList = storedBooks.find(book => book.bookId === currentBook.bookId);
        if (isExistInReadList) {
            toast.error("This book already in read list")
            return;
        }

        const isExistBook = wishList.find(book => book.bookId === currentBook.bookId);
        if (isExistBook) {
            toast.error("The book is already exist")
        } else {
            setWishList([...wishList, currentBook])
            toast.success(`${currentBook.bookName} is added to wishlist`)
        }
    };
    
    const handleMoveToRead = (currentBook) => {
    // 1. wishlist থেকে remove
    const updatedWishList = wishList.filter(b => b.bookId !== currentBook.bookId);
    setWishList(updatedWishList);

    // 2. read list এ add (duplicate avoid)
    const alreadyExist = storedBooks.find(b => b.bookId === currentBook.bookId);

    if (!alreadyExist) {
        setStoredBooks([...storedBooks, currentBook]);
    }
    };

    const data = {
        storedBooks,
        setStoredBooks,
        handleMarkAsRead,
        wishList,
        setWishList,
        handleWishList,
        handleMoveToRead 
    }
    return (
        <BookContext.Provider value={data}>{children}</BookContext.Provider>
    );
};

export default BookProvider;