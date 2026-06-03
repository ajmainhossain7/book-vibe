import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../context/BookContext';

const BookDetails = () => {
    const { bookId: paramId } = useParams();
    const books = useLoaderData();

    const expectedBook = books.find(book => book.bookId === Number(paramId));

    if (!expectedBook) {
        return <p className="text-center mt-10">Book not found</p>;
    }

    const {
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing,
    } = expectedBook;

    const { handleMarkAsRead, handleWishList } = useContext(BookContext)


    return (
        <div className="max-w-5xl mx-auto p-8 my-16 flex flex-col md:flex-row gap-20">

            {/* Image Section */}
            <div className="bg-gray-100 p-8 w-full md:w-[450px] flex items-center justify-center rounded-xl">
                <img
                    src={image}
                    alt={bookName}
                    className="md:h-[450px] h-[250] object-cover rounded-lg shadow-md"
                />
            </div>

            {/* Details Section */}
            <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-900">{bookName}</h1>
                <p className="text-gray-500 mt-1 mb-4">By : {author}</p>

                <hr className="my-4" />

                <p className="text-lg font-medium text-gray-700">{category}</p>

                <hr className="my-4" />

                <p className="text-sm text-gray-600 leading-relaxed">
                    <span className="font-semibold text-black">Review : </span>
                    {review}
                </p>

                {/* Tags */}
                <div className="flex items-center gap-3 mt-5 flex-wrap">
                    <span className="font-semibold text-sm">Tag</span>
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-medium"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                <hr className="my-5" />

                {/* Info */}
                <div className="text-sm text-gray-600 grid grid-cols-2 gap-y-3 max-w-md">
                    <span>Number of Pages:</span>
                    <span className="font-semibold text-black">{totalPages}</span>

                    <span>Publisher:</span>
                    <span className="font-semibold text-black">{publisher}</span>

                    <span>Year of Publishing:</span>
                    <span className="font-semibold text-black">{yearOfPublishing}</span>

                    <span>Rating:</span>
                    <span className="font-semibold text-black">{rating}</span>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex gap-4">
                    <button onClick={() => handleMarkAsRead(expectedBook)} className="btn">
                        Read
                    </button>
                    <button onClick={() => handleWishList(expectedBook)} className="btn btn-info text-white">
                        Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;