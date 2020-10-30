import React from 'react';

import './assets/styles/App.css';
import './assets/styles/_common.css';
import NavigationBar from './components/NavigationBar';
import Strip from './components/Strip';
import SliderAndMenu from './components/SliderAndMenu';
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
