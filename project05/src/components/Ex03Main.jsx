/* 내가 작성한 코드
import React, { useContext } from 'react'
import { ColorContext2 } from '../context/Ex03ColorContext';

const Ex03Main = () => {
   
    const {isDark,setIsDark} = useContext(ColorContext2);
    const {setBackcolor} = useContext(ColorContext2);
    const {setTxtcolor} = useContext(ColorContext2);
   
    const check =()=>{
        if(isDark){
            setIsDark(false)
            setBackcolor('black')
            setTxtcolor('white')
        }else{
            setIsDark(true)
            setBackcolor('white')
            setTxtcolor('black')
        }
    }

    const color = ()=>{

    }
    return (
    <div >
        <h3>Main</h3>
        <button onClick={()=>{check();}}>다크모드</button>
            
            
        <br/>
       
    </div>
  )
}

export default Ex03Main
*/
import React, { useContext } from 'react'
import { ThemeContext } from '../context/Ex03ThemeContext'

const Ex03Main = () => {
    const {isDark,setIsDark} = useContext(ThemeContext)
    const toggleTheme =()=>{
        setIsDark(!isDark)
        
        
    }
  return (
    <div style={{backgroundColor : isDark ? "black" : "white",
                 color :  isDark ? "white" : "black" }}>
        Ex03Main
        <br/>
        <button onClick={toggleTheme}>다크모드</button>
    </div>
  )
}

export default Ex03Main