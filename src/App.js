import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Container from './Components/Layout/Container'
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <Router>
        <Container customClass="min-height">
          <Routes>
            <Route exact path='/' element={<Home />}></Route>
          </Routes>
        </Container>
      </Router>
    </>
  );
}

export default App;
