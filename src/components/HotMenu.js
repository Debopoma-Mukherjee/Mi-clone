import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/HotMenu.css'
const HotAccessoriesMenu = () => {
  return (
    <div className="HotMenu">
    <Link className="HotLink" to="/music">Music Store</Link>
    <Link className="HotLink" to="/smartDevices">Smart Devices</Link>
    <Link className="HotLink" to="/home">Home</Link>
    <Link className="HotLink" to="/lifestyle">Lifestyle</Link>
    <Link className="HotLink" to="/mobileAccessories">Mobile Accessories</Link>
    </div>
  )
}

export default HotAccessoriesMenu
