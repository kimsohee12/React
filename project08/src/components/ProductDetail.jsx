import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = ({ list}) => {
  let {id} = useParams();

  //const getProductDetail=async()=>{
    //let url =`http://localhost:3000/ProductList/${id}`
    // let response = await fetch(url)
    // let data = await response.json();
  //}

  //useEffect(()=>{
  //  getProductDetail()
  //},[])
  return (
    <div className='product-container'>
       <img width="200px" alt="" src={list[id - 1].src} />
       <p>{list[id - 1].title}</p>
       <p>{list[id - 1].price}원</p>
       <p>배송비 {list[id - 1].delivery}</p>

    </div>
  )
}

export default ProductDetail