import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import '../styles/ProductReview.css'
const ProductReviews = ({productReviews}) => {
  return (
    <div className="ProductReviews">
        {
            productReviews.map((item,index)=>(
                <ProductReviewCard key={item.image} review={item.review} name={item.name} price={item.price} index={index} image={item.image} />
            ))
        }
      
    </div>
  )
}

export default ProductReviews
