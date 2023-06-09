import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/Ex04TodoContext';

const Ex04AddTodo = () => {
    /* 전역 데이터 중 내가 가지고와야할 자료들  */
  const {newTodo,handleNewTodo,handleTodoAddition} = useContext(TodoContext);
    
  return (
    <div>
        <input type ="text" placeholder="할일을 입력하세요" onChange={handleNewTodo} value ={newTodo}/>
        <button onClick={handleTodoAddition}>추가</button>
      

    </div>
  )
}

export default Ex04AddTodo