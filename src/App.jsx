
import React from 'react';
import GetStartedPage from './pages/GetStartedPage';
import SignIn from './pages/SignInPage';
import TheNavbar from './components/navbar';
import SignUp from './pages/SignUpPage';
import { Routes, Route } from 'react-router-dom';



 function App() {
  return (
    <>
    <TheNavbar/>
    
    <div className='flex justify-center items-center h-screen p-10 mb-7 mt-7'>
    <Routes>
      <Route element={<GetStartedPage />} path="*"/>
      <Route element={<GetStartedPage />} path="/" />
      <Route element={<SignIn />} path="/signin" /> 
      <Route element={<SignUp />} path="/signup" />
    
    </Routes>
  </div>
    
    </>
 
  );

}
export default App;


