import React, { useContext, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/listedBooks/ListedReadList';
import ListedWishList from '../../components/listedBooks/ListedWishList';
import { IoIosArrowDown } from 'react-icons/io';

const Books = () => {
    const { storedBooks, wishList } = useContext(BookContext)
    const [sortingType, setSortingType] = useState("")
    return (
        <div className='container mx-auto my-12 px-5 mt-20'>
            <div className='flex justify-center mb-7'>
                <div className="dropdown dropdown-bottom dropdown-center">
                    <div tabIndex={0} role="button" className="btn btn-success font-semibold text-white">Sort by : {sortingType} <IoIosArrowDown /></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li onClick={() => setSortingType('Pages')}>
                            <a>Pages</a>
                        </li>
                        <li onClick={() => setSortingType('Rating')}>
                            <a>Rating</a>
                        </li>
                    </ul>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books({storedBooks.length})</Tab>
                    <Tab>Wishlist Books({wishList.length})</Tab>
                </TabList>

                <TabPanel>
                    <ListedReadList sortingType={sortingType}></ListedReadList>
                </TabPanel>
                <TabPanel>
                    <ListedWishList sortingType={sortingType}></ListedWishList>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;