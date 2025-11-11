
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import Footer from './components/Footer.js';
import Menu from './pages/Menu.js';
import Stores from './pages/Stores.js';
import Contact from './pages/Contact.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import MenuFirstProduct from './components/MenuFirstProduct.jsx';
import Meals20Off from './pages/Meals20Off.js'
import PopularChicken from './pages/PopularChicken.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
                 
        <Route path='/' element={<Home/>} />    
         <Route path='/Menu' element={<Menu/>} >  
              <Route index element={<MenuFirstProduct/>}/>
              <Route path='/Menu/Meals20off' element={<Meals20Off/>}/>
              <Route path='/Menu/PopularChicken' element={<PopularChicken/>}/>
         </Route>                               
         <Route path='/Stores' element={<Stores/>} />
           <Route path='/Contact' element={<Contact/>} />
          
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
