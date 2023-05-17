
import LikeList from './components/Ex02LikeList'
import React, { Component } from 'react'
import picsrc from'./img/likePic.gif'
const Ex02 = () => {
    /* React 에서 내부 이미지 경로 지정하는 방법
    
    (1).src 폴더에서 이미지를 import하기
        -import 이미지변수 from '경로'
        -<img src ={이미지변수}/>
    (2).public 폴더 내에 이미지를 저장하고 접근하기
    -public -img 폴더를 만든 후 파일을 보관
    -이 때, 별도로 import는 필요하지 않다
    -> public 폴더는 서버와 계속해서 통신 중이기 때문
    
    */

    /* 실습문제
    
    Step1 )  하트를 클릭 시, 하트가 꽉찬 하트로 변경
    Step2 )  하트를 클릭 시, 좋아요가 1개로 변경
    step3 )  좋아요 상태에서 하트 클릭 시, 다시 원래대로*/



 

  return (
    
    <div>
      <img src={picsrc} width='150px'></img>
      <LikeList/>
      

     
    </div>
  )
}

export default Ex02