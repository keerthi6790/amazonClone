import './App.css';
import NavBar from './Component/NavBar/NavBar';
import Category from './Component/Category/Category';
import Carousel from './Component/Carousel/Carousel';
import img from './image/slide1.jpg'
import img1 from './image/slide2.jpg'
import img2 from './image/slide3.jpg'
import WholeCards from './Component/WholeCards/WholeCards';
const images=[
  {url: `${img}`},
  {url:`${img1}`},
  {url:`${img2}`}
];
function App() {
  return (
    <div>
    <NavBar />
    <Category/>
    <Carousel images={images}/>
    <WholeCards/>
    </div>
  );
}

export default App;
