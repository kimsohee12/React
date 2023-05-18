import React from 'react'
import menu from './menu.json'
import MenuItem from './components/Ex02MenuItem'
import './style/ex02.css'

const Ex02 = () => {
    
     let newList =menu.list.filter(item=>item.price >=4200);

  return (
    <div>
      <h1> 전체 메뉴 </h1>
       <div className='m'>
         {menu.list.map(item=>
         <MenuItem key={item.name}name={item.name} price = {item.price} imgSrc = {item.imgSrc}conrent = {item.conrent}/>)}
       </div>

      <h1> 4200원 보다 비싼 메뉴들</h1>
      <div className='m'>
        {newList.map(item =>
         <MenuItem key={item.name}name={item.name} price = {item.price} imgSrc = {item.imgSrc}conrent = {item.conrent}/>)}
      </div>

     
    </div>
  )
}

export default Ex02