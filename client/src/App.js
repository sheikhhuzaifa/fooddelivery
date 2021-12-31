import React from 'react';
import FormPage from './Components/FormPage';
import Signup from './Components/Signup';

import { Routes,Route} from 'react-router-dom';
import Home from './Home/Home';

/* import G_Map from './Components/G_Map'; */

const App = () => {
  return (
    <>
     
       <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/FormPage' element={<FormPage/>}></Route>
      {/* <Route path='/G_Map' element={<G_Map/>}></Route> */}
      <Route path='/Signup' element={<Signup/>}></Route>
      
        </Routes> 
        

    
        </>
  )
}

export default App
