import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {getBookById} from '../utils/database';
import Loading from '../components/Loading';
import noImage from '../assets/no-image.png';

const BookInfo = () => {
    const [book, setBook] = useState(null);
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

    const routeChange = () => {
        navigate(`/`);
    }

    const routeEdit = (id) => {
        navigate(`/edit/${id}`);
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
                        <h2 className="display-6 text-center text-dark text-uppercase m-4">{book.title}</h2>
                        <div className="row">
                            <div className="col-md-12 col-xl-4">
                                <div className="row justify-content-center">
                                    <img
                                        src={book.front_page != null && book.front_page !== "" ? book.front_page : noImage}
                                        className="img-fluid" style={{width: '20rem'}}
                                        alt={book.title}/>
                                </div>
                            </div>
                            <div className="col-md-12 col-xl-8">
                                <h3 className="text-start text-dark text-decoration-underline mb-4">{book.author}</h3>
                                <p>
                                    {book.description}
                                </p>
                                <div className="row justify-content-around">
                                    <div className="col-4">
                                        <h5>Price:</h5>
                                        <h4 className="display-5">
                                            <span className="badge rounded-pill text-bg-primary">$ {book.price}</span>
                                        </h4>
                                    </div>
                                    <div className="col-8">
                                        <div className="row justify-content-lg-end justify-content-center">
                                            <div className="col-4">
                                                <h5>Rating:</h5>
                                                <h4>
                                                    <span
                                                        className="badge rounded-pill text-bg-danger">{book.ratings}</span>
                                                </h4>
                                            </div>
                                            <div className="col-4">
                                                <h5>Reviews:</h5>
                                                <h4>
                                                    <span
                                                        className="badge rounded-pill text-bg-danger">{book.reviews}</span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-end mt-3">
                            <div className="col-3 col-xl-1">
                                <button className="btn btn-outline-primary" type="button"
                                        onClick={() => routeEdit(id)}>Edit
                                </button>
                            </div>
                        </div>
                    </div>
            }
        </section>
    );
}

export default BookInfo;