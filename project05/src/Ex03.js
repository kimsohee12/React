/* 내가 작성한 코드 
import React, { useState } from 'react'
import Ex02Header from './components/Ex03Header'
import Ex02Main from './components/Ex03Main'
import { ColorContext2 } from './context/Ex03ColorContext'


const Ex03 = () => {

    const[isDark,setIsDark] = useState(false);
    const[backcolor,setBackcolor] = useState('white');
    const[txtcolor,setTxtcolor] = useState('black');

  return (
    <ColorContext2.Provider value={{isDark,setIsDark,setBackcolor,setTxtcolor}}>

        <div style={{backgroundColor :`${backcolor}`,color : `${txtcolor}`, height : "100vh"}}>
            
            <Ex02Header/>
            <Ex02Main/>
        </div>
    </ColorContext2.Provider>
  )
}

export default Ex03*/

import React, { useState } from 'react'
import Ex03Header from './components/Ex03Header'
import Ex03Main from './components/Ex03Main'
import { ThemeContext } from './context/Ex03ThemeContext'


const Ex03 = () => {
  const [isDark,setIsDark] =useState(false)

  return (
    //어플리케이션의 Theme 과 관련된 데이터 
    //=> 전역적으로 사용, 관리 => context

  <ThemeContext.Provider value={{isDark,setIsDark}}>
      <div>
          <Ex03Header/>
          <Ex03Main/>

      </div>
  </ThemeContext.Provider>
  )
}

export default Ex03