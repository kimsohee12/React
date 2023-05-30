import './App.css';

import { Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import NotFound from './components/NotFound';
import MyPage from './components/MyPage';
import ProductDetail from './components/ProductDetail';

function App() {
  /* 
     React Router 를 사용해보자
    1. react router dom  설치
     -npm i react-router-dom
    2. BrowserRouter 
     ->  index.js  로 가서 App 을 BrowserRouter 로 감싸기
     ->  React router  사용하기 위해서라면 필수 
    3. Routes - Route
      - Routes : 여러 Route(경로)들을 감싸서, 하위 Route중 조건에 맞는 
      Route하나만 렌더링 해주는 역할
      과거에는 Switch 라는 문법의 이름으로 사용
      ex) 유저 "나 메인페이지 줘
          Routes " ㅇㅋ 메인페이지 줄게"
      -Route : 여러경로
              필수 속성이 2가지(Path,element)
              Path(경로) : 사용자가 이렇게 요청했을 때 
              element ( 컴포넌트) : 어떤 컴포넌트 보여주세요

  */
 /*미션 수행 순서
  1)  Route 처리
  -BrowserRouter, Routes,Route,...etc
  -inport export
  
  2)  App.js 에 list state 관리 해주기
  - tip ! 함수 또한 prps로 보낼수 있다는것을 명심
  ex) const[list,setList] = useState([])
  ...
  <Main List = {list} setList={setList}/>
  3)Header Mission
  4)product List Mission
  4)product Item Mission
  4)product Detail Mission
  */

  return (
    <div className='container'>
      <h1> Welcome to React Router</h1>
     <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/Mypage' element={<MyPage/>}></Route>
      <Route path='/product/:num' element={<ProductDetail/>}></Route>
      {/*  path 가 *라면, 위의 경로 이외에 경로들을 처리 */}
      <Route path='*' element={<NotFound/>}></Route>
     </Routes>
    

    </div>
  );
}

export default App;
