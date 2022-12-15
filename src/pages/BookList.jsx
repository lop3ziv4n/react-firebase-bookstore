import React, {useEffect, useState} from 'react';

import {getBooks} from '../utils/database';
import BookCard from '../components/BookCard';
import Loading from '../components/Loading';

const BookList = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBooks = async () => {
        setLoading(true);
        const res = await getBooks();
        console.log(res);
        setBooks(res);
        setLoading(false);
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <section className="container">
            {loading ? (
                <Loading/>
            ) : (
                <div className="row h-auto">
                    {books.map((book) => (
                        <div className="col-lg-4 col-md-6 p-3" key={book.id}>
                            <BookCard key={book.id} book={book} refresh={fetchBooks}/>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}

export default BookList;