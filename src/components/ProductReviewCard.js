import React from 'react'
import '../styles/ProductReviewCard.css'
const ProductReviewCard = ({image,name,price,index,review}) => {
  return (
    <div className='ProductReviewCard'>
      <img src={image} alt={index} />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </div>
  )
}

export default ProductReviewCard
