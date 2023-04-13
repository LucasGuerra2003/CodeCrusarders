import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from '../Components/Layout/Container'
import { AuthProvider } from '../Auth/Auth';

import MainPage from '../Pages/MainPage/MainPage';
import Signin from '../Pages/Signin/Signin';
import Signup from '../Pages/Signup/Signup';
import Home from '../Pages/Home/Home';

function AppRoutes() {
  return (
    <>
      <Router>
        <Container customClass="min-height">
          <Routes>
            <Route exact path='/' element={<MainPage />}></Route>
            <Route exact path='/signin' element={<Signin />}></Route>
            <Route exact path='/signup' element={<Signup />}></Route>
            <Route exact path='/home' element={<Home />}></Route>
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default AppRoutes;
