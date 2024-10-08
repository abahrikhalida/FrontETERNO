import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Favcollection.css'
import fav_collection from '../Assests/fav_collection'
// import left_icon from '../Assests/left_icon.png'
// import right_icon from '../Assests/right_icon.png'
import Item from '../Item/Item'


const Favcollection = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className='favcollection'>
       <h2 class="title">Our Favorite</h2>
       
      
       <Carousel responsive={responsive}> 
       
         {fav_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
            
         })}
         
               </Carousel> 
      
       
       
    </div>
  )
}

export default Favcollection