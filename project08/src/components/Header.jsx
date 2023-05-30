import React from 'react'

const Header = () => {
    /* 로고를 클릭하면 => 메인창으로
        메인창 클릭하면 => 메인창으로 
        목록을 클릭하면 => ProductList  */
  return (
    <div className='header-container'>
        <div className ='link-container'>
            로고
        </div>
        <div className ='link-container'>
            메인창
            목록
        </div>
        <div className ='link-container'>
            로그인
        </div>


    </div>
  )
}

export default Header