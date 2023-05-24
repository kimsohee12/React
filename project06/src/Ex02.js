import React, { useEffect, useState } from 'react'

const Ex02 = () => {
    /* 
    1. constructor를 대체
    => state,등 변수 초기화
    */
   console.log('1. constructor 를 대체 => 함수 초기화');
   const [num , setnum] = useState(0);
   
   /* 3. 화면 갱신 직후 - componentDidMount 
    - useEffect 라는 리액트 훅을 사용
    - useEffect (콜백함수, 비어있는 배열)
    useEffect( ()=>{},[] )
    => 화면의 렌더링이 끝났을 때 (Mount)첫번째 인자에 있는 콜백함수를 호출
    -API call 과 같은 무거운 작업
     */
   useEffect(()=>{
    console.log('3.화면 렌더링 완료 ');
   },[]);

   /* 값이 변화 했을 때 - componentDidUpdate대체
    - useEffect 사용
    - useEffect (콜백함수, [변화를 감지할 state]) 
    - useEffect ( ()=>{}, [num] )
    => num 이라는 state 가 변할 때 마다 콜백함수 호출
     */
    useEffect( ()=>{console.log('**값이 변화했습니다**')} ,[num] )
    //[] 안을 비워두면 모든 변화를 감지


   return (
       <div>
        {/* 2.render를 대체*/}
        {console.log('2.render를 대체=> retrun 문 안')}
        <h1>Function Component : {num} </h1>
        <button onClick={()=>{setnum(num+1)}}>+1</button>
        <button onClick={()=>{setnum(num-1)}}>-1</button>
       
    </div>
  )
}

export default Ex02