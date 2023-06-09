import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const ProductList = ({list}) => {
  //type filter 작업을 거치고 사용할 list

  /* 만약, '원피스' 페이지를 클릭하면type이 dress 인것만
           '전체' 페이지를 클릭하면 전체 */
  const [typeParams, setTypeParams] = useSearchParams()
  let type = typeParams.get('type');
  let newList = type!==null && list.filter(item => item.product.ptype=='dress')

  const nav = useNavigate()

  return (
    <div>

      {/* 사진 이미지 
      상품명 - 가격을 10개 상품 모두 띄워줄것 */}


    {type ==null ?
    list.map(item=>
      <div key={item.product.pcode} onClick={()=>{nav(`/product/${item.product.pcode}`)}}>
      <img width='100px' src={"data:image/;base64,"+item.product.img}></img>
      <p><strong>{item.product.pname}</strong> {item.product.price}</p>
      </div>
    )
    :
    newList.map(item=>
      <div key={item.product.pcode} onClick={()=>{nav(`/product/${item.product.pcode}`)}} >
      <img width='100px' src={"data:image/;base64,"+item.product.img}></img>
      <p><strong>{item.product.pname}</strong> {item.product.price}</p>
      </div>
    )

  }   

    </div>
  )
}

export default ProductList