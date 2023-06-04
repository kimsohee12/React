import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import {Routes , Route} from "react-router-dom"
import Login from './components/Login';
import ProductDetail from './components/ProductDetail';
import { useState } from 'react';
import ProductItem from './components/ProductItem';



function App() {

  const[list, setList] =useState([]);



  return (
    <div className='container'>
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/Main' element={<Main/>}></Route>
        <Route path='/ProductList' element={<ProductList list={list} setList={setList}/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/ProductItem' element={<ProductItem list={list} setList={setList}/>}></Route>
        <Route path='/productDetail/:id' element={<ProductDetail list={list}/>}></Route>
      </Routes>
      <Footer/>

      
    </div>
  );
}

export default App;
