import { useState } from "react";


const LikeList = (props) => {

    const [like,setlike]= useState(0);

   const [heart,setheart]=useState('🤍')
    
    const handleLike =(props)=>{
        
        if(like==0){
            setheart('💗')
            setlike(like+1)
            
        }else{
            setheart('🤍')
            setlike(like-1)
            
        }
        console.log('ck');
        
    }
    
  return (
    <div >
        <span onClick={handleLike} >{heart}</span>{" "}
        <span>좋아요 {like}개</span>
    </div>
  )
}

export default LikeList