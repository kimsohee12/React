import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//1.양방향 데이터 전달 
//import App from './Ex01';

//2.Context API (useContext)
//import App from './Ex02';

//3.Context 실습 -다크모드 만들기
//import App from './Ex03';
//4. mini 프로젝트 -Todo List 만들기
import App from './Ex04';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();