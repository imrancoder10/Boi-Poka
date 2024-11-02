import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/addToDb';
import Book from '../Book/Book';

const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const allBooks = useLoaderData();
    // ideally we will directly get the read book list from the database.
    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));
        //worst way
        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);

    }, []);
    return (
        <div>
            <h3 className="text-xl3 my-6">Listed Books</h3>
            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl my-5'>Books I Read: {readList.length}</h2>

                    <div className='flex justify-center items-center'>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6'>
                            {
                                readList.map(book => <Book key={book.bookId} book={book}></Book>)
                            }
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl my-5'>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;