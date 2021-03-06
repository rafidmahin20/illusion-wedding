import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Components/About Me/AboutMe';
import Blogs from './Components/Blogs/Blogs';
import CheckOut from './Components/Checkout/CheckOut';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import ServicePage from './Components/Services/ServicePage';
import Signhp from './Components/Signup/SignUp';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}/>
        {/* <Route path='/home' element={}/> */}
        <Route path='/services' element={<ServicePage/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signhp/>}/>
        <Route path='/service/checkout/:serviceId' element={
          <RequireAuth>
            <CheckOut/>
          </RequireAuth>
        }/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
