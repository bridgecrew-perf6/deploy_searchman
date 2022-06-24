import React from "react";
import axios from "axios";
import Header from "../Header";
import "../styles/MainContent.css"

const MainContent = ({ data }) => {
  const id = localStorage.getItem("ID");
  const [articledata, Setarticledata] = React.useState();
  const [Onedata, Setonedata] = React.useState();

  React.useEffect(() => {
    const options = {
      method: "GET",
      url: "https://free-news.p.rapidapi.com/v1/search",
      params: { q: data, lang: "en" },
      headers: {
        "X-RapidAPI-Key": "8925c7629emshe502139e0099e83p1c3948jsnde55879a466f",
        "X-RapidAPI-Host": "free-news.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.articles);
        Setarticledata(response.data.articles);
        
       
          
        
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

   
  
   React.useEffect(()=>{
   if(articledata) {
        articledata.map((d) => {
            if (id === d._id) {
                console.log(d)
            Setonedata(d);
            
            
            }
            if(Onedata){
                console.log(Onedata)
            }else{console.log("loading.. ONEDATA")}
            
        })
    }else{console.log("loading")}
    
   } , [articledata])
  return (
    <>
    
    <Header/>
        {
            articledata && Onedata ? 
            <div className="Main">
              
                <div className="Imgdiv">
                <img src={Onedata.media ? Onedata.media : ""}/>
                </div>
                <label className="Title">{Onedata.title ? Onedata.title : ""}</label>
                <p className="Summary">{Onedata.summary ? Onedata.summary : ""}</p>
                <label className="published">{Onedata.published_date  ? Onedata.published_date : ""}</label>
            </div> :"Loading..."
        }
    </>
  );
};

export default MainContent;
