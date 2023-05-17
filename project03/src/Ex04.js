import Board from './components/Ex04Board'
import'./style/ex04.css'
import { Button } from 'react-bootstrap';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
const Ex04 = () => {
    

    /* 주사위 게임을 만들어보자!

        1) user가 '던지기!' 버튼을 클릭한다. 
        2) 유저의 주사위 숫자가 랜덤으로 표시된다. 
        3) 컴퓨터의 주사위 숫자 또한 랜덤으로 표시된다. 
        4) 유저의 주사위 숫자 - 컴퓨터의 주사위 숫자를 비교 
            3-1) 내가 이겼을 경우는 나의 점수 + 1
            3-2) 내가 졌을 경우는 컴퓨터의 점수 + 1 
        5) 먼저 5점을 낸 사람이 최종 승리 
            => alert 당신의 승리입니다! 당신의 패배입니다! 
        6) RESET 버튼을 클릭 시, 모든 내용이 초기화 
            - 점수, 이미지 경로, 이미지 파일 번호 


        HINT!! 필요한 정보들 
        - 주사위 숫자 (나, 컴퓨터)
        - 이미지 경로 (나, 컴퓨터)
        - 점수 (나, 컴퓨터)
        ===> Board의 props 데이터로 
    */

    //이미지 경로 가져오기 (public 폴더 이용할 때만 가능한 방법
    let path ='./img/dice'
    let num1 =0;
    let num2 =0;
    
    const [myDice, setmyDice] = useState(0) //주사위 숫자
    const [comDice, setcomDice] = useState(0) //주사위 숫자
    const [comScore, setComScore] = useState(0);
    const [myScore, setmyScore]=useState(0)// 점수
    const [myPath, setmyPath]=useState(path +'1.png')// 점수
    const [comPath, setcomPath]=useState(path + '1.png')// 점수
    

    const start = ()=>{
        num1=Math.floor(Math.random() * 6) + 1;
        setmyPath(path + num1 + '.png')
        num2=Math.floor(Math.random() * 6) + 1;
        setcomPath(path + num2 + '.png')
        
        if(num1>num2){
            setmyScore(myScore+1);
           
        }else{
            setComScore(comScore+1);
            
        }
           console.log(num1 , num2);
    }

    //리셋버튼
    const reset=()=> {
        setmyScore(0);
        setComScore(0);
        setmyPath(path +'1.png')
        setcomPath(path +'1.png')
        
      }
    
    
  return (

    <div className='container'>
        <h1>주사위 게임</h1>
        <div className='btn-container'>

        <Button variant="secondary" onClick={start}>던지기</Button>{" "}
        <Button variant="danger" onClick={reset}>RESET</Button>
        </div>
        <div className='board-container'>
            <Board name = "나" path={myPath} score ={myScore}/>
            <Board name = "컴퓨터" path={comPath} score ={comScore}/>
            {myScore ===5 && myScore(5) && alert("당신의 승리입니다!")}
            {comScore ===5 && comScore(5) && alert("당신의 패배입니다!")}
            {myScore === 5 || comScore === 5 && reset()}
        </div>
    </div>
    

  )
}

export default Ex04