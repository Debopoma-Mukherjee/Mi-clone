import React from 'react'
import Offer from './Offer'
import '../styles/Offers.css'
const Offers = ({offer}) => {
  return (
    <div className="offersSection">
    {
        offer.map((item,index)=>(
            <Offer key={item.image} index={index} src={item.image} link={item.url} ></Offer>
        ))
    } 
    </div>
  )
}

export default Offers
