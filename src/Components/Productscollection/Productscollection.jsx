import React from 'react'

import './Productscollection.css'
import Item from '../Item/Item'
import all_products from '../Assests/all_products'


const Productscollection = () => {
  return (
    <div className='productscollection'>
     
       <h2 class="title">Our Products</h2>
       <div className='items'>
      
      
         {all_products.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} />
            
         })}
         
        
       </div>
       
    </div>
    
  )
}

export default Productscollection