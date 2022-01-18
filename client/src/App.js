import React from 'react';
import FormPage from './Components/FormPage';
import Signup from './Components/Signup';
import Email from './Components/Footer/Email/Email'
import { Routes,Route} from 'react-router-dom';
import Home from './Home/Home';
import Message from './Components/Message/Message'
import Errorpage from './Components/ErrorPage/ErrorPage';


/* import G_Map from './Components/G_Map'; */

const App = () => {
  return (
    <>
     
       <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/FormPage' element={<FormPage/>}></Route>
      {/* <Route path='/G_Map' element={<G_Map/>}></Route> */}
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/Email' element={<Email/>}></Route>
      <Route path='/Message' element={<Message/>}></Route>
      <Route path='*' element={<Errorpage/>}></Route>
        </Routes> 
        

    
        </>
  )
}

export default App
