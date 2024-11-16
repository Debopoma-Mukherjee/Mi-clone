import React from 'react'
import HotItemCard from './HotItemCard'
import '../styles/HotAccessories.css'
const HotAccessories = ({music,musicCover,smartDevice,smartDeviceCover,home,homeCover,lifestyle,lifestyleCover,mobileAccessories,mobileAccessoriesCover}) => {
  return (
    <div className='HotAccessories'>
      <div>
        <img src={musicCover||smartDeviceCover||homeCover||lifestyleCover||mobileAccessoriesCover} alt="music cover" />
      </div>
      <div>
        {music && music.map((item,index)=>(
            <HotItemCard key={item.image} index={index} name={item.name} image={item.image} price={item.price}/>
        ))
        }
        {smartDevice && smartDevice.map((item,index)=>(
            <HotItemCard key={item.image} index={index} name={item.name} image={item.image} price={item.price}/>
        ))
        }
        {home && home.map((item,index)=>(
            <HotItemCard key={item.image} index={index} name={item.name} image={item.image} price={item.price}/>
        ))
        }
        {lifestyle && lifestyle.map((item,index)=>(
            <HotItemCard key={item.image} index={index} name={item.name} image={item.image} price={item.price}/>
        ))
        }
        {mobileAccessories && mobileAccessories.map((item,index)=>(
            <HotItemCard key={item.image} index={index} name={item.name} image={item.image} price={item.price}/>
        ))
        }
      </div>
    </div>
  )
}

export default HotAccessories
