import {addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc} from 'firebase/firestore';
import {firestore} from './firebase';

const collectionBooks = collection(firestore, "books");

const getBookById = async (id) => {
    const docBook = await getDoc(doc(firestore, "books", id));
    return docBook.data();
}

const getBooks = async () => {
    const docBooks = await getDocs(collectionBooks);
    return docBooks.docs.map((doc) => ({...doc.data(), id: doc.id}));
}

const deleteBook = async (id) => {
    const docBook = doc(firestore, "books", id);
    await deleteDoc(docBook);
}

const updateBook = async (book) => {
    const docBook = doc(firestore, "books", book.id);
    await updateDoc(docBook, book);
}

const createBook = async (book) => {
    await addDoc(collectionBooks,
        {
            title: book.title,
            description: book.description,
            author: book.author,
            ratings: book.ratings,
            reviews: book.reviews,
            price: book.price,
            front_page: book.frontPage
        }
    );
}

export {getBookById, getBooks, deleteBook, updateBook, createBook};
