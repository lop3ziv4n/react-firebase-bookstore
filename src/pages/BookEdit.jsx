import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {getBookById, updateBook} from '../utils/database';
import Loading from '../components/Loading';


const BookEdit = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [author, setAuthor] = useState("");
    const [ratings, setRatings] = useState(0.0);
    const [reviews, setReviews] = useState(0);
    const [price, setPrice] = useState(0.0);
    const [frontPage, setFrontPage] = useState("");
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const {id} = useParams();

    const fetchBook = async () => {
        setLoading(true);
        const res = await getBookById(id);
        console.log(res);
        setBook(res);
        setLoading(false);
    }

    useEffect(() => {
        fetchBook();
    }, []);

    const setBook = (book) => {
        setTitle(book.title);
        setDescription(book.description);
        setAuthor(book.author);
        setRatings(book.ratings);
        setReviews(book.reviews);
        setPrice(book.price);
        setFrontPage(book.front_page);
    }

    const editBook = async (e) => {
        e.preventDefault()
        const book = {
            id: id,
            title: title,
            description: description,
            author: author,
            ratings: ratings,
            reviews: reviews,
            price: price,
            front_page: frontPage,
        }
        console.log(book);
        await updateBook(book);
        navigate("/");
    }

    const routeChange = () => {
        navigate(`/`);
    }

    return (
        <section className="container">
            <div className="row justify-content-end mt-3">
                <div className="col-3 col-xl-1">
                    <button className="btn btn-outline-dark" type="button"
                            onClick={() => routeChange()}>Back
                    </button>
                </div>
            </div>
            {
                loading ?
                    <Loading/>
                    :
                    <div className="card border-0 mb-4">
                        <h2 className="display-6 text-center text-dark text-uppercase mb-3">Edit book <i
                            className="bi bi-pencil-square"/></h2>
                        <form onSubmit={editBook} className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="inputTitle" className="form-label">Title</label>
                                <input value={title} type="text" className="form-control" id="inputTitle"
                                       placeholder="Title of the book"
                                       onChange={(e) => setTitle(e.target.value)}/>
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="inputAuthor" className="form-label">Author</label>
                                <input value={author} type="text" className="form-control" id="inputAuthor"
                                       placeholder="Author's name"
                                       onChange={(e) => setAuthor(e.target.value)}/>
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="inputDescription" className="form-label">Description</label>
                                <textarea value={description} className="form-control" id="inputDescription" rows="4"
                                          onChange={(e) => setDescription(e.target.value)}/>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputRatings" className="form-label">Ratings</label>
                                <input value={ratings} type="number" className="form-control" id="inputRatings"
                                       placeholder="Ratings of the book"
                                       onChange={(e) => setRatings(e.target.value)}/>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputReviews" className="form-label">Reviews</label>
                                <input value={reviews} type="number" className="form-control" id="inputReviews"
                                       placeholder="Reviews of the book"
                                       onChange={(e) => setReviews(e.target.value)}/>
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="inputPrice" className="form-label">Price</label>
                                <div className="input-group">
                                    <span className="input-group-text" id="inputPricePre">$</span>
                                    <input value={price} type="number" className="form-control" id="inputPrice"
                                           placeholder="Price of the book"
                                           onChange={(e) => setPrice(e.target.value)}/>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <label htmlFor="formFile" className="form-label">Image</label>
                                <input value={frontPage} type="url" className="form-control" id="inputFrontPage"
                                       placeholder="Url image front page"
                                       onChange={(e) => setFrontPage(e.target.value)}/>
                            </div>
                            <div className="row justify-content-end mt-4">
                                <button type="button" className="col-1 btn btn-outline-danger m-2"
                                        onClick={() => routeChange()}>Cancelar
                                </button>
                                <button type="submit" className="col-1 btn btn-outline-primary m-2">Guardar</button>
                            </div>
                        </form>
                    </div>
            }
        </section>
    );
}

export default BookEdit;