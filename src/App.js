import React from 'react';
import AppRoutes from './Routes/AppRoutes';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();


function App() {
  return (
    <>
<<<<<<< HEAD
      <AppRoutes />
=======
      <Router>
        <Container customClass="min-height">
          <Routes>  
            <Route exact path='/' element={<MainPage />}></Route>
            <Route exact path='/signin' element={<Signin />}></Route>
            <Route exact path='/signup' element={<Signup />}></Route>
          </Routes>
        </Container>
      </Router>
>>>>>>> 25c391df299f6fba99e96787f5e9c39e8c1d5bde
    </>
  );
}

export default App;
