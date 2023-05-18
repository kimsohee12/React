import React from 'react'

const Ex02MenuItem = ({name,price,content,imgSrc}) => {
  return (
    <div>
        <img src={imgSrc} width="200px"/>
        <p>
            <span>{name}</span>
            <span> {price} 원</span><br></br>
            <span>{content}</span>

        </p>
    </div>
  )
}

export default Ex02MenuItem