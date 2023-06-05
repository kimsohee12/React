import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import {Routes , Route} from "react-router-dom"
import Login from './components/Login';
import ProductDetail from './components/ProductDetail';
import Storage from './components/Storage';
import { useState } from 'react';

/* 
  미션 수행 순서
  1) Route 처리
  -BrowserRouter, Routes, Route ...etc
  -import export
  
  2)App.js에 list state관리해주기
  -tip! 함수 또한 props로 보낼 수 있다는 것을 명심!
  ex) const[list, setList] = useState([])

    <Main list={list} setList={setList}/>

  3)Header Mission
  4)Product List Mission
  5)Product Item Mission
  6)Product Detail Mission
  */


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
        <Route path='/productDetail/:id' element={<ProductDetail list={list}/>}></Route>
        <Route path='/Storage' element={<Storage/>}></Route>
      </Routes>
      <Footer/>

      
    </div>
  );
}

export default App;
