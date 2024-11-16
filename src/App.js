import './App.css';
import PreNavbar from './components/PreNavbar'
import Navbar from './components/Navbar'
import {Route,Routes, BrowserRouter as Router} from "react-router-dom"
import Slider from './components/Slider'
import data from "./data/data.json"
import Offers from "./components/Offers"
import Heading from "./components/Heading"
import StarProduct from "./components/StarProduct"
import HotMenu from "./components/HotMenu"
import HotAccessories from "./components/HotAccessories"
import ProductReviews from './components/ProductReviews';
import Videos from './components/Videos'
import Banner  from './components/Banner';
import Footer from './components/Footer'
import NavOptions from './components/NavOptions'

function App() {
  return (
  <Router>
    <PreNavbar/>
    <Navbar/>
    <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
    
    <Slider start={data.banner.start}/>
    <Offers offer={data.offer}/>
    <Heading text="STAR PRODUCTS"/>
    <StarProduct starProduct={data.starProduct}/>
    <Heading text="HOT ACCESSORIES"/>
    <HotMenu/>
    <Routes> 
      <Route 
        exact 
        path="/music"
        element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} 
      />
    </Routes>
    <Routes> 
      <Route 
        exact 
        path="/smartDevices"
        element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} 
      />
    </Routes>
    <Routes> 
      <Route 
        exact 
        path="/home"
        element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} 
      />
    </Routes>
    <Routes> 
      <Route 
        exact 
        path="/lifestyle"
        element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle} />} 
      />
    </Routes>
    <Routes> 
      <Route 
        exact 
        path="/mobileAccessories"
        element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} 
      />
    </Routes>
    <Heading text="PRODUCT REVIEWS"/>
    <ProductReviews productReviews={data.productReviews}/>
    <Heading text="VIDEOS"/>
    <Videos videos={data.videos}/>
    <Heading text="IN THE PRESS"/>
    <Banner end={data.banner.end}/>
    <Footer footer={data.footer}/>
  </Router>
  );
}

export default App;
