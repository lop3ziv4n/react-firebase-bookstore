import React from 'react';
import {useNavigate} from 'react-router-dom';
import swal from 'sweetalert';

import {deleteBook} from '../utils/database';
import noImage from '../assets/no-image.png';

const BookCard = ({book, refresh}) => {
    const navigate = useNavigate();

    const routeInfo = (id) => {
        navigate(`/info/${id}`);
    }

    const routeEdit = (id) => {
        navigate(`/edit/${id}`);
    }

    const confirmDelete = (id) => {
        swal({
            title: 'Esta seguro que desea eliminar este elemento?',
            text: 'Una vez eliminado no podra recuperarlo!',
            icon: 'warning',
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                removeBook(id);
            }
        });
    }

    const removeBook = async (id) => {
        await deleteBook(id);
        console.log(`delete: ${id}`);
        refresh();
    }

    return (
        <div className="card bg-dark bg-opacity-75 border-0">
            <div className="row" onClick={() => routeInfo(book.id)} style={{cursor: 'pointer'}}>
                <div className="col-5">
                    <img src={book.front_page != null && book.front_page !== "" ? book.front_page : noImage}
                         className="img-fluid"
                         alt={book.title} style={{height: '15rem'}}/>
                </div>
                <div className="col-7 d-flex align-self-center">
                    <div className="card-body">
                        <h5 className="card-title text-white">{book.title}</h5>
                    </div>
                </div>
            </div>
            <div className="row bg-light justify-content-end">
                <div className="btn-group col-3">
                    <button type="button" className="btn btn-danger btn-sm"
                            data-bs-toggle="tooltip" data-bs-placement="bottom"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="Remove book"
                            onClick={() => confirmDelete(book.id)}>
                        <i className="bi bi-trash"/>
                    </button>
                    <button type="button" className="btn btn-primary btn-sm"
                            data-bs-toggle="tooltip" data-bs-placement="bottom"
                            data-bs-custom-class="custom-tooltip"
                            data-bs-title="Edit book"
                            onClick={() => routeEdit(book.id)}>
                        <i className="bi bi-pencil"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BookCard;


