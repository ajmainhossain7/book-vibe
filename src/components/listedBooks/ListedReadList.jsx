import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';

const ListedReadList = ({sortingType}) => {
    const { storedBooks } = useContext(BookContext);
    const [filteredReadList, setFilteredReadList] = useState(storedBooks)

    useEffect(() => {
        if(sortingType){
            if(sortingType === 'Pages'){
                const sortedData = [...storedBooks].sort((a,b) => a.totalPages -b.totalPages,);
                setFilteredReadList(sortedData)
                
            }else if(sortingType === 'Rating'){
                const sortedData = [...storedBooks].sort((a,b) => b.rating -a.rating,);
                setFilteredReadList(sortedData)

            }
        }
    }, [sortingType, storedBooks])

    if (filteredReadList.length === 0) {
        return <p className="text-center mt-10 text-gray-500">No books found 📚</p>;
    }

    return (
        <div className="space-y-6">
            {filteredReadList.map((book) => {
                const {
                    bookId,
                    bookName,
                    author,
                    image,
                    totalPages,
                    rating,
                    category,
                    tags,
                    publisher,
                    yearOfPublishing,
                } = book;

                return (
                    <div
                        key={bookId}
                        className="border rounded-xl p-5 flex flex-col md:flex-row gap-6 items-center"
                    >
                        {/* Image */}
                        <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center w-[120px] h-[160px]">
                            <img
                                src={image}
                                alt={bookName}
                                className="h-full object-cover rounded"
                            />
                        </div>

                        {/* Content */}
                        <div className="flex-1 w-full">
                            <h2 className="text-xl font-bold">{bookName}</h2>
                            <p className="text-gray-500 text-sm mb-2">
                                By : {author}
                            </p>

                            {/* Tags + Year */}
                            <div className="flex flex-wrap gap-3 text-sm items-center mb-2">
                                <span className="font-medium">Tag</span>
                                {tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                                <span className="text-gray-500">
                                    📍 Year of Publishing: {yearOfPublishing}
                                </span>
                            </div>

                            {/* Publisher + Pages */}
                            <div className="flex gap-6 text-sm text-gray-500 mb-3">
                                <span>👥 Publisher: {publisher}</span>
                                <span>📄 Page {totalPages}</span>
                            </div>

                            <hr className="my-3" />

                            {/* Bottom Section */}
                            <div className="flex flex-wrap gap-3 items-center">
                                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs">
                                    Category: {category}
                                </span>

                                <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs">
                                    Rating: {rating}
                                </span>

                                <button className="ml-auto bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-full text-sm">
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ListedReadList;