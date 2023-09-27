import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import Quiz from '../Quiz';
import AdminPannel from '../Antities/AdminPannel';

const RoutesComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='adminpanel' element={<AdminPannel/>} />
          <Route path='/quiz' element={<Quiz />} />

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default RoutesComponent
