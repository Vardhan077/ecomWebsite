import React from 'react'
import './styles/App.css';
import Home from './components/home';
import Products from './components/Products';


import { BrowserRouter, Routes, Route} from 'react-router-dom';

const App = () =>(
  <BrowserRouter  basename={'/ecomWebsite'} >
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/products' element = {<Products/>}></Route>
        </Routes>
      </BrowserRouter>
)
  
        
  


export default App;
