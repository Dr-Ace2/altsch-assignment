import React, { useEffect, useState } from "react";

let Paginate=()=>{

        let [current , setCurrent]= useState(0)
        let [news , setNews]= useState(null)
        let [loading , setLoading]= useState(true)
        let [listitems , setListitems]= useState([])

        useEffect(()=>{
            
            let newsitems =[
        
                {
                    
                    title: "news item1",
                    description:"This is first news item",
                    url:"htps://www.google.com", 
                    imageurl:"https://www.w3schools.com/howto/img_avatar.png"
                },
                
                
                {
        
                title: "news item2",
                description:"This is second news item",
                url:"htps://www.google.com", 
                imageurl:"https://www.w3schools.com/howto/img_avatar.png"
            },
            {
                
                title: "news item3",
                description:"This is 3rd news item",
                url:"htps://www.google.com", 
                imageurl:"https://www.w3schools.com/howto/img_avatar.png"
        
            },
            {
                
                title: "news item4",
                description:"This is 4th news item",
                url:"htps://www.google.com", 
                imageurl:"https://www.w3schools.com/howto/img_avatar.png"
            },
            {
            
                title: "news item5",
                description:"This is 5th news item",
                url:"htps://www.google.com", 
                imageurl:"https://www.w3schools.com/howto/img_avatar.png"
            }
        
        ];

           const item= newsitems[current]
           setListitems(newsitems)
           setNews(item);
           setLoading(false);

        }, [current])


let handlenext=(event)=>{


    event.preventDefault();
 let length=listitems.length;
 let count = length - 1;

 if(current < count ){
    setCurrent(current + 1)}
    else {
      setCurrent(0)
    }
 }

let handleprevious=(event)=>{
    event.preventDefault();

    if(current > 0){
        setCurrent (prev => prev - 1)
    }else{
        setCurrent(0)

    }
}



    return(
        <div>
            


            {
                loading? <div>loading </div> :
                <div> 
                    
                <div key={news.id}>
                  <h2>{news.title}</h2>
                  <h2>{news.description}</h2>
                  <a href="{news.url}">{news.url}  </a>
                  <h2>{news.imageurl}</h2>
  
                 </div>
              
              </div>

            }
            <div className="paginate">
                    <button onClick={handleprevious}>Previous</button>
                    <button onClick={handlenext}>Next</button>
            </div>
        </div>
    )
}

export default Paginate;