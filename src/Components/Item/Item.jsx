import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import Rating from '@mui/material/Rating';

const Item = (props) => {
    return (
      <div className='item'>
          <Link to={`/product/${props.id}`}> <img src={props.image} alt="" /></Link>
           <p>{props.name}</p>
           
              <div className="item-price-new">
                  {props.new_price} da
              </div>
              <div className='stars'> <Rating name="size-medium" defaultValue={2} /></div>
              
      </div>
    )
  }
  
  export default Item