import React from 'react'
import "../styles/Modle.css"
const Modle = ({image , text , id}) => {

  
  const HandleClick = ()=>{

    localStorage.setItem("ID" , id)
  }
  return (

    <div  className='ModleDiv'>

        <img src={image}/>
        <p>{text}</p>
        <button> <a onClick={HandleClick} href={'./Displayinfo/' + id}> Read </a> </button>
    </div>
   
  )
}

export default Modle