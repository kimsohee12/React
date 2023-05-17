import React from 'react'
import { useState } from 'react'

const Ex04Board = ({name,path,score}) => {
    
     

  return (
    <div className='board-item'>
        <h3>{name}</h3>
        <img src ={path}></img>
        <h4>현재 점수는?</h4>
        <h3>{score}</h3>

    </div>
  )
}

export default Ex04Board