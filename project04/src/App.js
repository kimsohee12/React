import logo from './logo.svg';
import './App.css';

function App() {
  let students =[
    {name:'박정현', age : 26 , gender : 'man'},
    {name:'이선아', age : 26 , gender : 'woman'},
    {name:'서유광', age : 26 , gender : 'man'}
  ]

  /* Map 함수
     - 주어진 함수를 호출한 결과를 모아 새로운 함수를 만든다
     ex) students 라는 배열의 이름만 뽑아서 새로운 함수를 만들고 싶을때 
     -> 기존 배열은 영향을 받지 않는다*/

     //map 함수 사용할 때 key 값을 꼭 작성해야한다
     // -> 이 때, key 값은 서로 중복되면 안된다. 고유한 값이어야 함
  let newStudents = students.map(item=><button key={item.name}>{item.name} </button>)
  console.log('new :' , newStudents);
  /* 간단한 예제 
  안녕하세요 저는 000 입니다. 제 나이는 00살 이에요 
  안녕하세요 저는 000 입니다. 제 나이는 00살 이에요 
  안녕하세요 저는 000 입니다. 제 나이는 00살 이에요 
  => <p> 태그로 화면에 출력 
   */
  //let Introduction = students.map(item=><p key={item.itd}>안녕하세요 저는 {item.name}입니다. 제 나이는 {item.age}살이에요 </p>)


  //==========================filter==============================

   let womanList=students.filter(item=>item.gender=='woman')
   console.log('womanList :' , womanList);
  return (
    <div>
      <h2>Map 함수</h2>
      {newStudents}
      {students.map(item=>
       <p key={item.name}>안녕하세요 저는 {item.name}입니다. 제 나이는 {item.age}살이에요 </p>)}
    
    <br></br>
    <h2>Filter 함수</h2>
    {/*  filter 함수는 배열의 각 요소에 대해서 주어진 함수의 결과값이
     true 인 요소들만 모아서 새로운 배열로 반환하는 함수를 의미한다. */}
    {womanList.map(item=>
       <p key={item.name}>안녕하세요 저는 {item.name}입니다. 제 나이는 {item.age}살이에요 </p>)}

    </div>
  );
}

export default App;
