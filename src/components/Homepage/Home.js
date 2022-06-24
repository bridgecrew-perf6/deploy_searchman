import React from 'react'
import axios from "axios"
import Modle from './Modle'
import Header from '../Header'

const Home = () => {

   
    const data = localStorage.getItem("datastore")
  
    const [apidata , Setapidata] = React.useState()
    const [apistatus , Setapistatus] = React.useState("Loading...")
    React.useEffect(()=>{

       

       
            const options = {
                method: 'GET',
                url: 'https://free-news.p.rapidapi.com/v1/search',
                params: {q:data, lang: 'en'},
                headers: {
                  'X-RapidAPI-Key': '8925c7629emshe502139e0099e83p1c3948jsnde55879a466f',
                  'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
                }
              };
              
              axios.request(options).then(function (response) {
                console.log(response.data.articles);
                Setapidata(response.data.articles);
                

                if(response.data.articles == undefined){
                  Setapistatus("We could not find any article with this keyword")
                }
                
              }).catch(function (error) {
                console.error(error);
              });
              
           
              
      }, [])

     
  return (
    
    <>

    <Header/>    
    <div style={{"display":"flex" ,  "margin":"0 5%" , "flexWrap":"wrap" , "justifyContent":"space-between" }} className='ModleContainer'>
    {apidata  ? 
        apidata.map((data)=>{

            return(
            
               
                <Modle image={data ? data.media : null} text={data ? data.title : "Loading Resources"} id={data ? data._id : ""}/>
           
            )
        }) :<label style={{"margin":"20% auto" }} className='Apistatus'>{apistatus}</label>

    }
    </div>
    </>
  )
}

export default Home