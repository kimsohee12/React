/*내가 작성한 코드
import React, { useContext } from 'react'
import { ColorContext2 } from '../context/Ex03ColorContext'

const Ex03Header = () => {
  
  return (
    <div>
        <h2>스마트인재개발원 :)</h2>
    </div>
  )
}

export default Ex03Header
*/

import React, { useContext } from 'react'
import { ThemeContext } from '../context/Ex03ThemeContext'

const Ex03Header = () => {

  const {isDark} = useContext(ThemeContext)

  return (
    <div style={{backgroundColor : isDark ? 'black' : 'white',
                 color : isDark ? 'white' : 'black'}}>
      스마트인재개발원
    </div>
  )
}

export default Ex03Header