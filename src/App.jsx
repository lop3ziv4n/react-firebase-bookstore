import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import BookList from './pages/BookList';
import BookInfo from './pages/BookInfo';
import BookCreate from './pages/BookCreate';
import BookEdit from './pages/BookEdit';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';


const App = () => (
    <main>
        <Navbar/>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<BookList/>}/>
                <Route path='/info/:id' element={<BookInfo/>}/>
                <Route path='/create' element={<BookCreate/>}/>
                <Route path='/edit/:id' element={<BookEdit/>}/>
            </Routes>
        </BrowserRouter>
        <Footer/>
    </main>
);

export default App;
