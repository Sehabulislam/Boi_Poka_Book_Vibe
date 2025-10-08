import React, { Suspense, useEffect, useState } from 'react';
import Book from './Book';

const Books = ({datas}) => {

    // const [allBooks , setAllBooks] = useState([]);
    // console.log(allBooks);
    
    // useEffect(() => {
    //     fetch('booksData.json')
    //     .then(res => res.json())
    //     .then(data => setAllBooks(data))
    // },[])

    // const booksPromise = fetch('booksData.json').then(res => res.json())
    return (
        <div>
            <h2 className='playfair-font font-bold text-center text-5xl md:my-5'>Books</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 w-10/12 mx-auto gap-5 my-5'>
                <Suspense fallback={<p>Loading....</p>}>
                {
                    datas.map(data => <Book key={data.bookId} data={data}></Book>)
                }
            </Suspense>
            </div>
            {/* <Book data={data}></Book> */}
        </div>
    );
};

export default Books;