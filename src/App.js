import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from './Components/Layout/Container'
import MainPage from './Pages/MainPage/MainPage';
import Signin from './Pages/Signin/Signin';
import Signup from './Pages/Signup/Signup';

function App() {
  return (
    <>
      <Router>
        <Container customClass="min-height">
          <Routes>
            <Route exact path='/' element={<MainPage />}></Route>
            <Route exact path='/signin' element={<Signin />}></Route>
            <Route exact path='/signup' element={<Signup />}></Route>
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
