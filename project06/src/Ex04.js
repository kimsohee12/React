import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
const Ex04 = () => {

    let movieUrl = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230523';


    /* 화면에 영화 랭킹을 띄워주자!
    =>네트워크 요청을 위해 사용하는 API
    - jQuery + Ajax =>논외
    - Fetch API ( New!)
     >장점 : JS가 제공, 별도의 설치 x 
    - Axios (New!)
    */

    /* 왜 API를 가지고 오는 것을 useEffect 안에 넣어줄까? 
    - useEffect의 순서는 화면이 마운트 된 이후!
    - 화면이 먼저 뜨고-> 데이터를 가지러 감
    - 사용자 입장에서 조금 더 빠른 환경을 제공
    */

    const[list, setlist] =useState([]);


   useEffect(()=>{
    // Case 1) Fetch API
    // fetch(movieUrl)
    // .then(res => res.json()) //받아온 데이터를 json 형식의 데이터로 반환
    // .then(res => {
    // //Q fetch API 로 가지고 온 값을 1~10위 까지 화면에 띄워주자
    // setlist(res.boxOfficeResult.dailyBoxOfficeList)
    // })
    // .catch(()=>{console.log('error!')})


       /*
   Case 2) Aoxios 라이브러리
   (1) axios 설치 - npm install axios ->npm i axios
   (2) import axios from 'axios' 
    **fetch랑 다른점**
   -json을 불러올 필요가 없음, get을 사용해서 가져와야함
   */
    axios.get(movieUrl)
    .then(res =>{
     setlist(res.data.boxOfficeResult.dailyBoxOfficeList);
    })
    .catch(()=>{console.log('error!')})

    /* Axios VS Fetch
    (1) Fetch  
        -장점
        a. js 의 내장 라이브러리 -> 굳이 설치하거나 import할 필요가 없다
        b. 내장라이브러리이기 때문에 업데이트에 영향을 받지 않는다.
        
        -단점 
        a. 지원하지 않는 브라우저가 존재 했었음 
        (익스플로러 11이 지원 x -> 지금은 익스플로러가 없어짐)=> JQuery + ajax가 흥했던 이유
        b. JSON 으로 변환해주는 과정이 필요하다
        c. axios 에 비해 기능이 적다 
        
        (2) Axios 
        - 장점
        a. 기능이 많다
        b. JSON으로 변환해주는 과정이 필요 없다.
        c. 크로스 브라우징 최적화 (다양한 브라우저 지원)

        -단점
        a. 설치 필요 
        */


   },[])
   


    
  return (
    <div className='container'>
        <h1>영화 순위</h1>
       {list.map (item => <p>{item.rank}. {item.movieNm} - {item.openDt} 개봉</p>)}
        
    </div>
  )
}

export default Ex04