import React, { useEffect } from 'react'
import axios from 'axios'
import ProductItem from './ProductItem'

const ProductList = ({list,setList}) => {
/* 
1) public안에 두었던 bestList 값을 가지고 올 것 
    => axios 이용 , useEffect 이용 ,useState배열 이용 
2)  가지고 온 데이터를  state 값 관리
    =>  map  함수, props처리 ( index 값도 )
 */
  
  useEffect(()=>{
    axios.get('/bestList.json').then((res)=>setList(res.data.list))
    
  },[] )

  return (
    <div className='list-container'>
      {list.map((item)=>(<ProductItem item={item}index={item.no}/> ))}

    </div>
  )
}

export default ProductList