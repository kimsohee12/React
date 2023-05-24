import React, { useRef } from 'react'


const Ex07 = () => {
    const imgRef = useRef();
    const inputRef = useRef();

    

    const imgch =()=>{
        if(inputRef.current.value =='나연'){

            imgRef.current.src= 'https://image.genie.co.kr/Y/IMAGE/IMG_MUZICAT/IV2/Genie_Magazine/12093/Mgz_Main_Top_20220623151701.jpg/dims/resize/Q_80,0'          
        }else if (inputRef.current.value =='앙꼬'){            
            imgRef.current.src= 'https://item.kakaocdn.net/do/36f3c53e2d9b4def8b2f65100dd8ababf604e7b0e6900f9ac53a43965300eb9a'         
        }else {
            imgRef.current.src="";
        }
        //검색 후 input 란 비워주기
        inputRef.current.value="";
        //검색 후 마우스 커서를 input란에 두기
        inputRef.current.focus();
    }

  return (
    <div>
        <p>희망하는 사진이 있으신가요?</p>
        <input ref={inputRef} type ="text"/>
        <button onClick={imgch}>변경</button>

        <div>
            <img ref={imgRef} src='https://item.kakaocdn.net/do/36f3c53e2d9b4def8b2f65100dd8ababf604e7b0e6900f9ac53a43965300eb9a'
                width='200px'></img>
        </div>

    </div>
  )
}

export default Ex07