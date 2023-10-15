import './App.css';
import Myapp from './Myapp';
import Props from './Props';



function App() {

  return (
    <div className="App">
    <Myapp contact= {{ name :"ashif",
     age:"21",
     gender : "male",
     image:"https://tse3.mm.bing.net/th?id=OIP.KHZXE_Xx_R3ML0CNUkZUgAHaE8&pid=Api&P=0&h=180"}}/>
    <Myapp contact= {{ name :"bharath",
     age:"21",
     gender : "male",
     image:"https://tse2.mm.bing.net/th?id=OIP.wAL5NOHwQEmPGYpjLmrczAHaE8&pid=Api&P=0&h=180"}}/>
    <Myapp contact= {{ name :"balaji",
     age:"21",
     gender : "male",
     image:"https://tse2.mm.bing.net/th?id=OIP.7i0OXFy4XIE9YPtCCdPn3wHaLH&pid=Api&P=0&h=180"}}/>
    <Myapp contact= {{ name :"pravinth",
     age:"21",
     gender : "male",
     image:"https://tse4.mm.bing.net/th?id=OIP.gYDv9ZV7OYcnpFRh_KHI2AHaE8&pid=Api&P=0&h=180"}}/>
    </div>
    
  );
}

export default App;
