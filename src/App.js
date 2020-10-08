import React from 'react';

import './assets/styles/App.css';
import './assets/styles/_common.css';
import MyCarousalItems from './components/SwipeableViews';
import NavigationBar from './components/NavigationBar';
import Strip from './components/Strip';
import SliderAndMenu from './components/SliderAndMenu';
import CardHeader from './components/Cardheader';
import RowItem from './components/RowItem';
import item1 from './assets/images/itm1.jpg';
import item2 from './assets/images/itm2.png';
import item3 from './assets/images/itm3.png';
import item4 from './assets/images/itm4.jpg';
import item5 from './assets/images/itm5.jpg';
import ItemCard from './components/Cards';
import BodySliderComponent from './components/BodySliderComponent';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <NavigationBar/>
    <Strip/>
     <SliderAndMenu/>
     <BodySliderComponent/>
     

     <div className="ma" style={{marginBottom:"132px"}}></div>
   <Footer/>
    </>
  );
}

export default App;
