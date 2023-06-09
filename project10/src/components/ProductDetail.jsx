import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let {num}=useParams()
  console.log('num',num);

  const [one,setOne] = useState();

  //axios 통해서 한가지 상품에 대한 정보만 가져오기 
  useEffect(() => {
    // 화면이 mount 되었을 때 back-end Data를 가져오겠다.
    axios.get(`http://172.30.1.23:8090/shop/${num}`).then((res) => {
      console.log("결과", res.data);

      setOne(res.data);
      
    });
    
  }, []);
 
console.log(one);
// == useEffect(()=>{},[one])

  return (
    <div>
      {one!==undefined &&
      <div>
        <img width='100px' src={"data:image/;base64,"+one.product.img}></img>
        <p><strong>{one.product.pname}</strong> {one.product.price}</p>
      </div>
      }
    </div>
  )
}

export default ProductDetail