import React, { useContext } from 'react'
import { ColorContext } from '../context/Ex02ColorContext';

const Ex02ColorList = () => {
    let color = ['red','orange','yellow','green','blue'];

    /* 
        Context 안에 있는 데이터가 필요하다면 useContext() 활용 */
    const {setchoiceColor} = useContext(ColorContext);

  return (
    <div style={{display : 'flex'}}>
        {/*display : 'flex'-> container 에 적어줘야함 /item에 적는거 아님   */}
        {color.map(item=>
            <div 
            onClick={(e)=>{setchoiceColor(e.target.style.backgroundColor);}}
            key = {item} style={{
                width : '100px',
                height : '100px',
                backgroundColor :`${item}`
            }} ></div>
            )}

    </div>

  )
}

export default Ex02ColorList