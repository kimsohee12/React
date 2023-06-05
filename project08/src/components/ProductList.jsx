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
  
    const getProductDetail=async()=>{
      let url =`http://localhost:3000/bestList.json`
      let res = await axios.get(url)
      // let data = await response.json();
      setList(res.data.list)
    }
  
    useEffect(()=>{
     getProductDetail()
    },[])
  // useEffect(()=>{
  //   axios.get('/bestList.json').then((res)=>setList(res.data.list))
  //   //axios 로  가져와 졌다면 그 다음에 then 을 실행
  // },[] )
  // res-> response

  return (
    <div className='list-container'>
      {list.map((item)=>(<ProductItem key = {item.no} item={item}index={item.no}/> ))}

    </div>
  )
}

export default ProductList