import React from 'react'

import Header from '../Header'
import "../styles/Search.css"

const Search = ({Setdata}) => {

 
 
  const Searchinput = React.useRef()

  const HandleClick = () =>{
    Setdata(Searchinput.current.value)
    

  }

  
  return (

    <>

    <Header/>

    <div className='SearchDiv'>

     
      <label>in Search man</label>
      <p>We provide you with any article you </p>
      <p>search for</p>
      <input ref={Searchinput} placeholder='Search Here!'/>
      <button onClick={HandleClick}><a style={{"textDecoration":"none" , "color":"black"}} href='/Home'>Search</a></button>
     
    </div>
    
    </>
  )
}

export default Search