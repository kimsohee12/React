import React from 'react'
import Main from './Main'
import { Link, Route, Routes } from 'react-router-dom'

const Header = () => {
    /* 로고를 클릭하면 => 메인창으로
        메인창 클릭하면 => 메인창으로 
        목록을 클릭하면 => ProductList  */
       
  return (
    <div className='header-container'>
        <div className ='link-container'>
        <Link to = "/Main"><img width='70px'src="https://i2.wp.com/wowtale.net/wp-content/uploads/2020/12/idus-new-logo.png?w=1920&ssl=1"/></Link> 
        </div>
        <div className ='link-container'>
        <Link to = "/Main">Main</Link> 
        <Link to = "/ProductList">List</Link> 
        </div>
        <div className ='link-container'>
        <Link to = "/Login">Login</Link> 
        </div>
       


    </div>
  )
}

export default Header