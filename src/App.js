// import logo from './logo.svg';
import './App.css';
import AddTwoNumComponent from './components/AddTwoNumComponent';
import AskQuestionsComponent from './components/AskQuestionsComponent';
import GreaterOrLessComponent from './components/GreaterOrLessComponent';
import HomePageComponent from './components/HomePageComponent';
import MadLibComponent from './components/MadLibComponent';
import MagicEightComponent from './components/MagicEightComponent';
import OddOrEvenComponent from './components/OddOrEvenComponent';
import RestaurantPickerComponent from './components/RestaurantPickerComponent';
import ReverseItAlphaComponent from './components/ReverseItAlphaComponent';
import ReverseItNumComponent from './components/ReverseItNumComponent';
import SayHelloComponent from './components/SayHelloComponent';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>

      {/* Browser Router enables clientside routing (Routes pages without full page reloading) */}


      <BrowserRouter>
        {/* Routes is used for your route structure */}
        <Routes>
          {/* Route defines our path to the individual components */}
          {/* '/' is our default route */}
          <Route path='/' element={<HomePageComponent />} />
          <Route path='SayHello' element={<SayHelloComponent />} />
          <Route path='AddTwoNum' element={<AddTwoNumComponent />} />
          <Route path='AskQuestions' element={<AskQuestionsComponent />} />
          <Route path='GreaterOrLess' element={<GreaterOrLessComponent />} />
          <Route path='MadLib' element={<MadLibComponent />} />
          <Route path='MagicEight' element={<MagicEightComponent />} />
          <Route path='OddOrEven' element={<OddOrEvenComponent />} />
          <Route path='RestaurantPicker' element={<RestaurantPickerComponent />} />
          <Route path='ReverseItAlpha' element={<ReverseItAlphaComponent />} />
          <Route path='ReverseItNum' element={<ReverseItNumComponent />} />
        </Routes>


      </BrowserRouter>
      {/* <HomePageComponent/>
      <SayHelloComponent/>
      <AddTwoNumComponent/>
      <AskQuestionsComponent/>
      <GreaterOrLessComponent/>
      <MadLibComponent/>
      <MagicEightComponent/>
      <OddOrEvenComponent/>
      <RestaurantPickerComponent/>
      <ReverseItAlphaComponent/>
      <ReverseItNumComponent/> */}
    </>
  );
}

export default App;
