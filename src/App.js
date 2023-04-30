import './App.css';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Dinner from './components/Menu/MenuListComponent/Dinner';
import Dessert from './components/Menu/MenuListComponent/Dessert';
import Cocktails from './components/Menu/MenuListComponent/Cocktails';
import Brunch from './components/Menu/MenuListComponent/Brunch';
import MothersDay from './components/Menu/MenuListComponent/MothersDay';
import GoldenHour from './components/Menu/MenuListComponent/GoldenHour';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import MothDayGifBox from './components/MothersDayGiftBox/MothDayGifBox';
import BuyItem from './components/MothersDayGiftBox/BuyItem';
import Art from './components/art/Art';
import DragBun from './components/DragBunch.js/DragBun';
import HourLoc from "./components/footer/HourLoc";
import Contact from "./components/footer/Contact";
import DressCode from "./components/footer/DressCode";
import Jobs from "./components/footer/Jobs";
import ScrolToTop from "./components/ScrolToTop";
import PrivateDinning from './components/PrivateDinning/PrivateDinning';
import Catering from './components/catering/Catering';

function App() {

  return (
    <div className="App">
      <Header />
      <ScrolToTop />
      <Routes>
        <Route path='/singh5star/' element={<Home />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/menu/golden-hour' element={<GoldenHour />} />
        <Route path='/menu/dinner' element={<Dinner />} />
        <Route path='/menu/dessert' element={<Dessert />} />
        <Route path='/menu/cocktails' element={<Cocktails />} />
        <Route path='/menu/brunch' element={<Brunch />} />
        <Route path='/menu/mothers-day-weekend' element={<MothersDay />} />
        <Route path='/store' element={<MothDayGifBox />} />
        <Route path='/store/product/mothers-day-gift-box' element={<BuyItem />} />
        <Route path='/art' element={<Art />} />
        <Route path='/drag-brunch' element={<DragBun />} />
        <Route path='/private-dining' element={<PrivateDinning />} />
        <Route path='/catering' element={<Catering />} />
      </Routes>

      <Routes>
        <Route path='/location/singh-restaurant' element={<HourLoc />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dress-code' element={<DressCode />} />
        <Route path='/jobs' element={<Jobs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
