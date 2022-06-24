import React from "react";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import Search from "./components/Searchpage/search"
import Home from "./components/Homepage/Home"
import Displayinfo from "./components/Displayinfo/MainContent"

const App = () => {

  const datastore = localStorage.getItem("datastore")
  const [data , Setdata] = React.useState(datastore)

  React.useEffect(()=>{


      localStorage.setItem("datastore" , data)
   
    
    
  }, [data])
  return (
    <>
      
        
        <BrowserRouter>
        
        <Routes>
        <Route path="/" element={<Search Setdata={Setdata}/>} />
  
        <Route path="/Home" element={<Home data={data}/>} />
        
        <Route path="/Displayinfo/:id" element={<Displayinfo data={data} />} />
        </Routes>

     
        
        </BrowserRouter>
       
       
         

        
    
    </>
  );
};

export default App;
