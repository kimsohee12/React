import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ProductDetail = ({ list}) => {
  let {id} = useParams();


  return (
    <div className='productDetail-container'>
      
       <img className='productDetail-img' width="200px" alt="" src={list[id - 1].src} />
       <p>제품명 : {list[id - 1].title}</p>
       <p>

       <span>가격 : {list[id - 1].price}원 </span>{" "}

       {/* 배송비가 무료라면 '배송비 무료' 배송비 유료라면 '배송미 3000원 으로 띄워주기 */}
       {list[id - 1].delivery=='free'? <span> / 배송비 무료</span> : <span>배송비 : {list[id - 1].delivery}원 </span>}
       </p>
       <Link to ="/ProductList" className='list'><span> 목록으로 돌아가기</span> </Link>
    </div>
    
  )
}

export default ProductDetail